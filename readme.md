# Bilibili live community detection

This is a project for Social Web course. We use the data from Bilibili live to detect the communities of live streamers. [github link](https://github.com/SummerXIATIAN/bili-community-detection)

## Execution Instructions

### Requirements
- python packeges:
    - pandas
    - numpy
    - igraph
    - leidenalg
    - matplotlib
    - requests

## Visualization
Apart from the figures we attached in report, we also made dynamic webpages to give an more intuitive visualization of the streamer network. The webpages are in the `./visualization` folder, end with `.html`. You can open the `.html` file in the browser to see the visualization.

The `visualization` folder contains the following files:
- `graph-force.html`: A force-directed graph of the network.
- `graph.html`: A relationship graph (in circle style) of the network.
- `/graph-force-vsub.html`: A force-directed graph of the network using a subset of original communities (all V-tubers).

### Requirements!!
(In chrome) To open the `.html` file correctly, you need to install a browser extension called [Moesif Origin & CORS Changer](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc). Then you can open the `.html` file in the browser and see the force-directed graph.

Keep the botton on when you open the `.html` file. ![img](https://raw.githubusercontent.com/SummerXIATIAN/bili-community-detection/master/testdata/cors.png)

It is a problem caused by the CORS policy. Due to our lack frontend knowledge, we cannot solve this problem right now. The solution is listed above -- to use a browser extension to bypass the CORS policy.




