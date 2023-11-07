function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        const res = [];

        for (let i = 0; i < str.length; i++){
            if (this.alphabet.includes(str[i])){
                const index = this.alphabet.indexOf(str[i]);
                const keyIndex = this.alphabet.indexOf(this.key[i % this.key.length]);
                res.push(this.alphabet[(index + keyIndex) % this.alphabet.length]);
            }
            else{
                res.push(str[i]);
            }
        }

        return res.join("");
    };
    this.decode = function(str) {
        const res = [];
        
        for (let i = 0; i < str.length; i++){
            if (this.alphabet.includes(str[i])){
                const index = this.alphabet.indexOf(str[i]);
                const keyIndex = this.alphabet.indexOf(this.key[i % this.key.length]);
                if (index < keyIndex)
                    res.push(this.alphabet[this.alphabet.length - (keyIndex - index)]);
                else
                    res.push(this.alphabet[index - keyIndex]);
            }
            else{
                res.push(str[i]);
            }
        }

        return res.join("");
    };

    this.key = key;
    this.alphabet = abc;

    return this;
}