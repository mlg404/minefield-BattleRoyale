var minefield = {
    sizex: 0,
    sizey: 0,
    template: [],
    debug: [],
    setSize(x,y){
        this.sizex = x;
        this.sizey = y;
    },
    assetMinefield(){
        this.template = Array.from({length: this.sizex});
        this.template.forEach(function (element, index, array) {
            minefield.template[index] = Array.from({length: minefield.sizey});
        });
        this.debug = Array.from({length: this.sizex});
        this.debug.forEach(function (element, index, array) {
            minefield.debug[index] = Array.from({length: minefield.sizey}, (v,k)=> "");
        });
    },
    plantMines(qnt){
        if (qnt >= Math.floor((this.sizex * this.sizey))) {
            return console.log("ERROR: too much 💣's");
        }
        let i = 0;
        min = Math.ceil(0);
        max = Math.floor(this.sizex - 1);
        while (i < qnt){
            line = Math.floor(Math.random() * (max - min + 1)) + min;
            column = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!(minefield.template[line][column] === "x")){
                minefield.template[line][column] = "x";
                i++;
            }
        }
        this.template.forEach(function (e1, i, array1) {
            array1.forEach(function (e2, j, array2) {
                let bombsArea = 0;
                if (minefield.template[i][j] !== "x"){
                    if (minefield.template[i - 1] !== undefined && minefield.template[i - 1][j - 1] === "x" ) bombsArea++;
                    if (minefield.template[i - 1] !== undefined && minefield.template[i - 1][j    ] === "x" ) bombsArea++;
                    if (minefield.template[i - 1] !== undefined && minefield.template[i - 1][j + 1] === "x" ) bombsArea++;

                    if ( minefield.template[i    ][j - 1] === "x" ) bombsArea++;
                    if ( minefield.template[i    ][j + 1] === "x" ) bombsArea++;
                    
                    if (minefield.template[i + 1] !== undefined && minefield.template[i + 1][j - 1] === "x" ) bombsArea++;
                    if (minefield.template[i + 1] !== undefined && minefield.template[i + 1][j    ] === "x" ) bombsArea++;
                    if (minefield.template[i + 1] !== undefined && minefield.template[i + 1][j + 1] === "x" ) bombsArea++;

                    minefield.template[i][j] = bombsArea;
                }
            });
        });
        // minefield.debug = [...minefield.template];
    },
    // hide(){
    //     for (let i = 0; i < this.template.length; i++){
    //         console.log
    //         for (let j = 0; j < this.template[i].length; j++){
    //             //this.debug[i][j] = "";
    //         }
    //     }
    // },
    reveal(i,j){
        let place = minefield.template[i][j];
        let debug = minefield.debug[i][j];
        if (debug === ""){
            if (place === "x"){
                console.log("end");
            } else if (place === 0 ){
                minefield.debug[i][j] = minefield.template[i][j];
                if (minefield.template[i - 1] != undefined){
                    if (minefield.template[i - 1][j - 1] != undefined && minefield.template[i - 1][j - 1] != "x") minefield.reveal(i-1,j-1);
                    if (minefield.template[i - 1][j    ] != undefined && minefield.template[i - 1][j    ] != "x") minefield.reveal(i-1,j  );
                    if (minefield.template[i - 1][j + 1] != undefined && minefield.template[i - 1][j + 1] != "x") minefield.reveal(i-1,j+1);
                }
                    if (minefield.template[i    ][j - 1] != undefined && minefield.template[i    ][j - 1] != "x") minefield.reveal(i  ,j-1);
                    if (minefield.template[i    ][j + 1] != undefined && minefield.template[i    ][j + 1] != "x") minefield.reveal(i  ,j+1);
                    
                if (minefield.template[i + 1] != undefined){
                    if (minefield.template[i + 1][j - 1] != undefined && minefield.template[i + 1][j - 1] != "x") minefield.reveal(i+1,j-1);
                    if (minefield.template[i + 1][j    ] != undefined && minefield.template[i + 1][j    ] != "x") minefield.reveal(i+1,j  );
                    if (minefield.template[i + 1][j + 1] != undefined && minefield.template[i + 1][j + 1] != "x") minefield.reveal(i+1,j+1);
                }
    
            } else {
                minefield.debug[i][j] = minefield.template[i][j];
            }

        }

    }
};

module.exports = minefield;