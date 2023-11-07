var Vector = function (components) {
    const checkLen = function(vec){
        if (this.vec.length !== vec.vec.length)
            throw new Error();
    };

    const equals = function(vec){
        try{
            this.checkLen(vec);
        }
        catch(err){
            return false;
        }

        for (let i = 0; i < this.vec.length; i++){
            if (this.vec[i] !== vec.vec[i])
                return false;
        }

        return true;
    };

    const toString = function(){
        return "(" + this.vec.join() + ")";
    };

    const add = function(vec){
        this.checkLen(vec);
        
        const res = [];
        for (let i = 0; i < this.vec.length; i++){
            res.push(this.vec[i] + vec.vec[i]);
        }
        return new Vector(res);
    };

    const subtract = function(vec){
        this.checkLen(vec);
        
        const res = [];
        for (let i = 0; i < this.vec.length; i++){
            res.push(this.vec[i] - vec.vec[i]);
        }
        return new Vector(res);
    };

    const dot = function(vec){
        this.checkLen(vec);
        
        let res = 0;
        for (let i = 0; i < this.vec.length; i++){
            res += this.vec[i] * vec.vec[i];
        }
        return res;
    };

    const norm = function(){
        let res = 0;
        for (let i = 0; i < this.vec.length; i++){
            res += Math.pow(this.vec[i], 2);
        }
        return Math.sqrt(res);
    };

    this.vec = components;
    this.equals = equals;
    this.toString = toString;
    this.add = add;
    this.subtract = subtract;
    this.dot = dot;
    this.norm = norm;
    this.checkLen = checkLen;

    return this;
};