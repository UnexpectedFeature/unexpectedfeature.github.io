---
title: REDASCII Engine Post-Mortem
author: Samuele Lorefice
tags: 
- Game Engine
- CLI
- C#
---

## Intro

> _**December 2019**_
> _It was Devember time._
> _While some internet guys were doing some other useless challenges,_
> _developers all around the world (and mainly around reddit),_
> _started doing their devember challenges._
> _And me, being bored and with too much free time,_
> _started to think about creating a game engine..._
> _In the console... Using ASCII Art for sprites._

###### _Is this even a good idea?_

### First: What is Devember?
The [Devember](https://devember.org) website says:

>_Devember is a challenge you take up. It is an excuse for programming, for learning to code and for sharing it._

##### Basically
You pick a challenge for yourself, that has to last you an entire month, all while updating a code repository and a blog about your journey.
My choice for the challenge was: 

>_to create a game engine that run on system console._

### The goals
The statement above was basically the initial promise behind all the project. I went more in-depth and added some key goals to achieve, to help myself shaping this game engine:
- The engine itself will focus on 2D graphics.
- It should handle just position and rotation of the ASCII sprites.
- ASCII Art only.
- Focus on the whole screen composition with things like transparency, borders and clean rendering.
- Performance is a bonus point but not required. For what I know from previus experience Console.WriteLine is not really optimized if you are rewriting the whole screen, a better way would be direct access to the console buffer.
- The whole Project will be developed over .Net Core, using C# as usual.
- Bonus point for not using C++ code or C functions calls for optimization.
- There should be different subsystems running at the same time (graphic, sound, input) just like any other game engine.
- Bonus point for not using external libraries.
- The project will be publicy aviable on my GitHub profile.
- Over the course of making this engine I will also program varius games to test the engine itself and also help shaping it in the right way.
- Some of the games I want to create are: Pong, Tic Tac Toe, Space Invaders, Tetris.

### How it went
*Not well obviously.* It lasted 10 days before abandoning the project. 17 months later here I am writing a post-mortem for this disaster of a project.
If you want to read the Dev logs, they are still available on my [old blog](https://r3dc0d3.tumblr.com). I'll not discuss the actual process that went into making this project.
I think I've documented enough on my blog at that time. And It's been a long time since I touched this project, so I can't remember some bits that would be key to properly analyze the tought process I was following.
But looking back at your old projects is always a good thing, you can see how your coding skills have evolved, how your way to approach a problem has changed in the years...

That's exactly what I'm going to do now. I'm going to clone the repo and take a look at the code.

## On the surface
The first big mistake that I made back at that time was using C# in first place. C# doesn't exactly have a direct access to the console buffers. Performance was going to be really bad. And even if I technically said to myself _"Performance is a bonus point but not required."_ I'm **that** guy, the guy who always want to optimize the last bit of everything.

By just looking at the repo, another bad habit of mine quickly appears: I always start projects first, and only later I create a repo for them. The second commit adds a lot of files and folders to the project, and the worst thing is the lack of documentation on them.

> There isn't a single line of comment on the first commit

This might not seem like a problem at a first glance. But now, good luck at understanding what I was thinking at that time.
Okay, this is a minor thing overall, but still annoys the hell out of me.

The third commit adds a lot more files, but how many lines of documentation does it add? 0.

The fourth commit? Nah, that's a **working day save**.

> What the hell is a working day save?!?

Basically: _"this is unfinished code. But I'm going to sleep, so I'm going to commit and push it and I'll continue tomorrow."_

**Seems legit.**

The fifth comment adds an entire subproject. At that point I moved a tiny amount of code into an external DLL to have things "cleaner". How much documentation there was at this stage? 0! Was it really needed inside another DLL? Nah. A separate namespace was already a perfect solution.

_Why I'm even looking at this?_

The first glimpse of documentation start to appear only after 13 commits. Keep in mind that there are only 15 commits in total.

### What to take from this
17 months ago I was basically packing multiple changes inside a single commit. This defeats the point of having commits. If every commit addds another half of the total code, your ability to go back and fix some issue is greatly reduced. I was basically dumbing down git.
Also, not writing documentation on your code is a bad idea. At the end of the commit history, only around 7 methods have documentation about their inner workings. If anybody has to take a look at the code and understand how it works, he would have a bad time.

## Diving into the project
### Project structure
![](https://i.imgur.com/gl4Kkm1.png)
Well, what the f*** I'm looking at?
How does all of this work?
What I was doing over a year ago?

By just looking at the project structure I got all the possible PTSDs you can get from opening your old code.

Let's close the "Advanced Console" project for now.

### REDASCII Engine
_If you are wondering, the RED part is because online I go by "REDCODE", the origin of this nickname is saved for another post. Let's get back on this project now._

By looking around, if you know how a graphic engine works, you might recognize some patterns. Back in the day, I tried to program this engine to work in a way similar to how actual game engines work.
This was both a blessing and a curse at the same time.
A blessing because I can easily know what each part is supposed to do and how it should technically work.
A curse because I was pretty new to game engine programming at the time (and even today, I'm not exactly an expert when it comes to game engine programming).

#### The library structure
The REDASCII Engine library is supposed to be reference from your game program. It's supposed to be modular (the Graphics, Sound and Input systems are all separate, or it would have been separate. Only the graphic system has some code).

#### Graphic system
This is basically the renderer of the game engine. Most of the code inside this folder are `structs` and `enums`. The inner workings of the renderer are in the `Renderer` class implementation.

But before diving in this crazy mess of a "Renderer", let's talk a bit about the way you are supposed to use this "engine".

### The worst way of doing a project
Being excited to work on something is always a good feeling. But whenm the excitement makes you skip the entire planning step, you are doomed.
My way of developing this engine was fundamentally wrong. I started writing code too early. I planned nothing, and I achieved nothing.
To be honest I did _some_ planning.

> Wanna take a look at the master plan?
> There you go:

![https://i.imgur.com/bjswTtx.png](https://i.imgur.com/bjswTtx.png)

This is all the planning I had done basically.
I did not have in mind anything about how the engine would have worked.
The fact this engine is actually able to render something on screen, it's already a miracle.
