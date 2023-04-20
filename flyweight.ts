//CSCI 630 

// Flyweight interface
interface IBird {
  draw(x: number, y: number): void;
}

// Concrete flyweight class
class RedBird implements IBird {
  private readonly image: string;

  constructor() {
    this.image = 'red_bird.png';
  }

  draw(x: number, y: number): void {
    console.log(`Drawing ${this.image} at (${x}, ${y})`);
  }
}

// Flyweight factory
class BirdFactory {
  private birds: { [key: string]: IBird } = {};

  getBird(type: string): IBird {
    if (!this.birds[type]) {
      switch (type) {
        case 'red':
          this.birds[type] = new RedBird();
          break;
        // Add more cases for other bird types here
      }
    }
    return this.birds[type];
  }
}

// Client code
class Game {
  private birdFactory: BirdFactory;

  constructor(birdFactory: BirdFactory) {
    this.birdFactory = birdFactory;
  }

  play(): void {
    const bird1 = this.birdFactory.getBird('red');
    bird1.draw(10, 20);

    const bird2 = this.birdFactory.getBird('red');
    bird2.draw(30, 40);

    // bird1 and bird2 are the same object, so they will have the same image and position
  }
}

// Usage
const birdFactory = new BirdFactory();
const game = new Game(birdFactory);
game.play();
