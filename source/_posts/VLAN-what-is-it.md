---
title: 'VLAN, what is it?'
author: MrFastwind
tags:
  - Networking
  - LAN
date: 2021-04-19 12:34:45
---


VLAN is the acronym for **Virtual Local Area Network**, a virtual network within the physical one; this technology (that has existed for quite some time) permits to virtualize and multiplex multiple network on the same infrastructure.

## How does it works?

This technology is locate between the second and third layer of the ISO/OSI; it works by tagging the frame of the data link layer with a VID (VLAN ID) that define in which virtual network the frame should be routed.
![VLAN Frame](VLAN_Frame.png)
The VLAN Header has 4 Bytes size, this reduce the max payload dimension; to avoid this situation it's usual to enable **Jumbo Frames** that use 9000 Bytes for payload.

## Configurations

Tagging frames is a done automatically by switches when receiving and sending frames (even PCs can, but is not recommended for security reason); when a frame reach a port, the switch read the port configuration for which rule is set and decide where to reroute the frame; then it read the next port configuration and apply the rule.
The possible Rules are:

* **Access**/**Untagged**: Every frame in the net is **untagged** and doesn't accept any tagged frames, every frame accepted are then tagged with a VID.  
* **Trunk**/**Tagged**: frames can be **tagged** or not, the port accept tagged frame if their VID is accepted and untagged if the default is defined.

Usually **Access** Are used for the communication between PCs and **Trunk** for the **Back-Bone** communication.

## Differences

Depending on the manufacturer of the switch, name and configurations may change; in example:

* **Cisco** use the Access/Trunk as naming standard, and define which VLAN is registered in a port.
* **HPE** use Tagged/Untagged as naming convention, and define for every VLAN which port can access.  
