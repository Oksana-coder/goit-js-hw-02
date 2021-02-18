const formatString = function(string) {

    let result;

    if (string.length > 40) {
        result = string.slice(0, 40) + '...';
    } else {
        result = string;
    };

    return result; 
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);