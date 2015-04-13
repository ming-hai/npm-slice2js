#!/usr/bin/env node
// **********************************************************************
//
// Copyright (c) 2003-2015 ZeroC, Inc. All rights reserved.
//
// **********************************************************************
//

var path     = require('path');
var slice2js = require('./../slice2js');

var args = [];
args.push('test/Hello.ice');
args.push('--output-dir=test');

slice2js.compile(args, {stdio: 'inherit'}).on('close', function (code)
  {
    process.exit(code);
  });