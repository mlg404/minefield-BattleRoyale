var minefield = {
    sizex: 0,
    sizey: 0,
    template: [],
    setSize(x,y){
        this.sizex = x;
        this.sizey = y;
    },
    assetMinefield(){
        this.template = Array.from({length: this.sizex});
        this.template.forEach(function (element, index, array) {
            minefield.template[index] = Array.from({length: minefield.sizey});
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
    },
    reveal(i,j){
        let place = this.template[i][j];
        if (place === "x"){
            console.log("end")
        } else if (place === "0"){
            // alguma função pra mostrar esse espaço
            if (minefield.template[i - 1] !== undefined){
                if (minefield.template[i - 1][j - 1] !== undefined) reveal(i-1,j-1);
                if (minefield.template[i - 1][j    ] !== undefined) reveal(i-1,j  );
                if (minefield.template[i - 1][j + 1] !== undefined) reveal(i-1,j+1);
            }
                if (minefield.template[i    ][j - 1] !== undefined) reveal(i  ,j-1);
                if (minefield.template[i    ][j + 1] !== undefined) reveal(i  ,j+1);
                
            if (minefield.template[i + 1] !== undefined){
                if (minefield.template[i + 1][j - 1] !== undefined) reveal(i+1,j-1);
                if (minefield.template[i + 1][j    ] !== undefined) reveal(i+1,j  );
                if (minefield.template[i + 1][j + 1] !== undefined) reveal(i+1,j+1);
            }

        } else {
            // alguma função pra mostrar esse espaço
        }

    }
};