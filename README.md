<h1>So What is gLRuManager?</h1>

It is a HTTP REST based geo distributed with near realtime cross origin data replication, LRU caching service. It also supports low latency response times based on closest edge location. There is also an automatic fail over call back function in case one of the nodes fails to send a json response for a client request

Features:

- Configarible cache size
- Autofail over to next closest node
- Caching and deletion based on least used item
- Automatic data replicationa across all nodes
- Low latency geolocation based responses from edge lcoations

<h1> How does it work?</h1>

1. Client sends a POST reqquest with location and choice to central server
2. Central server finds closest node by comparing location
3. Central server posts info "" to cleint
4 If this request to post fails, it triggers the next closest location to send the same
5. Cache is checked and updated if need be everytime a client posts a choice to the central server


