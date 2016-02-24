"""
Dijkstra's algorithm is an iterative algorithm that provides us
with the shortest path from one particular starting node
to all other nodes in the graph.

Similar to Breadth First Search.

The algorithm iterates ones for ever vertex in the graph, however
the other we iterate over the vertices is controlled by priority queue.
The value that is used to determine the order of the objects in the
priority queue is the distance from our starting vector. By using
a priority queue, we ensure that as we explore one vertex after another,
we are always exploring the one with the smallest distance.

Note that Dijkstra's algorithm only works if all weights are positive.

One problem is that you must have a complete representation of the graph
in order for the algorithm to run.

"""

import heapq

def calculate_distances(graph, starting_vertex):
    distances = {vertex: float('infinity') for vertex in graph}
    distances[starting_vertex] = 0

    entry_lookup = {}
    pq = []

    for vertex, distance in distances.items():
        entry = [distance, vertex]
        entry_lookup[vertex] = entry
        heapq.heappush(pq, entry)

    while len(pq) > 0:
        current_distance, current_vertex = heapq.heappop(pq)

        for neighbor, neighbor_distance in graph[current_vertex].items():
            distance = distances[current_vertex] + neighbor_distance
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                entry_lookup[neighbor][0] = distance

    return distances

example_graph = {
    'U': {'V': 2, 'W': 5, 'X': 1},
    'V': {'U': 2, 'X': 2, 'W': 3},
    'W': {'V': 3, 'U': 5, 'X': 3, 'Y': 1, 'Z': 5},
    'X': {'U': 1, 'V': 2, 'W': 3, 'Y': 1},
    'Y': {'X': 1, 'W': 1, 'Z': 1},
    'Z': {'W': 5, 'Y': 1},
}

print calculate_distances(example_graph, 'X')
