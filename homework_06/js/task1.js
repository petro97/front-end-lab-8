let side1 = parseFloat(prompt('Enter side1'));
let side2 = parseFloat(prompt('Enter side2'));
let side3 = parseFloat(prompt('Enter side3'));

function squ(a, b, c){
    if(Math.sign(a) > 0 && Math.sign(b) > 0 && Math.sign(c) > 0){
        if(a + b <= c || b + c <= a || a + c <= b){
            console.log("Incorrect data");
        }else{
            let p = (a + b + c) / 2;
            let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
            console.log("Type of triangle is right triangle and square is " + area.toFixed(2) * 1);
        };
    }else{
        console.log("Incorrect data");
    };
};

squ(side1, side2, side3);

function type (a, b, c){
    if(Math.sign(a) > 0 && Math.sign(b) > 0 && Math.sign(c) > 0){
        if(a + b <= c || b + c <= a || a + c <= b){
            console.log('Incorrect data');
        }else if(a == b && a == c && b == c){
            console.log('Equilateral');
        }else if((a == b && a !=c) || (a == c && a != b) || b == c && b != a){
            console.log('Isosceles');
        }else if(a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b){
            console.log('Right triangle');
        }else if(a != b && a != c && b != c ){
            console.log('Scalene ');
        }
    }else{
        console.log('Incorrect data');
    }
};

type(side1, side2, side3);