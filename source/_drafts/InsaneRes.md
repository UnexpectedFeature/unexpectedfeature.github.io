---
title: InsaneRes - How AI Image Generation Can Help Artists
author: Samuele Lorefice
tags: 
  - AI
  - Stable Diffusion
  - Machine Learning
  - Upscaling
  - Art
---

> **Disclaimer:** Everything described here has been done with authorization from the original artwork creator, including the pubblication of this article. The Original Artwork is presented here by curtesy of Pasix, the original creator. All rights are reserved to him.

## Introduction

Like all things, stuff happens at random, and sometimes they evolve in a long rabbit hole.

This has been the case for my last weekend. I was casually chatting in one of my favourite discord servers, specifically in one of the channels dedicated to AI art. One of the user said that one of the pic kinda resembled his profile picture. Then I said if he wanted an enhanced version of it he could ask anyone there. Few minutes later, he responds: _"Out of curiosity, wanna give it a shot? I can send you the image"_.

> And there it was me, looking down into the abyss, without even knowing it.

## The Original Artwork

![The Original Artwork](EleanoraScar.png) _The original artwork. Curtesy of Pasix_

The original image, as you can see above, it wasn't at high resolution in the first place. 430x430 pixels, to be precise.

With a so small file size, considering the fact that models are usually trained on 512/768 px square images, It would have been a perfect candidate for a 2 step upscale.

## The Upscaling

### The original plan

My original idea was simple:

- Use img2img to upscale it to 512x512 with a very low denoise
- Use the same model to upscale it again to 1024x1024
- Use SD Upscale to add detail on it while enlarging it even more.

### The first two steps

This was probably the easiest part. Took an anime trained model, put a low denoise value and upscaled the image to 512x512. Reuse the result as input for the second upscale, put a slightly higher denoise. After some fine tuning of the denoise and of the prompt, I got this:

![1024x1024 Upscaled Version](LightEnhancement.png) _A lovely, faitful rendition of the original_

As you can see this is very faithful to the original image.
If anyone's wondering, the prompt used for that was: `1girl, celtic girl, (face tattoo,  war paint), long hair, black hair, heterochromia, (white right eye), blind on one eye, azure left eye, piercing on lip, pieced bottom lip, scars on face, scar on top of eye, looking at viewer, extremely detailed, photorealistic, high skin detail`

### The third step

I wanted to go the extra mile there and add an insane amount of detail. So I switched to a photorealistic model, and used the same prompt as before. The first problem was showing up: the model had no idea of what a face paint / war paint would be like. The face paint, in fact, was getting reduced to a more geometric version.

![Cyberpunkish vibes anyone?](PhotoRealEnhancement.png) _Cyberpunk vibes anyone?_

I went back and forth with SD upscale, trying all possible combinations of samplers and denoise levels, while also adjusting the prompt.

![Some of the tries that it took me](Tries.png) ![Some more tries](Tries2.png) _It surely took me some tries._

### Good signs

At a certain point I started seeing some good signs. Looking at the tiles while they were being generated, I saw two things that screamed to me "we are on the right track!".

![A Good Tile, finally.](GoodTile1.png) _It's still a bit geometric, but at least it's not a square, futuristic facepaint anymore._
![Another Good Tile](GoodTile2.png) _Those lips were looking insanely good._

### The (not so) final result

![Pasix Asking the real questions](AskingTheRealQuestions.png) _Pasix asking the real questions..._

Up to that point, I had invested "just" 3 hours into this. And the result that I got at the end of that... exceeded my expectations.

![Result from the Upscaler](UpscaleResult.png) [Full Res Viewer](UpscaleResult.png) _The final result from the upscaler._

At this point, this is already where I drew my conclusion that AI image generation can be a perfect tool for an artist instead of "putting them out of business". The result looks like it would be a perfect canvas for an artist to work over. You know, adding the "finishing touches".

## The "finishing touches"

### Jumping into the abyss

Up to this exact moment, I wasn't really thinking about it. This was a "quick upscale" project. But Pasix mentioned all the stuff that we could have fixed. 

> Fine. This is going to be an article then.

I asked Pasix if I could then publish the result and detail the procedure and after taking a moment to think about it... he gave me the go ahead and we agreed on a dual signature on the end result.
And so it began...

### Inpaint attempts

The first thing that bothered basically both of us was the eyes. The right eye should have been white. It became a very light green-emerald color. And the pupil was not circular anymore. I started trying to use inpaint to fix it, but I quickly realized the model had no idea how a white eye should look like.

![Eye inpaint attempt](EyeInpaint.png) _This is clearly not a white eye._

It then struck me. AI is a tool, but I have multiple tools in my toolbox, and trying to tighten down a screw with an hammer, isn't exactly optimal, is it?

### Photoshop Time

I then plugged my graphic tablet, opened photoshop, and started fixing stuff.

#### The white eye

A simple desaturate masked over the pupil would do the trick to bring it down to white color, but the pupil was still not circular.

![WhiteEyeMasked](WhiteEyeMask.png) _A little desaturation mask goes a long way._

Add some smudge tool and a bit of blur, and we also get a nice rounded pupil.

![Rounded Pupil](RoundedPupil.png)

#### An artist request

Pasix asked me to change the left eye color because, even if it was technically correct, it wasn't meant to be that shade originally. Maybe his monitor didn't have the best color calibration at the time of doing the painting, but oh well, easy fix there. 

![Hue Fix](HueFix.png) _A simple HUE/Sat mask, wil fix the color issue easily_

Iris was also looking a bit broken, so I worked on making it look more natural. Mainly a matter of painting some more streaks, blurring and smudging the previous ones and making sure everything looked natural.

![Eyes After First Round Of Fixes](EyesAfterFirst.png) _The eyes after the first round of fixes._

#### The face paint
