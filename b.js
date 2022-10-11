import a from './a'
import { unserialize as uns } from 'node-serialize'
import c from 'csurf'
import execa from "execa";
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({ secure: false })

uns(xyz)
c({ cookie: { secure: false } })


const _ = (req, res) => {
  const x = "ls " + req.body.args;
  execa.command(x);
}

const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(
  helmet.referrerPolicy({
    policy: ["no-referrer"]
  })
);


const cp = require("child_process")
const { exec } = require("child_process")

const proc = "foobar"
cp.exec(proc) // unsafe

cp.exec("ls") // safe

cp.execFile(proc) // unsafe

exec("fubar") // safe
exec("./" + proc)  // unsafe

export async function f(x) {
  return async function g() {
    return async function h() {
      return !!!!!x
    }
  }
}

export async function f2(xs) {
  const ys = []
  for await (const x of xs) {
    ys.push(x)
  }
  return ys
}

export class BadClass {
  async foo() {
    return 1
  }
}

export const badObject = {
  async f() {
    return 1
  },

  g: async function () {
    return 2
  },

  h: async () => 3
}

if (!!(1 + 2)) {
  // empty
}

export default 2

const x = import('x');
