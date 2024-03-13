exports.add = function(a,b){return (a+b)}
exports.areaOfRectangle = function(a,b){return (a*b)}
exports.perimeterOfRectangle = function(a,b){return (2*(a+b))}
exports.volumeOfCube = function(a){return (a*a*a)}
exports.surfaceAreaOfCube = function(a){return (6*a*a)}
exports.volumeOfCuboid = function(a,b,c){return (a*b*c)}
exports.surfaceAreaOfCuboid = function(a,b,c){return (2*(a*b+b*c+c*a))}
exports.volumeOfSphere = function(a){return ((4/3)*3.14*a*a*a)}
exports.surfaceAreaOfSphere = function(a){return(4*3.14*a*a)}
exports.surfaceAreaOfCylinder = function(a,b){return((2*3.14*a*b)+(2*3.14*a*a))}
exports.volumeOfCone = function(a,b){return ((1/3)*b*3.14*a*a)}
exports.surfaceAreaOfCone = function(a,b){return(3.14*a*(a+Math.sqrt(a*a+b*b)))}
exports.volumeOfPyramid = function(a,b,c){return ((1/3)*a*b*c)}
exports.surfaceAreaOfPyramid = function(a,b){return(3.14*a*(a+Math.sqrt(a*a+b*b)))}
exports.volumeOfEllipsoid = function(a,b,c){return ((4/3)*3.14*a*b*c)}
exports.surfaceAreaOfEllipsoid = function surfaceAreaOfEllipsoid(a, b, c) {
                                 const p = 1.6075;
                                 return 4 * Math.PI * Math.pow(Math.pow((Math.pow(a * b, p) + Math.pow(a * c, p) + Math.pow(b * c, p)) / 3, 1/p), 2);
}





// Surface Area of Cylinder
// Volume of Cone
// Surface Area of Cone
// Volume of Pyramid
// Surface Area of Pyramid
// Volume of Ellipsoid
// Surface Area of Ellipsoid