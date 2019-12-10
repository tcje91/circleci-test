const comiserate = (gender = 'male', demise = 'die') => {
  let pronoun;
  let noun;
  if (gender === 'male') {
    pronoun = 'He';
    noun = 'man';
  } else if (gender === 'female') {
    pronoun = 'She';
    noun = 'woman';
  } else {
    pronoun = 'It';
    noun = 'thing';
  }
  return `${pronoun} was a good ${noun}... what a rotten way to ${demise}`;
};

module.exports = {
  comiserate
};
