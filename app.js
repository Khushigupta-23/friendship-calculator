function calculateFriendship() {
    const name1 = document.getElementById('name1').value.toLowerCase();
    const name2 = document.getElementById('name2').value.toLowerCase();
    
    // Calculate total length of both names
    const totalLength = name1.length + name2.length;

    let score = (totalLength * 10) % 120;

    let resultMessage = "";
    let emoji = "";

    if (score >= 80) {
      resultMessage = "You two are best friends!";
      emoji = "❤️"; // Heart emoji
    } else if (score >= 50) {
      resultMessage = "You're good friends!";
      emoji = "🤗"; // Hug emoji
    } else {
      resultMessage = "More effort needed, but still friends!";
      emoji = "😔"; // Sad face emoji
    }
    
    document.getElementById('result').innerHTML = `Compatibility score: ${score}% <br> ${resultMessage} ${emoji}`;
  }
