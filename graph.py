#####################
# Terms
#####################

# Vertex
# A node. Can have name called "key". May have add'l info called "payload"

# Edge
# Connects two vertices. May be 1 or 2 way.
# if all edges are one-way, the graph is a Directed Graph (digraph)

# Weight
# Edges may be weighted to show there is a cost from one vertex to another

# Path
# sequence of vertices that are connected by edges

# Cycle
# In a directed graph, a cycle is a path that starts and ends at same vertex

#####################
# Representing graphs
#####################

# 1. Adjacency matrix (2D matrix):
# Pro: simple, good for small graphs with large # of edges
# Con: Not space efficient, esp. for sparse data

# 2. Adjacency list:
# Pro: More space-efficient, esp. for sparse graphs; easily find all links from a vertex
# Con:

#####################
# Implementation
#####################

# Object oriented

class Vertex(object):
  def __init__(self, key):
    self.key = key
    self.neighbors = {}

  def add_neighbor(self, neighbor, weight=0):
    self.neighbors[neighbor] = weight;

  def __str__(self):
    return '{} neighbors: {}'.format(
      self.key,
      [x.key for x in self.neighbors]
    )

  def get_connections(self):
    return self.neighbors.keys()

  def get_weight(self, neighbor):
    return self.neighbors[neighbor]


class Graph(object):
  def __init__(self):
    self.verticies = {}

  def add_vertex(self, vertex):
    self.verticies[vertex.key] = vertex

  def get_vertex(self, key):
    try:
      return self.verticies[key]
    except KeyError:
      return None

  def __contains__(self, key):
    return key in self.verticies

  def add_edge(self, from_key, to_key, weight=0):
    if from_key not in self.verticies:
      self.add_vertex(Vertex(from_key))
    if to_key not in self.verticies:
      self.add_vertex(Vertex(to_key))
    self.verticies[from_key].add_neighbor(self.verticies[to_key], weight)

  def get_verticies(self):
    return self.verticies.keys()

  def __iter__(self):
    return iter(self.verticies.values())



g = Graph()
for i in range(6):
  g.add_vertex(Vertex(i))
print g.verticies

g.add_edge(0, 1, 5)
g.add_edge(0, 5, 2)
g.add_edge(1, 2, 4)
g.add_edge(2, 3, 9)
g.add_edge(3, 4, 7)
g.add_edge(3, 5, 3)
g.add_edge(4, 0, 1)
g.add_edge(5, 4, 8)
g.add_edge(5, 2, 1)

for v in g:
  for w in v.get_connections():
    print('{} -> {}'.format(v.key, w.key))



# Use dictionaries directly
graph = {
    0: {1: 5, 5: 2},
    1: {2: 4},
    2: {3: 9},
    3: {4: 7, 5: 3},
    4: {0: 1},
    5: {4: 8}
  } 

print graph



















