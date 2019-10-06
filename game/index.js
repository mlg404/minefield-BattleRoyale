var a = {
    sizex: 0,
    sizey: 0,
    mines: {},
    template: [],


    setSize(x,y){
        this.sizex = x;
        this.sizey = y;
    },
    assetMinefield(){
        this.template = Array.from({length: this.sizex});
        this.template.forEach(function (element, index, array) {
            a.template[index] = Array.from({length: a.sizey});
        });
        this.template.forEach(function (element1, index1, array1) {
            array1.forEach(function (element2, index2, array2) {
                a.template[index1][index2] = "";
            });
        });
    },
    plantMines(qnt){
        if (qnt >= Math.floor((this.sizex * this.sizey)/8)) {
            return console.log("ERROR: too much 💣's");
        }
        let i = 0;
        min = Math.ceil(0);
        max = Math.floor(this.sizex - 1);
        while (i < qnt){
            line = Math.floor(Math.random() * (max - min + 1)) + min;
            column = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!(a.template[line][column] === "x")){
                a.template[line][column] = "x";
                i++;
            }
        }
    }
};