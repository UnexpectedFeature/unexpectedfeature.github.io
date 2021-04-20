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

![](https://i.imgur.com/bjswTtx.png)

This is all the planning I had done basically.
I did not have in mind anything about how the engine would have worked.
The fact this engine is actually able to render something on screen, it's already a miracle.
What to take from this?
> Always plan ahead, don't get too excited with complex projects, because without planning you will... fail... hard.
If this project had undergone some more planning, it could have worked. Maybe.

Another problem with the Game Engine was starting from the wrong thing. I started instantly with graphics and rendering. This is the worst thing you can do when working on a game engine. I created a component of the engine that doens't have anything to interact with, there aren't other systems and more importantly there is nothing that manages objects inside the game engine. The Game Engine just became a Renderer.
> Catastrophic Failure!
If you were to use the library as is, you would have to actually write your own game engine logic to make everything work. Mistakes were made. Huge ones too.

### The Renderer
There isn't really much code to review in this repo, most of it is boilerplate inside the Advanced Console project, to conclude our analisys inside the REDASCII Engine library we just need to take a look at the 80 lines of code that make up for the renderer.

Let's do a breakdown of the code, piece by piece:
```c#
internal class Renderer : IRenderer {
    public int TargetFPS { get; set; }
    public AsciiBuffer[] Buffers { get; set; }

    public List<IRenderable> RenderObjects;

    private bool IsStopRequested = false;

    public Renderer(int Top, int Left, int Height, int Width) {
        Buffers = new AsciiBuffer[2] {
            new AsciiBuffer(Left, Top, Width, Height),//4 rows spacing
            new AsciiBuffer(Left, Top*2, Width, Height)};
        RenderObjects = new List<IRenderable>();
    }
```
So... to start off, the renderer has a Target FPS to render at; If I recall correctly this was done to avoid having the console buffer scrolling up and down like crazy and to reduce CPU utilization.

`AsciiBuffer` is really just a fancy `char` array. It contains a matrix of `AsciiPixel`s, and a position in the buffer.
    - `AsciiPixel` is a struct containing a `char` and a `ConsoleColor` value.
    - The buffer position is used to allocate parts of the output buffer as framebuffers. Yes, just like the real rendering on the GPU, I'm using framebuffers, and there's more madness coming on...

We also have a list of renderable objects. This should not be here, the core of the game engine should technically supply this at runtime, but remember that the core fo the engine is non-existant, so... it is what it is.
`IsStopRequest` made me laugh. The rendering is all donw inside a `while(!true)` loop. You have to flip the switch to stop it. What an amazing idea, uh?

> Bad Design, Bad Design everywhere.

Let's skip the `DrawBuffer(int)` method for now and let's take a look at the rest of the code:

```c#
public void Run() {
    while (!IsStopRequested) {
        DrawBuffer(1);
        SwapBuffer(1);
        DrawBuffer(0);
        SwapBuffer(0);
    }
}

public void Stop() {
    IsStopRequested = true;
}
```

Theese methods are coming from the `ISystem` interface, that is implemented inside the `IRenderer` interface. The reason behind this was to make everything modular.
the stop method would make the while loop inside the `Run()` method stop executing. Nothing to see there.

Inside that while loop we can see the way the rendering is done:
- Draw a buffer
- Move that buffer where you can see it
- Draw the other one offscreen
- Move to the freshly drawn buffer
- Rinse and repeat

This is actually how double buffered rendering works in modern GPUs.

The `SwapBuffer(int)` method has some of the worst naming I could make:
```c#
public void SwapBuffer(int topBuffer) {
    Console.MoveBufferArea(
        Buffers[topBuffer].BufferPosition.Left,
        Buffers[topBuffer].BufferPosition.Top,
        Buffers[topBuffer].BufferPosition.Width,
        Buffers[topBuffer].BufferPosition.Height,
        Console.WindowLeft,
        Console.WindowTop
    );
}
```
Naming the parameter `topBuffer` just to remind me of being the index of the buffer that would be on the top after the execution wasn't really that necessary, and it could also be particularly misleading. A bit of documentation would have solved everything nicely. There is nothing else to see here. We can now go to the magic `DrawBuffer(int)` method.
```c#
public void DrawBuffer(int bufferIndex) {
    var bufferPos = Buffers[bufferIndex].BufferPosition;//cache of the buffer position
    //creates a cache of the buffer that needs to be written
    AsciiPixel[,] tempBuffer = new AsciiPixel[Buffers[0].Data.GetLength(0), Buffers[0].Data.GetLength(1)];

    RenderObjects.Sort((x, y) => y.Transform.Z.CompareTo(x.Transform.Z));//sorting the list to the Z in descending order
    foreach (IRenderable renderable in RenderObjects) {
        Transform localPosition = renderable.Transform;
        for (int x = 0; x < renderable.Data.GetLength(1); x++) {//each line
            for (int y = 0; y < renderable.Data.GetLength(0); y++) {
                if (renderable.Data[x, y].Data != '\0') {
                    tempBuffer[x + localPosition.X, y + localPosition.Y].Data = renderable.Data[x, y].Data;
                    tempBuffer[x + localPosition.X, y + localPosition.Y].Color = renderable.Data[x, y].Color;
                }
            }
        }
    }
    Buffers[bufferIndex].Data = tempBuffer;
    //separating colors
    var renderPasses = new Dictionary<ConsoleColor, char[,]>();
    for (int x = 0; x < tempBuffer.GetLength(0); x++) {
        for (int y = 0; y < tempBuffer.GetLength(1); y++) {
            if (renderPasses.ContainsKey(tempBuffer[x, y].Color)) {//check if the color of the pixel already have a buffer
                renderPasses[tempBuffer[x, y].Color][x, y] = tempBuffer[x, y].Data;//add the pixel at the right position
            } else {
                renderPasses.Add(tempBuffer[x, y].Color, new char[tempBuffer.GetLength(0), tempBuffer.GetLength(1)]);//add the new buffer
                renderPasses[tempBuffer[x, y].Color][x, y] = tempBuffer[x, y].Data;//then add the pixel
            }
        }
    }
    //gets the console handle
    IntPtr handle = Process.GetCurrentProcess().MainWindowHandle;

    //https://docs.microsoft.com/en-us/windows/console/writeconsoleoutput

    //finally write the buffer, one color at the time:
    foreach (var colorBuffer in renderPasses) {
        //WriteBufferOutput(handle, colorBuffer.Value, new COORD() { });
    }
}
```

> Woah, what a piece of ~~shit~~ art! 

By the standards of this project, the fact that there are actually lines of comments means something is wrong.
