'use strict';
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1.2-6-s
description: >
    Strict Mode - SyntaxError is thrown when FutureReservedWord
    'interface' occurs in strict mode code
flags: [onlyStrict]
---*/


assert.throws(SyntaxError, function() {
            eval("var interface = 1;")
});

reportCompare(0, 0);
