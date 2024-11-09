var expect = function(val) {
    return {
        toBe: function(val1) {
            if (val1 === val) {
                return true;
            }
            return 'Not Equal';
        },
        notToBe: function() {
            if (val1 === val) {
                return true;
            }
            return 'Equal';
        }
    };
};

console.log(expect(5).toBe(null));
console.log(expect(5).notToBe(5));
console.log(expect(5).notToBe(5));
