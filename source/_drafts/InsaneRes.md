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

#### Photoshop Time

I then plugged my graphic tablet, opened photoshop, and started fixing stuff.

### The white eye

A simple desaturate masked over the pupil would do the trick to bring it down to white color, but the pupil was still not circular.

![WhiteEyeMasked](WhiteEyeMask.png) _A little desaturation mask goes a long way._

Add some smudge tool and a bit of blur, and we also get a nice rounded pupil.

![Rounded Pupil](RoundedPupil.png)

### An artist request

Pasix asked me to change the left eye color because, even if it was technically correct, it wasn't meant to be that shade originally. Maybe his monitor didn't have the best color calibration at the time of doing the painting, but oh well, easy fix there. 

![Hue Fix](HueFix.png) _A simple HUE/Sat mask, wil fix the color issue easily_

Iris was also looking a bit broken, so I worked on making it look more natural. Mainly a matter of painting some more streaks, blurring and smudging the previous ones and making sure everything looked natural.

![Eyes After First Round Of Fixes](EyesAfterFirst.png) _The eyes after the first round of fixes._

### The face paint

The facepaint was not looking great. It ended up looking like a tattoo after coming out of the AI upscale. It was time to fix it.

I started by creating a rough mask of the facepaint:
![FacePaint mask](FacePaintMask.png)

I then set it to 100% fill and blended it as multiply. Then started breaking up the pattern. It was time to bust out the brushes.
Tweaking a bit of the more artistic ones and making them as irregular as possible, made the trick.
![Brushes](Brush.png)

Some more blending and smudging, more variations on the brushes and finally we started getting somewhere.

![FacePaintH](FacePaintH.png) _The facepaint after some more tweaking on the blending and texture adjustments._

## The Eyes, again

> \- Wait, weren't those the finishing touches?
> \- You wish! No. We were just getting started.

So, turns out the eyes weren't looking good enough for Pasix. And they were looking ever so slightly off to me aswell so, we were back to the drawing board for them.

I'll save you the 4 hours that followed, but basically I ended up using a combination of inpaint and photoshop to fix the eyes.
The pupil was not correctly positioned so I needed a bit of manual work in photoshop, but then stuff didn't match up. Or it was looking weird. There AI generation turned out to be the life saver.

I made a rough distortion of the iris and pupil to bring them back into their correct shape.

![Rough Eyes Fix](RoughEyesFix.png) _The irises and pupils after being warped into their correct place._

I then analyzed the original and followed closely the input from Pasix (we were exchanging messages on discord while I was working on it all the time).

![Eyes after the manual fix](AfterEyesFix.png) _The eyes after all the manual fixing._

I then made sure to be at 100% zoom in photoshop, I screencapped the area and sent it through the ai model. DDIM sampler with low denoise, very high CFG Scale and just quality tags + `eyes`. I adjusted the denoise until it was decent but not completely different from the original. I was thinking "maybe I can get away without having to distort the result too much". I was wrong.
I took the ai output and placed it over the original, then set blend mode to difference, to check how well it could blend. And the result blew my mind.

![EyeDifference](EyeDifference.png) _The difference between the original and the AI generated eye._

I quickly realized that not only this was going to work, but it would have blended perfectly. And you know what's better than one eye fixed? Two eyes fixed. I generated again, but this time by sending both eyes to the AI in a single image. It worked like a charm.

![Both Eyes Diff](TwoEyesDiff.png) _The difference between the original and the AI generated eyes._

A bit of feathering on an alpha mask to make it blend perfectly, and we were done with the eyes. And also, it was another day. Time flies when you 're having fun and what was a Saturday night once, now it was Sunday morning.

Saved everything, and went to sleep.

## The Actual Finishing touches

### Scar details

What does a california wildfire thermal satelite image to do with this picture? Eheh.
If you noticed the current burn scar on the face doesn't really look like it's a proper burn scar. More like a bit of colored paint. I decided to fix that. I needed to blend in a bit of texture, so I got two of them.

![Textures](textures.png) _On the left, a California's Wine country thermal satellite imagery of the 2017 wildfires. On the right a detail from a fake burn scar facepaint material._

Using the fake burn scar material as a larger "break up the noise" texture blended on top of the california wildfire image that works perfect for adding some high frequency noise, we got this:

![Enhanced Scar](EnhancedScar.png) _The burn scar after adding the two textures_

I then adjusted color, saturation and contrast of the blending, plus darkened and blended the fake scar material texture into all the other scars in the face to add more detail.

### Facepaint details

The facepaint, even after all the texturing work, was looking a bit dull. Inspired from the work I had just done on the scar... I wanted to try the same on the facepaint too.

![Facepaint](Facepaint.png) _Adding a brush streak greyscale image warped accordingly to detail the facepaint._

I also did the same across all the other spots in the facepaint, and in the meanwhile we decided to add our own signatures on the image, leading to this:

![Facepaint done!](FacepaintDone.png) _The facepaint after the detailing. Hair has also been improved by this time aswell._

### Hair

While I was doing the facepaint stuff I also worked on the hair. Unfortunately, I don't have a lot of images from the process... but it went something like this:

- take the original pic
- blend it with the upscaled version
- make the face transparent
- put it on the img2img and ask it to generate hair
- rinse and repeat multiple times with the result until you get something that looks kinda okay.

What I mean by kinda okay? This:
![The picture that donated hairs](hairs.png) _The picture that donated hairs to our final one._

The result has been blended on a layer on top of the upscaled image and the original image too.

In the end the hair had a tiny bit too much color on the side, so I masked that and killed saturation.

### Minor stuff

There was, in the end a lenghty back and forth between me and Pasix about how to deal with some color grading stuff and general tiny adjustments. I won't go into details, but in short:

- we adjusted the eye color balance
- added a bit more redness to the lips
- added blackness to the lip tattoo (that in the original image was supposed to be rings but eh... AI upgrades)
- fixed overall image warmth and tone

## The final result

![Final Result](FinalResult.png) _[Full Resolution](FinalResult.png)_

### Conclusion

It's been a long journey. And I've learned some tricks.
AI is a tool. One of the many tools in the artist toolbox, for what concernes me. I disagree with artists screaming that it is going to steal their jobs. Composition and what makes a great image is something that neither the AI, or the people who use it mindlessly, actually understand. On the other hand, I think that AI can be a great tool to actually help artists, speeding up their workflow and giving them the opportunity to just concentrate on the details. I think that the future of art is going to be a mix of AI and human creativity. And I can't wait to see what's going to come out of it.

Well, what else can I say? I'm glad Pasix gave me this opportunity. Never would I've tought that an artist would have given me permission to play around whit his work and iterate over it. At the same time never would I tought that a tiny 430x430 pixels image could blow up into a 3072x3072 extremely detailed piece. And at the same time... I think I understood the real meaning of "AI Artist". Not someone that just writes a prompt, generated 100 pics and pick the best one. But someone that actually takes the time to understand the image, and doo what he can for enhancing or putting their own twist on it. The guidance from Pasix has been crucial into making the final result look as good as it does. It has been a joint effort, really and quite the process too.

But well, we are done for now. Until next time, have fun making art, in whatever way you fancy!
