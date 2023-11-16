# Mentalista Game

Welcome to Mentalista, a simple number-guessing game created during the Alura course. Test your intuition and try to guess the correct number!

## Technologies Used

- **HTML:** Used for structuring the web page.
- **CSS:** Provides styling and enhances the visual appeal of the game.
- **JavaScript:** Powers the game logic, generating a random number for players to guess.

## Preview

![Mentalista Preview](https://caelum-online-public.s3.amazonaws.com/assets-imersaodev/Ilustra%C3%A7%C3%A3o-c%C3%A9rebro+1.png)

## How to Play

1. Open the `index.html` file in your preferred web browser.
2. You will be prompted to guess a number between 0 and 100.
3. You have 3 attempts to guess the correct number.
4. After each attempt, you will receive hints about whether the correct number is higher or lower.
5. If you guess correctly, you win! If not, the correct number will be revealed.

## Development

### HTML

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mentalista</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Your HTML content here -->
</body>
<script src="index.js"></script>
</html>
```

### CSS

```css
body {
    font-family: "Roboto Mono", monospace;
    text-align: center;
    background-image: url("https://caelum-online-public.s3.amazonaws.com/assets-imersaodev/background_mentalista.png");
    background-color: #000000;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    height: 100vh;
  }
  
  .container {
    text-align: center;
    padding: 20px;
  }
  
  .page-title {
    color: #ffffff;
    margin: 0 0 5px;
  }
  
  .page-subtitle {
    color: #ffffff;
    margin-top: 5px;
  }
  
  .page-logo {
    width: 200px;
  }
  
  .alura-logo {
    width: 40px;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  
  body > img {
    margin: 0 10px;
  }
  
  img {
    max-height: 350px;
  }
```

### JavaScript
```javascript
var segredo = parseInt(Math.random() * 101);
let tentativas = 3;

function advinha() {
    while (tentativas > 0) {
        var chute = prompt('Digite um número entre 0 e 100. Você tem 3 tentativas.');

        // Your JavaScript game logic here

        if (tentativas === 0) {
            alert(`Você usou todas as tentativas o número correto é ${segredo}.`);
        }
    }
}

advinha();
```
## Contributing

Contributions are welcome! If you find a bug, have a suggestion, or want to contribute in any way, please open an issue or create a pull request. Happy gaming!
