---
title: Explaining Node-based workflow for AI image generation
author: Samuele Lorefice
tags: 
- AI
- Stable Diffusion
---

#### Note:

*I will be using ComfyUI as basis but the same concepts apply to Invoke AI and a1111 UIs. This is basically how they handle stuff under the hood.*

## **So, what exactly are nodes?**

- Nodes are just a clear representation of the flow of data when generating an image using AI. 
- The advantage of using nodes it that you can thoroughly customize the entire image generation process by yourself. You have sampler nodes, conditioning nodes, input nodes and output nodes.
- Without going into explaining one by one all possible nodes (otherwise good luck, this would be a gigantic wall of text), I can give you a basic overview of how the basic stuff we do in a1111 or invoke ai work under the hood.

## **Checkpoints:**

*(or, what models are actually involved in generating an image)*

Also known as models, they need to be loaded and unpacked to memory to be used. Each checkpoint can optionally also contain an integrated CLIP and VAE model baked into itself.

![Checkpoint Loader Node](CheckpointLoader.png)

A CLIP model is a Text Encoder, in layman terms it the black box that accepts your input and translates it to the model itself so that it can generate what you want to see.

The model itself takes a starting point (in case of txt2img, a randomized noise image, in case of img2img a "blurred", more noisy version of your starting image), and starts denoising. By progfressively removing noise from the image in a way that statistically represents an image that corresponds to your input (positive conditioning) and resembles less your negative input (negative conditioning) an image is generated in latent space.

A VAE model then clears the latent space and returns you an image. You can think of this like the final step of developing an image in the old days, the last bath before pulling the photograph out and letting it dry.
