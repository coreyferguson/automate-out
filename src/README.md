

# Phaser Architecture

## Initialization

![UML class diagram of game initialization](https://s3-us-west-2.amazonaws.com/automate-out-docs/class-initialization.png)

## Game States

Each `GameState` may manage it's own namespace within relevant state properties. The difference between the states is what's appropriate for the intended consumer.

```javascript
ioc.realityState // state given to automate-out components
ioc.virtualState // state given to user components
```

### Recipes

Component with virtual state:

![UML class diagram of virtual state implementation](https://s3-us-west-2.amazonaws.com/automate-out-docs/class-game-state-impl.png)
