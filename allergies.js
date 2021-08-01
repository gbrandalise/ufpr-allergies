//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  allergens = [
    {name: 'eggs', score: 1},
    {name: 'peanuts', score: 2},
    {name: 'shellfish', score: 4},
    {name: 'strawberries', score: 8},
    {name: 'tomatoes', score: 16},
    {name: 'chocolate', score: 32},
    {name: 'pollen', score: 64},
    {name: 'cats', score: 128},
  ];

  score;

  constructor(score) {
    this.score = score;
  }

  list() {
    let currentScore = this.score;
    while (currentScore >= 256) {
      currentScore -= 256;
    }
    return this.allergens
      .reverse()
      .filter(allergen => {
        if (allergen.score <= currentScore) {
          currentScore -= allergen.score;
          return true;
        }
        return false;
      })
      .reverse()
      .map(allergen => allergen.name);
  }

  allergicTo(allergenName) {
    return this.score > 0 && this.list().some(allergen => allergen === allergenName);
  }
}
