var validIPAddress = function (queryIP) {
    const isV4Split = queryIP.indexOf('.') >= 0 && queryIP.split('.');
    const isV6Split = queryIP.split(':');
    if (isV4Split) {
        if (isV4Split.length !== 4) {
            return `Neither`;
        }
        for (const iterator of isV4Split) {
            if (isNaN(iterator)) {
                return `Neither`;
            }
        }
        for (const iterator of isV4Split) {
            if (String(Number(iterator)).length !== String(iterator).length) {
                return `Neither`;
            }
        }
        for (const iterator of isV4Split) {
            if (!(iterator >= 0 && iterator <= 255)) {
                return `Neither`;
            }
        }
        return 'IPv4';
    } else if (isV6Split) {
        if (isV6Split.length !== 8) {
            return `Neither`;
        }
        for (const iterator of isV6Split) {
            if (!(iterator.length >= 1 && iterator.length <= 4)) {
                return `Neither`;
            }
        }
        for (const iterator of isV6Split) {
            for (const charIterator of iterator) {
                if (isNaN(charIterator)) {
                    if (
                        !(
                            (charIterator >= 'a' && charIterator <= 'f') ||
                            (charIterator >= 'A' && charIterator <= 'F')
                        )
                    ) {
                        return `Neither`;
                    }
                }
            }
        }
        return 'IPv6';
    } else {
        return `Neither`;
    }
};

console.log(validIPAddress((queryIP = '2001:0db8:85a3:0:0:8A2E:0370:7334')));
console.log(validIPAddress((queryIP = '172.16.254.1')));
console.log(validIPAddress((queryIP = '256.256.256.256')));
