function matrixGenerator(matrixSize,grass,grassEater,predator,Besteater,predatoreater) {
    var matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
        matrix[i].push(0)
        
        }
    }


    for (let i = 0; i < grass; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 1
        
    }

    for (let i = 0; i < grassEater; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 2
        
    }
    


    for (let i = 0; i < predator; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 3

        
    }
    for (let i = 0; i < Besteater; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 4

        
    }

    for (let i = 0; i < predatoreater; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 5

        
    }




    return matrix
}

var matrix = matrixGenerator(30,40,15,5,7,10)
var side = 25
//

var grassArr = []
var grassEaterArr = []
var predatorArr = [] 
var besteaterArr = []
var predatoreaterArr = []


function setup() {
    frameRate(15)
    createCanvas(matrix[0].length * side ,matrix.length * side)

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
       
           if(matrix[y][x] == 1){
                var gr = new Grass(x,y)
                grassArr.push(gr)
           }else  if(matrix[y][x] == 2){
            var grEat = new GrassEater(x,y)
            grassEaterArr.push(grEat)
           }else if(matrix[y][x] == 3){
            var pred = new Predator(x,y)
                predatorArr.push(pred)
            }
            else if(matrix[y][x] == 4){
                var besteater = new Besteater(x,y)
                besteaterArr.push(besteater)
            }else if(matrix[y][x] == 5){
                var predatoreat = new Predatoreater(x,y)
               predatoreaterArr.push(predatoreat)
                
           }
        }
        
    }

}

function draw() {
    
      for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
          
                if(matrix[y][x] == 1){
                     fill ("green")
                }else if (matrix[y][x] == 2){
                        fill ("yellow")
                }else if(matrix[y][x] == 3){
                            fill ("red")
                }
                else if(matrix[y][x] == 4){
                       fill("black")
                }
                else if(matrix[y][x] == 5){
                    fill("blue")
                }
                else{
                    fill ("gray")
                }
                rect (x * side , y * side ,side,side)
        }
          
      }

      for(let i in  grassArr){
            grassArr[i].mul()
      }

      for(let i in  grassEaterArr){
        grassEaterArr[i].eat()   
      }

     for(let i in predatorArr){
         predatorArr[i].eat()
      }
  
     for(let i in besteaterArr){
        besteaterArr[i].eat()
      }
      for(let i in predatoreaterArr){
        predatoreaterArr[i].eat()
      }

     console.log(predatoreaterArr.length);
}
