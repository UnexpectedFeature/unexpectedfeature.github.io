---
title: Explaining Node-based workflow for AI image generation
author: Samuele Lorefice
tags: 
- AI
- Stable Diffusion
- Machine Learning
---

#### Note

*I will be using ComfyUI as basis but the same concepts apply to Invoke AI and a1111 UIs. This is basically how they handle stuff under the hood.*

## **So, what exactly are nodes?**

- Nodes are just a clear representation of the flow of data when generating an image using AI. 
- The advantage of using nodes it that you can thoroughly customize the entire image generation process by yourself. You have sampler nodes, conditioning nodes, input nodes and output nodes.
- Without going into explaining one by one all possible nodes (otherwise good luck, this would be a gigantic wall of text), I can give you a basic overview of how the basic stuff we do in a1111 or invoke ai work under the hood.

## **Checkpoints:**

*Or: what models are actually involved in generating an image*


Also known as models, they need to be loaded and unpacked to memory to be used. Each checkpoint can optionally also contain an integrated CLIP and VAE model baked into itself.

![Checkpoint Loader Node](CheckpointLoader.png)

A CLIP model is a Text Encoder, in layman terms it the black box that accepts your input and translates it to the model itself so that it can generate what you want to see.

The model itself takes a starting point (in case of txt2img, a randomized noise image, in case of img2img a "blurred", more noisy version of your starting image), and starts denoising. By progfressively removing noise from the image in a way that statistically represents an image that corresponds to your input (positive conditioning) and resembles less your negative input (negative conditioning) an image is generated in latent space.

A VAE model then clears the latent space and returns you an image. You can think of this like the final step of developing an image in the old days, the last bath before pulling the photograph out and letting it dry.

## **Latent Space**

*A very quick introduction to what the AI really sees*

Latent Space is a term that will come out multiple times during this read, so let's take a moment to explain what it really is.

In terms of a Stable-Diffusion model, you can thing of this as a canvas that the model uses to draw the image onto. But it's only a bunch of numbers really, and it's up to the model and the sampler to interpret them accordingly.

Additionally, this "image" is not a single layer, but muliple of them. And then applying conditioning over the current latent space, step after step, the decoded image that is generated from it is going to be more and more similar to the conditioning you set at the beginning.

When you start generating an image from a text prompt only, you initialize the latent space with a bunch of random values. The random values are chosen thanks to a seed, allowing repeatability.

## **Conditioning:**

*What you think you're saying is not necessarly what CLIP is understanding*

Let's spend a moment to talk about conditioning and how CLIP actually sees your input.

![Conditioning Node](ConditioningNode.png)

CLIP is a neural network that has been trained to understand the meaning of images and text. It's a black box that takes your input and translates it to a vector of numbers that represents the meaning of your input.

The words you input are going to be split into tokens, and each token is going to be translated to a vector of numbers. (Think of it like a set of numbers that correspond to that token). The same happens with the images you input. The vectors are then compared with the current latent image while is being generated and the result is a number that represents how much the image and the text are similar. The higher the number, the more similar they are.

### Tokens

*The vocabulary of the model*

But what exactly is a token? A token is generally a set of characters that the CLIP model has associated a meaning to. The most basic token you always while writing a conditioning is usually the ',' comma. The CLIP model has been trained to understand that a comma is a separator between words, and that it should be basically ignored when analyzing the meaning of the input. Note: commas do still have an effect on the conditioning, they in fact split sections between themselves, expecially for models that are trained over more verbose inputs. This is why you can use commas to separate different sections of your conditioning, like "a cat, a dog, a bird" and the model will hopefully generate an image that contains all three animals.

### "Clip Styles"

*A "dialect" for models*

In-between quotes because I don't really know what's the correct lingo here.

But, as every model ships with its CLIP model inside, some models require a different style of conditioning. For example, a lot of the anime models are trained to react to danbooru tags usd as conditioning. Describing a scene in natural language (as you would to a normal person) will still work but will not be as effective. Stable Diffusion model and a bunch of the photorealistic/artistic models instead will not be really effective on danbooru tags, but will work better with natural language.

This always depends on the model you're using, and the best way to find out is to either read the readme left by the author, looking into the readmes for the models that the specific model derives from or just by experimenting.

## **Negative Conditioning:**

*What you don't want to see. More or less...*

This is conditioning but in the opposite way. You can use it to tell the model what you don't want to see in the image or to steer it towards a specific style.

Everything I said about conditioning applies to negative conditioning as well. Only that with negative conditioning the model will try to have the derived vectors from the tokens to be as distant as possible from the current latent image.

Let's try to dispel some myths about negative conditioning:

- `bad hands` doesn't works as well as you think. `bad` is a token and `hands` is another. The model doesn't have a clue about what `bad hands` are on their own. using `(hands)` will result in more or less the same reuslt, with 1 less token.
- Longer conditioning prompts are not always better. If you exceed 75 tokens in your positive or negative token, the generation speed will almost halve itself because of the extra required processing (the model can only work with 75 tokens at the time, so it has to split the conditioning in chunks of 75 tokens and process them one by one). This is why you should try to keep your conditioning as short as possible.
- A good way to fix this without exceeding the 75 tokens count is to use *embeddings*.

## **Embeddings:**

*Condensing informations into a single token*

Also called "Textual Inversion Embeddings".

Embeddings are a way to condense a part of your conditioning into a single token. They are not a collection of tokens per se, rather a definition of where your concept is placed in the latent space.

Imagine again the latent space, there are a bunch of zones (or layers) that define specific features, like the eyes, the nose, the mouth, the hair, the clothes, the background, etc.
Embeddings are a way to tell the model "I want to see this in the image, and I want it to be as close as possible to these numbers". It does this by offsetting specific groups of values in the latent space.

The result is a quick way to only consume a single token and still have the same effect of a lof of tokens used as conditioning. They are now really popular in negative prompts to strongly condition the model away from `bad hands`, `bad anatomy`, `bad composition` and so on...

They can, of course, also be used as positive conditioning, but that job is often left to LoRAs nowadays.

