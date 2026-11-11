/* 개인연구 사이트 서버 함수 (server-src/ai-batch.js 를 묶은 파일입니다. 직접 고치지 말고 server-src 를 고친 뒤 다시 묶으세요) */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/cfb/cfb.js
var require_cfb = __commonJS({
  "node_modules/cfb/cfb.js"(exports2, module2) {
    var Base64_map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function Base64_encode(input) {
      for (var o = "", c1 = 0, c2 = 0, c3 = 0, e1 = 0, e2 = 0, e3 = 0, e4 = 0, i = 0; i < input.length; )
        c1 = input.charCodeAt(i++), e1 = c1 >> 2, c2 = input.charCodeAt(i++), e2 = (c1 & 3) << 4 | c2 >> 4, c3 = input.charCodeAt(i++), e3 = (c2 & 15) << 2 | c3 >> 6, e4 = c3 & 63, isNaN(c2) ? e3 = e4 = 64 : isNaN(c3) && (e4 = 64), o += Base64_map.charAt(e1) + Base64_map.charAt(e2) + Base64_map.charAt(e3) + Base64_map.charAt(e4);
      return o;
    }
    function Base64_decode(input) {
      var o = "", c1 = 0, c2 = 0, c3 = 0, e1 = 0, e2 = 0, e3 = 0, e4 = 0;
      input = input.replace(/[^\w\+\/\=]/g, "");
      for (var i = 0; i < input.length; )
        e1 = Base64_map.indexOf(input.charAt(i++)), e2 = Base64_map.indexOf(input.charAt(i++)), c1 = e1 << 2 | e2 >> 4, o += String.fromCharCode(c1), e3 = Base64_map.indexOf(input.charAt(i++)), c2 = (e2 & 15) << 4 | e3 >> 2, e3 !== 64 && (o += String.fromCharCode(c2)), e4 = Base64_map.indexOf(input.charAt(i++)), c3 = (e3 & 3) << 6 | e4, e4 !== 64 && (o += String.fromCharCode(c3));
      return o;
    }
    var has_buf = function() {
      return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
    }(), Buffer_from = function() {
      if (typeof Buffer < "u") {
        var nbfs = !Buffer.from;
        if (!nbfs) try {
          Buffer.from("foo", "utf8");
        } catch {
          nbfs = !0;
        }
        return nbfs ? function(buf, enc) {
          return enc ? new Buffer(buf, enc) : new Buffer(buf);
        } : Buffer.from.bind(Buffer);
      }
      return function() {
      };
    }();
    function new_raw_buf(len) {
      if (has_buf) {
        if (Buffer.alloc) return Buffer.alloc(len);
        var b = new Buffer(len);
        return b.fill(0), b;
      }
      return typeof Uint8Array < "u" ? new Uint8Array(len) : new Array(len);
    }
    function new_unsafe_buf(len) {
      return has_buf ? Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : new Buffer(len) : typeof Uint8Array < "u" ? new Uint8Array(len) : new Array(len);
    }
    var s2a = function(s) {
      return has_buf ? Buffer_from(s, "binary") : s.split("").map(function(x) {
        return x.charCodeAt(0) & 255;
      });
    }, chr0 = /\u0000/g, chr1 = /[\u0001-\u0006]/g, __toBuffer = function(bufs) {
      for (var x = [], i = 0; i < bufs[0].length; ++i)
        x.push.apply(x, bufs[0][i]);
      return x;
    }, ___toBuffer = __toBuffer, __utf16le = function(b, s, e) {
      for (var ss = [], i = s; i < e; i += 2) ss.push(String.fromCharCode(__readUInt16LE(b, i)));
      return ss.join("").replace(chr0, "");
    }, ___utf16le = __utf16le, __hexlify = function(b, s, l) {
      for (var ss = [], i = s; i < s + l; ++i) ss.push(("0" + b[i].toString(16)).slice(-2));
      return ss.join("");
    }, ___hexlify = __hexlify, __bconcat = function(bufs) {
      if (Array.isArray(bufs[0])) return [].concat.apply([], bufs);
      var maxlen = 0, i = 0;
      for (i = 0; i < bufs.length; ++i) maxlen += bufs[i].length;
      var o = new Uint8Array(maxlen);
      for (i = 0, maxlen = 0; i < bufs.length; maxlen += bufs[i].length, ++i) o.set(bufs[i], maxlen);
      return o;
    }, bconcat = __bconcat;
    has_buf && (__utf16le = function(b, s, e) {
      return Buffer.isBuffer(b) ? b.toString("utf16le", s, e).replace(chr0, "") : ___utf16le(b, s, e);
    }, __hexlify = function(b, s, l) {
      return Buffer.isBuffer(b) ? b.toString("hex", s, s + l) : ___hexlify(b, s, l);
    }, __toBuffer = function(bufs) {
      return bufs[0].length > 0 && Buffer.isBuffer(bufs[0][0]) ? Buffer.concat(bufs[0]) : ___toBuffer(bufs);
    }, s2a = function(s) {
      return Buffer_from(s, "binary");
    }, bconcat = function(bufs) {
      return Buffer.isBuffer(bufs[0]) ? Buffer.concat(bufs) : __bconcat(bufs);
    });
    var __readUInt8 = function(b, idx) {
      return b[idx];
    }, __readUInt16LE = function(b, idx) {
      return b[idx + 1] * 256 + b[idx];
    }, __readInt16LE = function(b, idx) {
      var u = b[idx + 1] * 256 + b[idx];
      return u < 32768 ? u : (65535 - u + 1) * -1;
    }, __readUInt32LE = function(b, idx) {
      return b[idx + 3] * (1 << 24) + (b[idx + 2] << 16) + (b[idx + 1] << 8) + b[idx];
    }, __readInt32LE = function(b, idx) {
      return (b[idx + 3] << 24) + (b[idx + 2] << 16) + (b[idx + 1] << 8) + b[idx];
    };
    function ReadShift(size, t) {
      var oI, oS, type = 0;
      switch (size) {
        case 1:
          oI = __readUInt8(this, this.l);
          break;
        case 2:
          oI = (t !== "i" ? __readUInt16LE : __readInt16LE)(this, this.l);
          break;
        case 4:
          oI = __readInt32LE(this, this.l);
          break;
        case 16:
          type = 2, oS = __hexlify(this, this.l, size);
      }
      return this.l += size, type === 0 ? oI : oS;
    }
    var __writeUInt32LE = function(b, val, idx) {
      b[idx] = val & 255, b[idx + 1] = val >>> 8 & 255, b[idx + 2] = val >>> 16 & 255, b[idx + 3] = val >>> 24 & 255;
    }, __writeInt32LE = function(b, val, idx) {
      b[idx] = val & 255, b[idx + 1] = val >> 8 & 255, b[idx + 2] = val >> 16 & 255, b[idx + 3] = val >> 24 & 255;
    };
    function WriteShift(t, val, f) {
      var size = 0, i = 0;
      switch (f) {
        case "hex":
          for (; i < t; ++i)
            this[this.l++] = parseInt(val.slice(2 * i, 2 * i + 2), 16) || 0;
          return this;
        case "utf16le":
          var end = this.l + t;
          for (i = 0; i < Math.min(val.length, t); ++i) {
            var cc = val.charCodeAt(i);
            this[this.l++] = cc & 255, this[this.l++] = cc >> 8;
          }
          for (; this.l < end; ) this[this.l++] = 0;
          return this;
      }
      switch (t) {
        case 1:
          size = 1, this[this.l] = val & 255;
          break;
        case 2:
          size = 2, this[this.l] = val & 255, val >>>= 8, this[this.l + 1] = val & 255;
          break;
        case 4:
          size = 4, __writeUInt32LE(this, val, this.l);
          break;
        case -4:
          size = 4, __writeInt32LE(this, val, this.l);
          break;
      }
      return this.l += size, this;
    }
    function CheckField(hexstr, fld) {
      var m = __hexlify(this, this.l, hexstr.length >> 1);
      if (m !== hexstr) throw new Error(fld + "Expected " + hexstr + " saw " + m);
      this.l += hexstr.length >> 1;
    }
    function prep_blob(blob, pos) {
      blob.l = pos, blob.read_shift = ReadShift, blob.chk = CheckField, blob.write_shift = WriteShift;
    }
    function new_buf(sz) {
      var o = new_raw_buf(sz);
      return prep_blob(o, 0), o;
    }
    var CRC32 = function() {
      var CRC322 = {};
      CRC322.version = "1.2.1";
      function signed_crc_table() {
        for (var c = 0, table = new Array(256), n = 0; n != 256; ++n)
          c = n, c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1, c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1, c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1, c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1, c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1, c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1, c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1, c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1, table[n] = c;
        return typeof Int32Array < "u" ? new Int32Array(table) : table;
      }
      var T0 = signed_crc_table();
      function slice_by_16_tables(T) {
        var c = 0, v = 0, n = 0, table = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
        for (n = 0; n != 256; ++n) table[n] = T[n];
        for (n = 0; n != 256; ++n)
          for (v = T[n], c = 256 + n; c < 4096; c += 256) v = table[c] = v >>> 8 ^ T[v & 255];
        var out = [];
        for (n = 1; n != 16; ++n) out[n - 1] = typeof Int32Array < "u" ? table.subarray(n * 256, n * 256 + 256) : table.slice(n * 256, n * 256 + 256);
        return out;
      }
      var TT = slice_by_16_tables(T0), T1 = TT[0], T2 = TT[1], T3 = TT[2], T4 = TT[3], T5 = TT[4], T6 = TT[5], T7 = TT[6], T8 = TT[7], T9 = TT[8], Ta = TT[9], Tb = TT[10], Tc = TT[11], Td = TT[12], Te = TT[13], Tf = TT[14];
      function crc32_bstr(bstr, seed) {
        for (var C = seed ^ -1, i = 0, L = bstr.length; i < L; ) C = C >>> 8 ^ T0[(C ^ bstr.charCodeAt(i++)) & 255];
        return ~C;
      }
      function crc32_buf(B, seed) {
        for (var C = seed ^ -1, L = B.length - 15, i = 0; i < L; ) C = Tf[B[i++] ^ C & 255] ^ Te[B[i++] ^ C >> 8 & 255] ^ Td[B[i++] ^ C >> 16 & 255] ^ Tc[B[i++] ^ C >>> 24] ^ Tb[B[i++]] ^ Ta[B[i++]] ^ T9[B[i++]] ^ T8[B[i++]] ^ T7[B[i++]] ^ T6[B[i++]] ^ T5[B[i++]] ^ T4[B[i++]] ^ T3[B[i++]] ^ T2[B[i++]] ^ T1[B[i++]] ^ T0[B[i++]];
        for (L += 15; i < L; ) C = C >>> 8 ^ T0[(C ^ B[i++]) & 255];
        return ~C;
      }
      function crc32_str(str, seed) {
        for (var C = seed ^ -1, i = 0, L = str.length, c = 0, d = 0; i < L; )
          c = str.charCodeAt(i++), c < 128 ? C = C >>> 8 ^ T0[(C ^ c) & 255] : c < 2048 ? (C = C >>> 8 ^ T0[(C ^ (192 | c >> 6 & 31)) & 255], C = C >>> 8 ^ T0[(C ^ (128 | c & 63)) & 255]) : c >= 55296 && c < 57344 ? (c = (c & 1023) + 64, d = str.charCodeAt(i++) & 1023, C = C >>> 8 ^ T0[(C ^ (240 | c >> 8 & 7)) & 255], C = C >>> 8 ^ T0[(C ^ (128 | c >> 2 & 63)) & 255], C = C >>> 8 ^ T0[(C ^ (128 | d >> 6 & 15 | (c & 3) << 4)) & 255], C = C >>> 8 ^ T0[(C ^ (128 | d & 63)) & 255]) : (C = C >>> 8 ^ T0[(C ^ (224 | c >> 12 & 15)) & 255], C = C >>> 8 ^ T0[(C ^ (128 | c >> 6 & 63)) & 255], C = C >>> 8 ^ T0[(C ^ (128 | c & 63)) & 255]);
        return ~C;
      }
      return CRC322.table = T0, CRC322.bstr = crc32_bstr, CRC322.buf = crc32_buf, CRC322.str = crc32_str, CRC322;
    }(), CFB2 = function() {
      var exports3 = {};
      exports3.version = "1.2.2";
      function namecmp(l, r) {
        for (var L = l.split("/"), R = r.split("/"), i2 = 0, c = 0, Z = Math.min(L.length, R.length); i2 < Z; ++i2) {
          if (c = L[i2].length - R[i2].length) return c;
          if (L[i2] != R[i2]) return L[i2] < R[i2] ? -1 : 1;
        }
        return L.length - R.length;
      }
      function dirname(p) {
        if (p.charAt(p.length - 1) == "/") return p.slice(0, -1).indexOf("/") === -1 ? p : dirname(p.slice(0, -1));
        var c = p.lastIndexOf("/");
        return c === -1 ? p : p.slice(0, c + 1);
      }
      function filename(p) {
        if (p.charAt(p.length - 1) == "/") return filename(p.slice(0, -1));
        var c = p.lastIndexOf("/");
        return c === -1 ? p : p.slice(c + 1);
      }
      function write_dos_date(buf, date) {
        typeof date == "string" && (date = new Date(date));
        var hms = date.getHours();
        hms = hms << 6 | date.getMinutes(), hms = hms << 5 | date.getSeconds() >>> 1, buf.write_shift(2, hms);
        var ymd = date.getFullYear() - 1980;
        ymd = ymd << 4 | date.getMonth() + 1, ymd = ymd << 5 | date.getDate(), buf.write_shift(2, ymd);
      }
      function parse_dos_date(buf) {
        var hms = buf.read_shift(2) & 65535, ymd = buf.read_shift(2) & 65535, val = /* @__PURE__ */ new Date(), d = ymd & 31;
        ymd >>>= 5;
        var m = ymd & 15;
        ymd >>>= 4, val.setMilliseconds(0), val.setFullYear(ymd + 1980), val.setMonth(m - 1), val.setDate(d);
        var S = hms & 31;
        hms >>>= 5;
        var M = hms & 63;
        return hms >>>= 6, val.setHours(hms), val.setMinutes(M), val.setSeconds(S << 1), val;
      }
      function parse_extra_field(blob) {
        prep_blob(blob, 0);
        for (var o = {}, flags = 0; blob.l <= blob.length - 4; ) {
          var type = blob.read_shift(2), sz = blob.read_shift(2), tgt = blob.l + sz, p = {};
          switch (type) {
            case 21589:
              flags = blob.read_shift(1), flags & 1 && (p.mtime = blob.read_shift(4)), sz > 5 && (flags & 2 && (p.atime = blob.read_shift(4)), flags & 4 && (p.ctime = blob.read_shift(4))), p.mtime && (p.mt = new Date(p.mtime * 1e3));
              break;
          }
          blob.l = tgt, o[type] = p;
        }
        return o;
      }
      var fs;
      function get_fs() {
        return fs || (fs = require("fs"));
      }
      function parse(file, options) {
        if (file[0] == 80 && file[1] == 75) return parse_zip(file, options);
        if ((file[0] | 32) == 109 && (file[1] | 32) == 105) return parse_mad(file, options);
        if (file.length < 512) throw new Error("CFB file size " + file.length + " < 512");
        var mver = 3, ssz = 512, nmfs = 0, difat_sec_cnt = 0, dir_start = 0, minifat_start = 0, difat_start = 0, fat_addrs = [], blob = file.slice(0, 512);
        prep_blob(blob, 0);
        var mv = check_get_mver(blob);
        switch (mver = mv[0], mver) {
          case 3:
            ssz = 512;
            break;
          case 4:
            ssz = 4096;
            break;
          case 0:
            if (mv[1] == 0) return parse_zip(file, options);
          default:
            throw new Error("Major Version: Expected 3 or 4 saw " + mver);
        }
        ssz !== 512 && (blob = file.slice(0, ssz), prep_blob(
          blob,
          28
          /* blob.l */
        ));
        var header = file.slice(0, ssz);
        check_shifts(blob, mver);
        var dir_cnt = blob.read_shift(4, "i");
        if (mver === 3 && dir_cnt !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + dir_cnt);
        blob.l += 4, dir_start = blob.read_shift(4, "i"), blob.l += 4, blob.chk("00100000", "Mini Stream Cutoff Size: "), minifat_start = blob.read_shift(4, "i"), nmfs = blob.read_shift(4, "i"), difat_start = blob.read_shift(4, "i"), difat_sec_cnt = blob.read_shift(4, "i");
        for (var q2 = -1, j = 0; j < 109 && (q2 = blob.read_shift(4, "i"), !(q2 < 0)); ++j)
          fat_addrs[j] = q2;
        var sectors = sectorify(file, ssz);
        sleuth_fat(difat_start, difat_sec_cnt, sectors, ssz, fat_addrs);
        var sector_list = make_sector_list(sectors, dir_start, fat_addrs, ssz);
        sector_list[dir_start].name = "!Directory", nmfs > 0 && minifat_start !== ENDOFCHAIN && (sector_list[minifat_start].name = "!MiniFAT"), sector_list[fat_addrs[0]].name = "!FAT", sector_list.fat_addrs = fat_addrs, sector_list.ssz = ssz;
        var files = {}, Paths = [], FileIndex = [], FullPaths = [];
        read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex, minifat_start), build_full_paths(FileIndex, FullPaths, Paths), Paths.shift();
        var o = {
          FileIndex,
          FullPaths
        };
        return options && options.raw && (o.raw = { header, sectors }), o;
      }
      function check_get_mver(blob) {
        if (blob[blob.l] == 80 && blob[blob.l + 1] == 75) return [0, 0];
        blob.chk(HEADER_SIGNATURE, "Header Signature: "), blob.l += 16;
        var mver = blob.read_shift(2, "u");
        return [blob.read_shift(2, "u"), mver];
      }
      function check_shifts(blob, mver) {
        var shift = 9;
        switch (blob.l += 2, shift = blob.read_shift(2)) {
          case 9:
            if (mver != 3) throw new Error("Sector Shift: Expected 9 saw " + shift);
            break;
          case 12:
            if (mver != 4) throw new Error("Sector Shift: Expected 12 saw " + shift);
            break;
          default:
            throw new Error("Sector Shift: Expected 9 or 12 saw " + shift);
        }
        blob.chk("0600", "Mini Sector Shift: "), blob.chk("000000000000", "Reserved: ");
      }
      function sectorify(file, ssz) {
        for (var nsectors = Math.ceil(file.length / ssz) - 1, sectors = [], i2 = 1; i2 < nsectors; ++i2) sectors[i2 - 1] = file.slice(i2 * ssz, (i2 + 1) * ssz);
        return sectors[nsectors - 1] = file.slice(nsectors * ssz), sectors;
      }
      function build_full_paths(FI, FP, Paths) {
        for (var i2 = 0, L = 0, R = 0, C = 0, j = 0, pl = Paths.length, dad = [], q2 = []; i2 < pl; ++i2)
          dad[i2] = q2[i2] = i2, FP[i2] = Paths[i2];
        for (; j < q2.length; ++j)
          i2 = q2[j], L = FI[i2].L, R = FI[i2].R, C = FI[i2].C, dad[i2] === i2 && (L !== -1 && dad[L] !== L && (dad[i2] = dad[L]), R !== -1 && dad[R] !== R && (dad[i2] = dad[R])), C !== -1 && (dad[C] = i2), L !== -1 && i2 != dad[i2] && (dad[L] = dad[i2], q2.lastIndexOf(L) < j && q2.push(L)), R !== -1 && i2 != dad[i2] && (dad[R] = dad[i2], q2.lastIndexOf(R) < j && q2.push(R));
        for (i2 = 1; i2 < pl; ++i2) dad[i2] === i2 && (R !== -1 && dad[R] !== R ? dad[i2] = dad[R] : L !== -1 && dad[L] !== L && (dad[i2] = dad[L]));
        for (i2 = 1; i2 < pl; ++i2)
          if (FI[i2].type !== 0) {
            if (j = i2, j != dad[j]) do
              j = dad[j], FP[i2] = FP[j] + "/" + FP[i2];
            while (j !== 0 && dad[j] !== -1 && j != dad[j]);
            dad[i2] = -1;
          }
        for (FP[0] += "/", i2 = 1; i2 < pl; ++i2)
          FI[i2].type !== 2 && (FP[i2] += "/");
      }
      function get_mfat_entry(entry, payload, mini) {
        for (var start = entry.start, size = entry.size, o = [], idx = start; mini && size > 0 && idx >= 0; )
          o.push(payload.slice(idx * MSSZ, idx * MSSZ + MSSZ)), size -= MSSZ, idx = __readInt32LE(mini, idx * 4);
        return o.length === 0 ? new_buf(0) : bconcat(o).slice(0, entry.size);
      }
      function sleuth_fat(idx, cnt, sectors, ssz, fat_addrs) {
        var q2 = ENDOFCHAIN;
        if (idx === ENDOFCHAIN) {
          if (cnt !== 0) throw new Error("DIFAT chain shorter than expected");
        } else if (idx !== -1) {
          var sector = sectors[idx], m = (ssz >>> 2) - 1;
          if (!sector) return;
          for (var i2 = 0; i2 < m && (q2 = __readInt32LE(sector, i2 * 4)) !== ENDOFCHAIN; ++i2)
            fat_addrs.push(q2);
          cnt >= 1 && sleuth_fat(__readInt32LE(sector, ssz - 4), cnt - 1, sectors, ssz, fat_addrs);
        }
      }
      function get_sector_list(sectors, start, fat_addrs, ssz, chkd) {
        var buf = [], buf_chain = [];
        chkd || (chkd = []);
        var modulus = ssz - 1, j = 0, jj = 0;
        for (j = start; j >= 0; ) {
          chkd[j] = !0, buf[buf.length] = j, buf_chain.push(sectors[j]);
          var addr = fat_addrs[Math.floor(j * 4 / ssz)];
          if (jj = j * 4 & modulus, ssz < 4 + jj) throw new Error("FAT boundary crossed: " + j + " 4 " + ssz);
          if (!sectors[addr]) break;
          j = __readInt32LE(sectors[addr], jj);
        }
        return { nodes: buf, data: __toBuffer([buf_chain]) };
      }
      function make_sector_list(sectors, dir_start, fat_addrs, ssz) {
        var sl = sectors.length, sector_list = [], chkd = [], buf = [], buf_chain = [], modulus = ssz - 1, i2 = 0, j = 0, k = 0, jj = 0;
        for (i2 = 0; i2 < sl; ++i2)
          if (buf = [], k = i2 + dir_start, k >= sl && (k -= sl), !chkd[k]) {
            buf_chain = [];
            var seen = [];
            for (j = k; j >= 0; ) {
              seen[j] = !0, chkd[j] = !0, buf[buf.length] = j, buf_chain.push(sectors[j]);
              var addr = fat_addrs[Math.floor(j * 4 / ssz)];
              if (jj = j * 4 & modulus, ssz < 4 + jj) throw new Error("FAT boundary crossed: " + j + " 4 " + ssz);
              if (!sectors[addr] || (j = __readInt32LE(sectors[addr], jj), seen[j])) break;
            }
            sector_list[k] = { nodes: buf, data: __toBuffer([buf_chain]) };
          }
        return sector_list;
      }
      function read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex, mini) {
        for (var minifat_store = 0, pl = Paths.length ? 2 : 0, sector = sector_list[dir_start].data, i2 = 0, namelen = 0, name; i2 < sector.length; i2 += 128) {
          var blob = sector.slice(i2, i2 + 128);
          prep_blob(blob, 64), namelen = blob.read_shift(2), name = __utf16le(blob, 0, namelen - pl), Paths.push(name);
          var o = {
            name,
            type: blob.read_shift(1),
            color: blob.read_shift(1),
            L: blob.read_shift(4, "i"),
            R: blob.read_shift(4, "i"),
            C: blob.read_shift(4, "i"),
            clsid: blob.read_shift(16),
            state: blob.read_shift(4, "i"),
            start: 0,
            size: 0
          }, ctime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
          ctime !== 0 && (o.ct = read_date(blob, blob.l - 8));
          var mtime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
          mtime !== 0 && (o.mt = read_date(blob, blob.l - 8)), o.start = blob.read_shift(4, "i"), o.size = blob.read_shift(4, "i"), o.size < 0 && o.start < 0 && (o.size = o.type = 0, o.start = ENDOFCHAIN, o.name = ""), o.type === 5 ? (minifat_store = o.start, nmfs > 0 && minifat_store !== ENDOFCHAIN && (sector_list[minifat_store].name = "!StreamData")) : o.size >= 4096 ? (o.storage = "fat", sector_list[o.start] === void 0 && (sector_list[o.start] = get_sector_list(sectors, o.start, sector_list.fat_addrs, sector_list.ssz)), sector_list[o.start].name = o.name, o.content = sector_list[o.start].data.slice(0, o.size)) : (o.storage = "minifat", o.size < 0 ? o.size = 0 : minifat_store !== ENDOFCHAIN && o.start !== ENDOFCHAIN && sector_list[minifat_store] && (o.content = get_mfat_entry(o, sector_list[minifat_store].data, (sector_list[mini] || {}).data))), o.content && prep_blob(o.content, 0), files[name] = o, FileIndex.push(o);
        }
      }
      function read_date(blob, offset) {
        return new Date((__readUInt32LE(blob, offset + 4) / 1e7 * Math.pow(2, 32) + __readUInt32LE(blob, offset) / 1e7 - 11644473600) * 1e3);
      }
      function read_file(filename2, options) {
        return get_fs(), parse(fs.readFileSync(filename2), options);
      }
      function read2(blob, options) {
        var type = options && options.type;
        switch (type || has_buf && Buffer.isBuffer(blob) && (type = "buffer"), type || "base64") {
          case "file":
            return read_file(blob, options);
          case "base64":
            return parse(s2a(Base64_decode(blob)), options);
          case "binary":
            return parse(s2a(blob), options);
        }
        return parse(blob, options);
      }
      function init_cfb(cfb, opts) {
        var o = opts || {}, root = o.root || "Root Entry";
        if (cfb.FullPaths || (cfb.FullPaths = []), cfb.FileIndex || (cfb.FileIndex = []), cfb.FullPaths.length !== cfb.FileIndex.length) throw new Error("inconsistent CFB structure");
        cfb.FullPaths.length === 0 && (cfb.FullPaths[0] = root + "/", cfb.FileIndex[0] = { name: root, type: 5 }), o.CLSID && (cfb.FileIndex[0].clsid = o.CLSID), seed_cfb(cfb);
      }
      function seed_cfb(cfb) {
        var nm = "Sh33tJ5";
        if (!CFB2.find(cfb, "/" + nm)) {
          var p = new_buf(4);
          p[0] = 55, p[1] = p[3] = 50, p[2] = 54, cfb.FileIndex.push({ name: nm, type: 2, content: p, size: 4, L: 69, R: 69, C: 69 }), cfb.FullPaths.push(cfb.FullPaths[0] + nm), rebuild_cfb(cfb);
        }
      }
      function rebuild_cfb(cfb, f) {
        init_cfb(cfb);
        for (var gc = !1, s = !1, i2 = cfb.FullPaths.length - 1; i2 >= 0; --i2) {
          var _file = cfb.FileIndex[i2];
          switch (_file.type) {
            case 0:
              s ? gc = !0 : (cfb.FileIndex.pop(), cfb.FullPaths.pop());
              break;
            case 1:
            case 2:
            case 5:
              s = !0, isNaN(_file.R * _file.L * _file.C) && (gc = !0), _file.R > -1 && _file.L > -1 && _file.R == _file.L && (gc = !0);
              break;
            default:
              gc = !0;
              break;
          }
        }
        if (!(!gc && !f)) {
          var now = new Date(1987, 1, 19), j = 0, fullPaths = Object.create ? /* @__PURE__ */ Object.create(null) : {}, data = [];
          for (i2 = 0; i2 < cfb.FullPaths.length; ++i2)
            fullPaths[cfb.FullPaths[i2]] = !0, cfb.FileIndex[i2].type !== 0 && data.push([cfb.FullPaths[i2], cfb.FileIndex[i2]]);
          for (i2 = 0; i2 < data.length; ++i2) {
            var dad = dirname(data[i2][0]);
            for (s = fullPaths[dad]; !s; ) {
              for (; dirname(dad) && !fullPaths[dirname(dad)]; ) dad = dirname(dad);
              data.push([dad, {
                name: filename(dad).replace("/", ""),
                type: 1,
                clsid: HEADER_CLSID,
                ct: now,
                mt: now,
                content: null
              }]), fullPaths[dad] = !0, dad = dirname(data[i2][0]), s = fullPaths[dad];
            }
          }
          for (data.sort(function(x, y) {
            return namecmp(x[0], y[0]);
          }), cfb.FullPaths = [], cfb.FileIndex = [], i2 = 0; i2 < data.length; ++i2)
            cfb.FullPaths[i2] = data[i2][0], cfb.FileIndex[i2] = data[i2][1];
          for (i2 = 0; i2 < data.length; ++i2) {
            var elt = cfb.FileIndex[i2], nm = cfb.FullPaths[i2];
            if (elt.name = filename(nm).replace("/", ""), elt.L = elt.R = elt.C = -(elt.color = 1), elt.size = elt.content ? elt.content.length : 0, elt.start = 0, elt.clsid = elt.clsid || HEADER_CLSID, i2 === 0)
              elt.C = data.length > 1 ? 1 : -1, elt.size = 0, elt.type = 5;
            else if (nm.slice(-1) == "/") {
              for (j = i2 + 1; j < data.length && dirname(cfb.FullPaths[j]) != nm; ++j) ;
              for (elt.C = j >= data.length ? -1 : j, j = i2 + 1; j < data.length && dirname(cfb.FullPaths[j]) != dirname(nm); ++j) ;
              elt.R = j >= data.length ? -1 : j, elt.type = 1;
            } else
              dirname(cfb.FullPaths[i2 + 1] || "") == dirname(nm) && (elt.R = i2 + 1), elt.type = 2;
          }
        }
      }
      function _write(cfb, options) {
        var _opts = options || {};
        if (_opts.fileType == "mad") return write_mad(cfb, _opts);
        switch (rebuild_cfb(cfb), _opts.fileType) {
          case "zip":
            return write_zip(cfb, _opts);
        }
        var L = function(cfb2) {
          for (var mini_size = 0, fat_size = 0, i3 = 0; i3 < cfb2.FileIndex.length; ++i3) {
            var file2 = cfb2.FileIndex[i3];
            if (file2.content) {
              var flen2 = file2.content.length;
              flen2 > 0 && (flen2 < 4096 ? mini_size += flen2 + 63 >> 6 : fat_size += flen2 + 511 >> 9);
            }
          }
          for (var dir_cnt = cfb2.FullPaths.length + 3 >> 2, mini_cnt = mini_size + 7 >> 3, mfat_cnt = mini_size + 127 >> 7, fat_base = mini_cnt + fat_size + dir_cnt + mfat_cnt, fat_cnt = fat_base + 127 >> 7, difat_cnt = fat_cnt <= 109 ? 0 : Math.ceil((fat_cnt - 109) / 127); fat_base + fat_cnt + difat_cnt + 127 >> 7 > fat_cnt; ) difat_cnt = ++fat_cnt <= 109 ? 0 : Math.ceil((fat_cnt - 109) / 127);
          var L2 = [1, difat_cnt, fat_cnt, mfat_cnt, dir_cnt, fat_size, mini_size, 0];
          return cfb2.FileIndex[0].size = mini_size << 6, L2[7] = (cfb2.FileIndex[0].start = L2[0] + L2[1] + L2[2] + L2[3] + L2[4] + L2[5]) + (L2[6] + 7 >> 3), L2;
        }(cfb), o = new_buf(L[7] << 9), i2 = 0, T = 0;
        {
          for (i2 = 0; i2 < 8; ++i2) o.write_shift(1, HEADER_SIG[i2]);
          for (i2 = 0; i2 < 8; ++i2) o.write_shift(2, 0);
          for (o.write_shift(2, 62), o.write_shift(2, 3), o.write_shift(2, 65534), o.write_shift(2, 9), o.write_shift(2, 6), i2 = 0; i2 < 3; ++i2) o.write_shift(2, 0);
          for (o.write_shift(4, 0), o.write_shift(4, L[2]), o.write_shift(4, L[0] + L[1] + L[2] + L[3] - 1), o.write_shift(4, 0), o.write_shift(4, 4096), o.write_shift(4, L[3] ? L[0] + L[1] + L[2] - 1 : ENDOFCHAIN), o.write_shift(4, L[3]), o.write_shift(-4, L[1] ? L[0] - 1 : ENDOFCHAIN), o.write_shift(4, L[1]), i2 = 0; i2 < 109; ++i2) o.write_shift(-4, i2 < L[2] ? L[1] + i2 : -1);
        }
        if (L[1])
          for (T = 0; T < L[1]; ++T) {
            for (; i2 < 236 + T * 127; ++i2) o.write_shift(-4, i2 < L[2] ? L[1] + i2 : -1);
            o.write_shift(-4, T === L[1] - 1 ? ENDOFCHAIN : T + 1);
          }
        var chainit = function(w) {
          for (T += w; i2 < T - 1; ++i2) o.write_shift(-4, i2 + 1);
          w && (++i2, o.write_shift(-4, ENDOFCHAIN));
        };
        for (T = i2 = 0, T += L[1]; i2 < T; ++i2) o.write_shift(-4, consts.DIFSECT);
        for (T += L[2]; i2 < T; ++i2) o.write_shift(-4, consts.FATSECT);
        chainit(L[3]), chainit(L[4]);
        for (var j = 0, flen = 0, file = cfb.FileIndex[0]; j < cfb.FileIndex.length; ++j)
          file = cfb.FileIndex[j], file.content && (flen = file.content.length, !(flen < 4096) && (file.start = T, chainit(flen + 511 >> 9)));
        for (chainit(L[6] + 7 >> 3); o.l & 511; ) o.write_shift(-4, consts.ENDOFCHAIN);
        for (T = i2 = 0, j = 0; j < cfb.FileIndex.length; ++j)
          file = cfb.FileIndex[j], file.content && (flen = file.content.length, !(!flen || flen >= 4096) && (file.start = T, chainit(flen + 63 >> 6)));
        for (; o.l & 511; ) o.write_shift(-4, consts.ENDOFCHAIN);
        for (i2 = 0; i2 < L[4] << 2; ++i2) {
          var nm = cfb.FullPaths[i2];
          if (!nm || nm.length === 0) {
            for (j = 0; j < 17; ++j) o.write_shift(4, 0);
            for (j = 0; j < 3; ++j) o.write_shift(4, -1);
            for (j = 0; j < 12; ++j) o.write_shift(4, 0);
            continue;
          }
          file = cfb.FileIndex[i2], i2 === 0 && (file.start = file.size ? file.start - 1 : ENDOFCHAIN);
          var _nm = i2 === 0 && _opts.root || file.name;
          if (_nm.length > 32 && (console.error("Name " + _nm + " will be truncated to " + _nm.slice(0, 32)), _nm = _nm.slice(0, 32)), flen = 2 * (_nm.length + 1), o.write_shift(64, _nm, "utf16le"), o.write_shift(2, flen), o.write_shift(1, file.type), o.write_shift(1, file.color), o.write_shift(-4, file.L), o.write_shift(-4, file.R), o.write_shift(-4, file.C), file.clsid) o.write_shift(16, file.clsid, "hex");
          else for (j = 0; j < 4; ++j) o.write_shift(4, 0);
          o.write_shift(4, file.state || 0), o.write_shift(4, 0), o.write_shift(4, 0), o.write_shift(4, 0), o.write_shift(4, 0), o.write_shift(4, file.start), o.write_shift(4, file.size), o.write_shift(4, 0);
        }
        for (i2 = 1; i2 < cfb.FileIndex.length; ++i2)
          if (file = cfb.FileIndex[i2], file.size >= 4096)
            if (o.l = file.start + 1 << 9, has_buf && Buffer.isBuffer(file.content))
              file.content.copy(o, o.l, 0, file.size), o.l += file.size + 511 & -512;
            else {
              for (j = 0; j < file.size; ++j) o.write_shift(1, file.content[j]);
              for (; j & 511; ++j) o.write_shift(1, 0);
            }
        for (i2 = 1; i2 < cfb.FileIndex.length; ++i2)
          if (file = cfb.FileIndex[i2], file.size > 0 && file.size < 4096)
            if (has_buf && Buffer.isBuffer(file.content))
              file.content.copy(o, o.l, 0, file.size), o.l += file.size + 63 & -64;
            else {
              for (j = 0; j < file.size; ++j) o.write_shift(1, file.content[j]);
              for (; j & 63; ++j) o.write_shift(1, 0);
            }
        if (has_buf)
          o.l = o.length;
        else
          for (; o.l < o.length; ) o.write_shift(1, 0);
        return o;
      }
      function find2(cfb, path) {
        var UCFullPaths = cfb.FullPaths.map(function(x) {
          return x.toUpperCase();
        }), UCPaths = UCFullPaths.map(function(x) {
          var y = x.split("/");
          return y[y.length - (x.slice(-1) == "/" ? 2 : 1)];
        }), k = !1;
        path.charCodeAt(0) === 47 ? (k = !0, path = UCFullPaths[0].slice(0, -1) + path) : k = path.indexOf("/") !== -1;
        var UCPath = path.toUpperCase(), w = k === !0 ? UCFullPaths.indexOf(UCPath) : UCPaths.indexOf(UCPath);
        if (w !== -1) return cfb.FileIndex[w];
        var m = !UCPath.match(chr1);
        for (UCPath = UCPath.replace(chr0, ""), m && (UCPath = UCPath.replace(chr1, "!")), w = 0; w < UCFullPaths.length; ++w)
          if ((m ? UCFullPaths[w].replace(chr1, "!") : UCFullPaths[w]).replace(chr0, "") == UCPath || (m ? UCPaths[w].replace(chr1, "!") : UCPaths[w]).replace(chr0, "") == UCPath) return cfb.FileIndex[w];
        return null;
      }
      var MSSZ = 64, ENDOFCHAIN = -2, HEADER_SIGNATURE = "d0cf11e0a1b11ae1", HEADER_SIG = [208, 207, 17, 224, 161, 177, 26, 225], HEADER_CLSID = "00000000000000000000000000000000", consts = {
        /* 2.1 Compund File Sector Numbers and Types */
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN,
        FREESECT: -1,
        /* 2.2 Compound File Header */
        HEADER_SIGNATURE,
        HEADER_MINOR_VERSION: "3e00",
        MAXREGSID: -6,
        NOSTREAM: -1,
        HEADER_CLSID,
        /* 2.6.1 Compound File Directory Entry */
        EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
      };
      function write_file(cfb, filename2, options) {
        get_fs();
        var o = _write(cfb, options);
        fs.writeFileSync(filename2, o);
      }
      function a2s(o) {
        for (var out = new Array(o.length), i2 = 0; i2 < o.length; ++i2) out[i2] = String.fromCharCode(o[i2]);
        return out.join("");
      }
      function write(cfb, options) {
        var o = _write(cfb, options);
        switch (options && options.type || "buffer") {
          case "file":
            return get_fs(), fs.writeFileSync(options.filename, o), o;
          case "binary":
            return typeof o == "string" ? o : a2s(o);
          case "base64":
            return Base64_encode(typeof o == "string" ? o : a2s(o));
          case "buffer":
            if (has_buf) return Buffer.isBuffer(o) ? o : Buffer_from(o);
          case "array":
            return typeof o == "string" ? s2a(o) : o;
        }
        return o;
      }
      var _zlib;
      function use_zlib(zlib) {
        try {
          var InflateRaw = zlib.InflateRaw, InflRaw = new InflateRaw();
          if (InflRaw._processChunk(new Uint8Array([3, 0]), InflRaw._finishFlushFlag), InflRaw.bytesRead) _zlib = zlib;
          else throw new Error("zlib does not expose bytesRead");
        } catch (e) {
          console.error("cannot use native zlib: " + (e.message || e));
        }
      }
      function _inflateRawSync(payload, usz) {
        if (!_zlib) return _inflate(payload, usz);
        var InflateRaw = _zlib.InflateRaw, InflRaw = new InflateRaw(), out = InflRaw._processChunk(payload.slice(payload.l), InflRaw._finishFlushFlag);
        return payload.l += InflRaw.bytesRead, out;
      }
      function _deflateRawSync(payload) {
        return _zlib ? _zlib.deflateRawSync(payload) : _deflate(payload);
      }
      var CLEN_ORDER = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], LEN_LN = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], DST_LN = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
      function bit_swap_8(n) {
        var t = (n << 1 | n << 11) & 139536 | (n << 5 | n << 15) & 558144;
        return (t >> 16 | t >> 8 | t) & 255;
      }
      for (var use_typed_arrays = typeof Uint8Array < "u", bitswap8 = use_typed_arrays ? new Uint8Array(256) : [], q = 0; q < 256; ++q) bitswap8[q] = bit_swap_8(q);
      function bit_swap_n(n, b) {
        var rev2 = bitswap8[n & 255];
        return b <= 8 ? rev2 >>> 8 - b : (rev2 = rev2 << 8 | bitswap8[n >> 8 & 255], b <= 16 ? rev2 >>> 16 - b : (rev2 = rev2 << 8 | bitswap8[n >> 16 & 255], rev2 >>> 24 - b));
      }
      function read_bits_2(buf, bl) {
        var w = bl & 7, h = bl >>> 3;
        return (buf[h] | (w <= 6 ? 0 : buf[h + 1] << 8)) >>> w & 3;
      }
      function read_bits_3(buf, bl) {
        var w = bl & 7, h = bl >>> 3;
        return (buf[h] | (w <= 5 ? 0 : buf[h + 1] << 8)) >>> w & 7;
      }
      function read_bits_4(buf, bl) {
        var w = bl & 7, h = bl >>> 3;
        return (buf[h] | (w <= 4 ? 0 : buf[h + 1] << 8)) >>> w & 15;
      }
      function read_bits_5(buf, bl) {
        var w = bl & 7, h = bl >>> 3;
        return (buf[h] | (w <= 3 ? 0 : buf[h + 1] << 8)) >>> w & 31;
      }
      function read_bits_7(buf, bl) {
        var w = bl & 7, h = bl >>> 3;
        return (buf[h] | (w <= 1 ? 0 : buf[h + 1] << 8)) >>> w & 127;
      }
      function read_bits_n(buf, bl, n) {
        var w = bl & 7, h = bl >>> 3, f = (1 << n) - 1, v = buf[h] >>> w;
        return n < 8 - w || (v |= buf[h + 1] << 8 - w, n < 16 - w) || (v |= buf[h + 2] << 16 - w, n < 24 - w) || (v |= buf[h + 3] << 24 - w), v & f;
      }
      function write_bits_3(buf, bl, v) {
        var w = bl & 7, h = bl >>> 3;
        return w <= 5 ? buf[h] |= (v & 7) << w : (buf[h] |= v << w & 255, buf[h + 1] = (v & 7) >> 8 - w), bl + 3;
      }
      function write_bits_1(buf, bl, v) {
        var w = bl & 7, h = bl >>> 3;
        return v = (v & 1) << w, buf[h] |= v, bl + 1;
      }
      function write_bits_8(buf, bl, v) {
        var w = bl & 7, h = bl >>> 3;
        return v <<= w, buf[h] |= v & 255, v >>>= 8, buf[h + 1] = v, bl + 8;
      }
      function write_bits_16(buf, bl, v) {
        var w = bl & 7, h = bl >>> 3;
        return v <<= w, buf[h] |= v & 255, v >>>= 8, buf[h + 1] = v & 255, buf[h + 2] = v >>> 8, bl + 16;
      }
      function realloc(b, sz) {
        var L = b.length, M = 2 * L > sz ? 2 * L : sz + 5, i2 = 0;
        if (L >= sz) return b;
        if (has_buf) {
          var o = new_unsafe_buf(M);
          if (b.copy) b.copy(o);
          else for (; i2 < b.length; ++i2) o[i2] = b[i2];
          return o;
        } else if (use_typed_arrays) {
          var a = new Uint8Array(M);
          if (a.set) a.set(b);
          else for (; i2 < L; ++i2) a[i2] = b[i2];
          return a;
        }
        return b.length = M, b;
      }
      function zero_fill_array(n) {
        for (var o = new Array(n), i2 = 0; i2 < n; ++i2) o[i2] = 0;
        return o;
      }
      function build_tree2(clens, cmap, MAX) {
        var maxlen = 1, w = 0, i2 = 0, j = 0, ccode = 0, L = clens.length, bl_count = use_typed_arrays ? new Uint16Array(32) : zero_fill_array(32);
        for (i2 = 0; i2 < 32; ++i2) bl_count[i2] = 0;
        for (i2 = L; i2 < MAX; ++i2) clens[i2] = 0;
        L = clens.length;
        var ctree = use_typed_arrays ? new Uint16Array(L) : zero_fill_array(L);
        for (i2 = 0; i2 < L; ++i2)
          bl_count[w = clens[i2]]++, maxlen < w && (maxlen = w), ctree[i2] = 0;
        for (bl_count[0] = 0, i2 = 1; i2 <= maxlen; ++i2) bl_count[i2 + 16] = ccode = ccode + bl_count[i2 - 1] << 1;
        for (i2 = 0; i2 < L; ++i2)
          ccode = clens[i2], ccode != 0 && (ctree[i2] = bl_count[ccode + 16]++);
        var cleni = 0;
        for (i2 = 0; i2 < L; ++i2)
          if (cleni = clens[i2], cleni != 0)
            for (ccode = bit_swap_n(ctree[i2], maxlen) >> maxlen - cleni, j = (1 << maxlen + 4 - cleni) - 1; j >= 0; --j)
              cmap[ccode | j << cleni] = cleni & 15 | i2 << 4;
        return maxlen;
      }
      var fix_lmap = use_typed_arrays ? new Uint16Array(512) : zero_fill_array(512), fix_dmap = use_typed_arrays ? new Uint16Array(32) : zero_fill_array(32);
      if (!use_typed_arrays) {
        for (var i = 0; i < 512; ++i) fix_lmap[i] = 0;
        for (i = 0; i < 32; ++i) fix_dmap[i] = 0;
      }
      (function() {
        for (var dlens = [], i2 = 0; i2 < 32; i2++) dlens.push(5);
        build_tree2(dlens, fix_dmap, 32);
        var clens = [];
        for (i2 = 0; i2 <= 143; i2++) clens.push(8);
        for (; i2 <= 255; i2++) clens.push(9);
        for (; i2 <= 279; i2++) clens.push(7);
        for (; i2 <= 287; i2++) clens.push(8);
        build_tree2(clens, fix_lmap, 288);
      })();
      var _deflateRaw = function() {
        for (var DST_LN_RE = use_typed_arrays ? new Uint8Array(32768) : [], j = 0, k = 0; j < DST_LN.length - 1; ++j)
          for (; k < DST_LN[j + 1]; ++k) DST_LN_RE[k] = j;
        for (; k < 32768; ++k) DST_LN_RE[k] = 29;
        var LEN_LN_RE = use_typed_arrays ? new Uint8Array(259) : [];
        for (j = 0, k = 0; j < LEN_LN.length - 1; ++j)
          for (; k < LEN_LN[j + 1]; ++k) LEN_LN_RE[k] = j;
        function write_stored(data, out) {
          for (var boff = 0; boff < data.length; ) {
            var L = Math.min(65535, data.length - boff), h = boff + L == data.length;
            for (out.write_shift(1, +h), out.write_shift(2, L), out.write_shift(2, ~L & 65535); L-- > 0; ) out[out.l++] = data[boff++];
          }
          return out.l;
        }
        function write_huff_fixed(data, out) {
          for (var bl = 0, boff = 0, addrs = use_typed_arrays ? new Uint16Array(32768) : []; boff < data.length; ) {
            var L = (
              /* data.length - boff; */
              Math.min(65535, data.length - boff)
            );
            if (L < 10) {
              for (bl = write_bits_3(out, bl, +(boff + L == data.length)), bl & 7 && (bl += 8 - (bl & 7)), out.l = bl / 8 | 0, out.write_shift(2, L), out.write_shift(2, ~L & 65535); L-- > 0; ) out[out.l++] = data[boff++];
              bl = out.l * 8;
              continue;
            }
            bl = write_bits_3(out, bl, +(boff + L == data.length) + 2);
            for (var hash = 0; L-- > 0; ) {
              var d = data[boff];
              hash = (hash << 5 ^ d) & 32767;
              var match = -1, mlen = 0;
              if ((match = addrs[hash]) && (match |= boff & -32768, match > boff && (match -= 32768), match < boff))
                for (; data[match + mlen] == data[boff + mlen] && mlen < 250; ) ++mlen;
              if (mlen > 2) {
                d = LEN_LN_RE[mlen], d <= 22 ? bl = write_bits_8(out, bl, bitswap8[d + 1] >> 1) - 1 : (write_bits_8(out, bl, 3), bl += 5, write_bits_8(out, bl, bitswap8[d - 23] >> 5), bl += 3);
                var len_eb = d < 8 ? 0 : d - 4 >> 2;
                len_eb > 0 && (write_bits_16(out, bl, mlen - LEN_LN[d]), bl += len_eb), d = DST_LN_RE[boff - match], bl = write_bits_8(out, bl, bitswap8[d] >> 3), bl -= 3;
                var dst_eb = d < 4 ? 0 : d - 2 >> 1;
                dst_eb > 0 && (write_bits_16(out, bl, boff - match - DST_LN[d]), bl += dst_eb);
                for (var q2 = 0; q2 < mlen; ++q2)
                  addrs[hash] = boff & 32767, hash = (hash << 5 ^ data[boff]) & 32767, ++boff;
                L -= mlen - 1;
              } else
                d <= 143 ? d = d + 48 : bl = write_bits_1(out, bl, 1), bl = write_bits_8(out, bl, bitswap8[d]), addrs[hash] = boff & 32767, ++boff;
            }
            bl = write_bits_8(out, bl, 0) - 1;
          }
          return out.l = (bl + 7) / 8 | 0, out.l;
        }
        return function(data, out) {
          return data.length < 8 ? write_stored(data, out) : write_huff_fixed(data, out);
        };
      }();
      function _deflate(data) {
        var buf = new_buf(50 + Math.floor(data.length * 1.1)), off = _deflateRaw(data, buf);
        return buf.slice(0, off);
      }
      var dyn_lmap = use_typed_arrays ? new Uint16Array(32768) : zero_fill_array(32768), dyn_dmap = use_typed_arrays ? new Uint16Array(32768) : zero_fill_array(32768), dyn_cmap = use_typed_arrays ? new Uint16Array(128) : zero_fill_array(128), dyn_len_1 = 1, dyn_len_2 = 1;
      function dyn(data, boff) {
        var _HLIT = read_bits_5(data, boff) + 257;
        boff += 5;
        var _HDIST = read_bits_5(data, boff) + 1;
        boff += 5;
        var _HCLEN = read_bits_4(data, boff) + 4;
        boff += 4;
        for (var w = 0, clens = use_typed_arrays ? new Uint8Array(19) : zero_fill_array(19), ctree = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], maxlen = 1, bl_count = use_typed_arrays ? new Uint8Array(8) : zero_fill_array(8), next_code = use_typed_arrays ? new Uint8Array(8) : zero_fill_array(8), L = clens.length, i2 = 0; i2 < _HCLEN; ++i2)
          clens[CLEN_ORDER[i2]] = w = read_bits_3(data, boff), maxlen < w && (maxlen = w), bl_count[w]++, boff += 3;
        var ccode = 0;
        for (bl_count[0] = 0, i2 = 1; i2 <= maxlen; ++i2) next_code[i2] = ccode = ccode + bl_count[i2 - 1] << 1;
        for (i2 = 0; i2 < L; ++i2) (ccode = clens[i2]) != 0 && (ctree[i2] = next_code[ccode]++);
        var cleni = 0;
        for (i2 = 0; i2 < L; ++i2)
          if (cleni = clens[i2], cleni != 0) {
            ccode = bitswap8[ctree[i2]] >> 8 - cleni;
            for (var j = (1 << 7 - cleni) - 1; j >= 0; --j) dyn_cmap[ccode | j << cleni] = cleni & 7 | i2 << 3;
          }
        var hcodes = [];
        for (maxlen = 1; hcodes.length < _HLIT + _HDIST; )
          switch (ccode = dyn_cmap[read_bits_7(data, boff)], boff += ccode & 7, ccode >>>= 3) {
            case 16:
              for (w = 3 + read_bits_2(data, boff), boff += 2, ccode = hcodes[hcodes.length - 1]; w-- > 0; ) hcodes.push(ccode);
              break;
            case 17:
              for (w = 3 + read_bits_3(data, boff), boff += 3; w-- > 0; ) hcodes.push(0);
              break;
            case 18:
              for (w = 11 + read_bits_7(data, boff), boff += 7; w-- > 0; ) hcodes.push(0);
              break;
            default:
              hcodes.push(ccode), maxlen < ccode && (maxlen = ccode);
              break;
          }
        var h1 = hcodes.slice(0, _HLIT), h2 = hcodes.slice(_HLIT);
        for (i2 = _HLIT; i2 < 286; ++i2) h1[i2] = 0;
        for (i2 = _HDIST; i2 < 30; ++i2) h2[i2] = 0;
        return dyn_len_1 = build_tree2(h1, dyn_lmap, 286), dyn_len_2 = build_tree2(h2, dyn_dmap, 30), boff;
      }
      function inflate2(data, usz) {
        if (data[0] == 3 && !(data[1] & 3))
          return [new_raw_buf(usz), 2];
        for (var boff = 0, header = 0, outbuf = new_unsafe_buf(usz || 1 << 18), woff = 0, OL = outbuf.length >>> 0, max_len_1 = 0, max_len_2 = 0; !(header & 1); ) {
          if (header = read_bits_3(data, boff), boff += 3, header >>> 1)
            header >> 1 == 1 ? (max_len_1 = 9, max_len_2 = 5) : (boff = dyn(data, boff), max_len_1 = dyn_len_1, max_len_2 = dyn_len_2);
          else {
            boff & 7 && (boff += 8 - (boff & 7));
            var sz = data[boff >>> 3] | data[(boff >>> 3) + 1] << 8;
            if (boff += 32, sz > 0)
              for (!usz && OL < woff + sz && (outbuf = realloc(outbuf, woff + sz), OL = outbuf.length); sz-- > 0; )
                outbuf[woff++] = data[boff >>> 3], boff += 8;
            continue;
          }
          for (; ; ) {
            !usz && OL < woff + 32767 && (outbuf = realloc(outbuf, woff + 32767), OL = outbuf.length);
            var bits2 = read_bits_n(data, boff, max_len_1), code = header >>> 1 == 1 ? fix_lmap[bits2] : dyn_lmap[bits2];
            if (boff += code & 15, code >>>= 4, !(code >>> 8 & 255)) outbuf[woff++] = code;
            else {
              if (code == 256) break;
              code -= 257;
              var len_eb = code < 8 ? 0 : code - 4 >> 2;
              len_eb > 5 && (len_eb = 0);
              var tgt = woff + LEN_LN[code];
              len_eb > 0 && (tgt += read_bits_n(data, boff, len_eb), boff += len_eb), bits2 = read_bits_n(data, boff, max_len_2), code = header >>> 1 == 1 ? fix_dmap[bits2] : dyn_dmap[bits2], boff += code & 15, code >>>= 4;
              var dst_eb = code < 4 ? 0 : code - 2 >> 1, dst = DST_LN[code];
              for (dst_eb > 0 && (dst += read_bits_n(data, boff, dst_eb), boff += dst_eb), !usz && OL < tgt && (outbuf = realloc(outbuf, tgt + 100), OL = outbuf.length); woff < tgt; )
                outbuf[woff] = outbuf[woff - dst], ++woff;
            }
          }
        }
        return usz ? [outbuf, boff + 7 >>> 3] : [outbuf.slice(0, woff), boff + 7 >>> 3];
      }
      function _inflate(payload, usz) {
        var data = payload.slice(payload.l || 0), out = inflate2(data, usz);
        return payload.l += out[1], out[0];
      }
      function warn_or_throw(wrn, msg) {
        if (wrn)
          typeof console < "u" && console.error(msg);
        else throw new Error(msg);
      }
      function parse_zip(file, options) {
        var blob = file;
        prep_blob(blob, 0);
        var FileIndex = [], FullPaths = [], o = {
          FileIndex,
          FullPaths
        };
        init_cfb(o, { root: options.root });
        for (var i2 = blob.length - 4; (blob[i2] != 80 || blob[i2 + 1] != 75 || blob[i2 + 2] != 5 || blob[i2 + 3] != 6) && i2 >= 0; ) --i2;
        blob.l = i2 + 4, blob.l += 4;
        var fcnt = blob.read_shift(2);
        blob.l += 6;
        var start_cd = blob.read_shift(4);
        for (blob.l = start_cd, i2 = 0; i2 < fcnt; ++i2) {
          blob.l += 20;
          var csz = blob.read_shift(4), usz = blob.read_shift(4), namelen = blob.read_shift(2), efsz = blob.read_shift(2), fcsz = blob.read_shift(2);
          blob.l += 8;
          var offset = blob.read_shift(4), EF = parse_extra_field(blob.slice(blob.l + namelen, blob.l + namelen + efsz));
          blob.l += namelen + efsz + fcsz;
          var L = blob.l;
          blob.l = offset + 4, parse_local_file(blob, csz, usz, o, EF), blob.l = L;
        }
        return o;
      }
      function parse_local_file(blob, csz, usz, o, EF) {
        blob.l += 2;
        var flags = blob.read_shift(2), meth = blob.read_shift(2), date = parse_dos_date(blob);
        if (flags & 8257) throw new Error("Unsupported ZIP encryption");
        for (var crc322 = blob.read_shift(4), _csz = blob.read_shift(4), _usz = blob.read_shift(4), namelen = blob.read_shift(2), efsz = blob.read_shift(2), name = "", i2 = 0; i2 < namelen; ++i2) name += String.fromCharCode(blob[blob.l++]);
        if (efsz) {
          var ef = parse_extra_field(blob.slice(blob.l, blob.l + efsz));
          (ef[21589] || {}).mt && (date = ef[21589].mt), ((EF || {})[21589] || {}).mt && (date = EF[21589].mt);
        }
        blob.l += efsz;
        var data = blob.slice(blob.l, blob.l + _csz);
        switch (meth) {
          case 8:
            data = _inflateRawSync(blob, _usz);
            break;
          case 0:
            break;
          default:
            throw new Error("Unsupported ZIP Compression method " + meth);
        }
        var wrn = !1;
        flags & 8 && (crc322 = blob.read_shift(4), crc322 == 134695760 && (crc322 = blob.read_shift(4), wrn = !0), _csz = blob.read_shift(4), _usz = blob.read_shift(4)), _csz != csz && warn_or_throw(wrn, "Bad compressed size: " + csz + " != " + _csz), _usz != usz && warn_or_throw(wrn, "Bad uncompressed size: " + usz + " != " + _usz);
        var _crc32 = CRC32.buf(data, 0);
        crc322 >> 0 != _crc32 >> 0 && warn_or_throw(wrn, "Bad CRC32 checksum: " + crc322 + " != " + _crc32), cfb_add(o, name, data, { unsafe: !0, mt: date });
      }
      function write_zip(cfb, options) {
        var _opts = options || {}, out = [], cdirs = [], o = new_buf(1), method = _opts.compression ? 8 : 0, flags = 0, desc = !1;
        desc && (flags |= 8);
        var i2 = 0, j = 0, start_cd = 0, fcnt = 0, root = cfb.FullPaths[0], fp = root, fi = cfb.FileIndex[0], crcs = [], sz_cd = 0;
        for (i2 = 1; i2 < cfb.FullPaths.length; ++i2)
          if (fp = cfb.FullPaths[i2].slice(root.length), fi = cfb.FileIndex[i2], !(!fi.size || !fi.content || fp == "Sh33tJ5")) {
            var start = start_cd, namebuf = new_buf(fp.length);
            for (j = 0; j < fp.length; ++j) namebuf.write_shift(1, fp.charCodeAt(j) & 127);
            namebuf = namebuf.slice(0, namebuf.l), crcs[fcnt] = CRC32.buf(fi.content, 0);
            var outbuf = fi.content;
            method == 8 && (outbuf = _deflateRawSync(outbuf)), o = new_buf(30), o.write_shift(4, 67324752), o.write_shift(2, 20), o.write_shift(2, flags), o.write_shift(2, method), fi.mt ? write_dos_date(o, fi.mt) : o.write_shift(4, 0), o.write_shift(-4, flags & 8 ? 0 : crcs[fcnt]), o.write_shift(4, flags & 8 ? 0 : outbuf.length), o.write_shift(4, flags & 8 ? 0 : fi.content.length), o.write_shift(2, namebuf.length), o.write_shift(2, 0), start_cd += o.length, out.push(o), start_cd += namebuf.length, out.push(namebuf), start_cd += outbuf.length, out.push(outbuf), flags & 8 && (o = new_buf(12), o.write_shift(-4, crcs[fcnt]), o.write_shift(4, outbuf.length), o.write_shift(4, fi.content.length), start_cd += o.l, out.push(o)), o = new_buf(46), o.write_shift(4, 33639248), o.write_shift(2, 0), o.write_shift(2, 20), o.write_shift(2, flags), o.write_shift(2, method), o.write_shift(4, 0), o.write_shift(-4, crcs[fcnt]), o.write_shift(4, outbuf.length), o.write_shift(4, fi.content.length), o.write_shift(2, namebuf.length), o.write_shift(2, 0), o.write_shift(2, 0), o.write_shift(2, 0), o.write_shift(2, 0), o.write_shift(4, 0), o.write_shift(4, start), sz_cd += o.l, cdirs.push(o), sz_cd += namebuf.length, cdirs.push(namebuf), ++fcnt;
          }
        return o = new_buf(22), o.write_shift(4, 101010256), o.write_shift(2, 0), o.write_shift(2, 0), o.write_shift(2, fcnt), o.write_shift(2, fcnt), o.write_shift(4, sz_cd), o.write_shift(4, start_cd), o.write_shift(2, 0), bconcat([bconcat(out), bconcat(cdirs), o]);
      }
      var ContentTypeMap = {
        htm: "text/html",
        xml: "text/xml",
        gif: "image/gif",
        jpg: "image/jpeg",
        png: "image/png",
        mso: "application/x-mso",
        thmx: "application/vnd.ms-officetheme",
        sh33tj5: "application/octet-stream"
      };
      function get_content_type(fi, fp) {
        if (fi.ctype) return fi.ctype;
        var ext = fi.name || "", m = ext.match(/\.([^\.]+)$/);
        return m && ContentTypeMap[m[1]] || fp && (m = (ext = fp).match(/[\.\\]([^\.\\])+$/), m && ContentTypeMap[m[1]]) ? ContentTypeMap[m[1]] : "application/octet-stream";
      }
      function write_base64_76(bstr) {
        for (var data = Base64_encode(bstr), o = [], i2 = 0; i2 < data.length; i2 += 76) o.push(data.slice(i2, i2 + 76));
        return o.join(`\r
`) + `\r
`;
      }
      function write_quoted_printable(text) {
        var encoded = text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(c) {
          var w = c.charCodeAt(0).toString(16).toUpperCase();
          return "=" + (w.length == 1 ? "0" + w : w);
        });
        encoded = encoded.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), encoded.charAt(0) == `
` && (encoded = "=0D" + encoded.slice(1)), encoded = encoded.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
        for (var o = [], split = encoded.split(`\r
`), si = 0; si < split.length; ++si) {
          var str = split[si];
          if (str.length == 0) {
            o.push("");
            continue;
          }
          for (var i2 = 0; i2 < str.length; ) {
            var end = 76, tmp = str.slice(i2, i2 + end);
            tmp.charAt(end - 1) == "=" ? end-- : tmp.charAt(end - 2) == "=" ? end -= 2 : tmp.charAt(end - 3) == "=" && (end -= 3), tmp = str.slice(i2, i2 + end), i2 += end, i2 < str.length && (tmp += "="), o.push(tmp);
          }
        }
        return o.join(`\r
`);
      }
      function parse_quoted_printable(data) {
        for (var o = [], di = 0; di < data.length; ++di) {
          for (var line = data[di]; di <= data.length && line.charAt(line.length - 1) == "="; ) line = line.slice(0, line.length - 1) + data[++di];
          o.push(line);
        }
        for (var oi = 0; oi < o.length; ++oi) o[oi] = o[oi].replace(/[=][0-9A-Fa-f]{2}/g, function($$) {
          return String.fromCharCode(parseInt($$.slice(1), 16));
        });
        return s2a(o.join(`\r
`));
      }
      function parse_mime(cfb, data, root) {
        for (var fname = "", cte = "", ctype = "", fdata, di = 0; di < 10; ++di) {
          var line = data[di];
          if (!line || line.match(/^\s*$/)) break;
          var m = line.match(/^(.*?):\s*([^\s].*)$/);
          if (m) switch (m[1].toLowerCase()) {
            case "content-location":
              fname = m[2].trim();
              break;
            case "content-type":
              ctype = m[2].trim();
              break;
            case "content-transfer-encoding":
              cte = m[2].trim();
              break;
          }
        }
        switch (++di, cte.toLowerCase()) {
          case "base64":
            fdata = s2a(Base64_decode(data.slice(di).join("")));
            break;
          case "quoted-printable":
            fdata = parse_quoted_printable(data.slice(di));
            break;
          default:
            throw new Error("Unsupported Content-Transfer-Encoding " + cte);
        }
        var file = cfb_add(cfb, fname.slice(root.length), fdata, { unsafe: !0 });
        ctype && (file.ctype = ctype);
      }
      function parse_mad(file, options) {
        if (a2s(file.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
        var root = options && options.root || "", data = (has_buf && Buffer.isBuffer(file) ? file.toString("binary") : a2s(file)).split(`\r
`), di = 0, row = "";
        for (di = 0; di < data.length; ++di)
          if (row = data[di], !!/^Content-Location:/i.test(row) && (row = row.slice(row.indexOf("file")), root || (root = row.slice(0, row.lastIndexOf("/") + 1)), row.slice(0, root.length) != root))
            for (; root.length > 0 && (root = root.slice(0, root.length - 1), root = root.slice(0, root.lastIndexOf("/") + 1), row.slice(0, root.length) != root); )
              ;
        var mboundary = (data[1] || "").match(/boundary="(.*?)"/);
        if (!mboundary) throw new Error("MAD cannot find boundary");
        var boundary = "--" + (mboundary[1] || ""), FileIndex = [], FullPaths = [], o = {
          FileIndex,
          FullPaths
        };
        init_cfb(o);
        var start_di, fcnt = 0;
        for (di = 0; di < data.length; ++di) {
          var line = data[di];
          line !== boundary && line !== boundary + "--" || (fcnt++ && parse_mime(o, data.slice(start_di, di), root), start_di = di);
        }
        return o;
      }
      function write_mad(cfb, options) {
        var opts = options || {}, boundary = opts.boundary || "SheetJS";
        boundary = "------=" + boundary;
        for (var out = [
          "MIME-Version: 1.0",
          'Content-Type: multipart/related; boundary="' + boundary.slice(2) + '"',
          "",
          "",
          ""
        ], root = cfb.FullPaths[0], fp = root, fi = cfb.FileIndex[0], i2 = 1; i2 < cfb.FullPaths.length; ++i2)
          if (fp = cfb.FullPaths[i2].slice(root.length), fi = cfb.FileIndex[i2], !(!fi.size || !fi.content || fp == "Sh33tJ5")) {
            fp = fp.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(c) {
              return "_x" + c.charCodeAt(0).toString(16) + "_";
            }).replace(/[\u0080-\uFFFF]/g, function(u) {
              return "_u" + u.charCodeAt(0).toString(16) + "_";
            });
            for (var ca = fi.content, cstr = has_buf && Buffer.isBuffer(ca) ? ca.toString("binary") : a2s(ca), dispcnt = 0, L = Math.min(1024, cstr.length), cc = 0, csl = 0; csl <= L; ++csl) (cc = cstr.charCodeAt(csl)) >= 32 && cc < 128 && ++dispcnt;
            var qp = dispcnt >= L * 4 / 5;
            out.push(boundary), out.push("Content-Location: " + (opts.root || "file:///C:/SheetJS/") + fp), out.push("Content-Transfer-Encoding: " + (qp ? "quoted-printable" : "base64")), out.push("Content-Type: " + get_content_type(fi, fp)), out.push(""), out.push(qp ? write_quoted_printable(cstr) : write_base64_76(cstr));
          }
        return out.push(boundary + `--\r
`), out.join(`\r
`);
      }
      function cfb_new(opts) {
        var o = {};
        return init_cfb(o, opts), o;
      }
      function cfb_add(cfb, name, content, opts) {
        var unsafe = opts && opts.unsafe;
        unsafe || init_cfb(cfb);
        var file = !unsafe && CFB2.find(cfb, name);
        if (!file) {
          var fpath = cfb.FullPaths[0];
          name.slice(0, fpath.length) == fpath ? fpath = name : (fpath.slice(-1) != "/" && (fpath += "/"), fpath = (fpath + name).replace("//", "/")), file = { name: filename(name), type: 2 }, cfb.FileIndex.push(file), cfb.FullPaths.push(fpath), unsafe || CFB2.utils.cfb_gc(cfb);
        }
        return file.content = content, file.size = content ? content.length : 0, opts && (opts.CLSID && (file.clsid = opts.CLSID), opts.mt && (file.mt = opts.mt), opts.ct && (file.ct = opts.ct)), file;
      }
      function cfb_del(cfb, name) {
        init_cfb(cfb);
        var file = CFB2.find(cfb, name);
        if (file) {
          for (var j = 0; j < cfb.FileIndex.length; ++j) if (cfb.FileIndex[j] == file)
            return cfb.FileIndex.splice(j, 1), cfb.FullPaths.splice(j, 1), !0;
        }
        return !1;
      }
      function cfb_mov(cfb, old_name, new_name) {
        init_cfb(cfb);
        var file = CFB2.find(cfb, old_name);
        if (file) {
          for (var j = 0; j < cfb.FileIndex.length; ++j) if (cfb.FileIndex[j] == file)
            return cfb.FileIndex[j].name = filename(new_name), cfb.FullPaths[j] = new_name, !0;
        }
        return !1;
      }
      function cfb_gc(cfb) {
        rebuild_cfb(cfb, !0);
      }
      return exports3.find = find2, exports3.read = read2, exports3.parse = parse, exports3.write = write, exports3.writeFile = write_file, exports3.utils = {
        cfb_new,
        cfb_add,
        cfb_del,
        cfb_mov,
        cfb_gc,
        ReadShift,
        CheckField,
        prep_blob,
        bconcat,
        use_zlib,
        _deflateRaw: _deflate,
        _inflateRaw: _inflate,
        consts
      }, exports3;
    }();
    typeof require < "u" && typeof module2 < "u" && typeof DO_NOT_EXPORT_CFB > "u" && (module2.exports = CFB2);
  }
});

// ../../../mnt/user-data/outputs/research-site/server-src/ai-batch.js
var ai_batch_exports = {};
__export(ai_batch_exports, {
  default: () => handler
});
module.exports = __toCommonJS(ai_batch_exports);

// node_modules/fflate/esm/index.mjs
var import_module = require("module"), require2 = (0, import_module.createRequire)("/"), Worker;
try {
  Worker = require2("worker_threads").Worker;
} catch {
}
var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array, fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), freb = function(eb, start) {
  for (var b = new u16(31), i = 0; i < 31; ++i)
    b[i] = start += 1 << eb[i - 1];
  for (var r = new i32(b[30]), i = 1; i < 30; ++i)
    for (var j = b[i]; j < b[i + 1]; ++j)
      r[j] = j - b[i] << 5 | i;
  return { b, r };
}, _a = freb(fleb, 2), fl = _a.b, revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b.b, revfd = _b.r, rev = new u16(32768);
for (i = 0; i < 32768; ++i)
  x = (i & 43690) >> 1 | (i & 21845) << 1, x = (x & 52428) >> 2 | (x & 13107) << 2, x = (x & 61680) >> 4 | (x & 3855) << 4, rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
var x, i, hMap = function(cd, mb, r) {
  for (var s = cd.length, i = 0, l = new u16(mb); i < s; ++i)
    cd[i] && ++l[cd[i] - 1];
  var le = new u16(mb);
  for (i = 1; i < mb; ++i)
    le[i] = le[i - 1] + l[i - 1] << 1;
  var co;
  if (r) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i = 0; i < s; ++i)
      if (cd[i])
        for (var sv = i << 4 | cd[i], r_1 = mb - cd[i], v = le[cd[i] - 1]++ << r_1, m = v | (1 << r_1) - 1; v <= m; ++v)
          co[rev[v] >> rvb] = sv;
  } else
    for (co = new u16(s), i = 0; i < s; ++i)
      cd[i] && (co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i]);
  return co;
}, flt = new u8(288);
for (i = 0; i < 144; ++i)
  flt[i] = 8;
var i;
for (i = 144; i < 256; ++i)
  flt[i] = 9;
var i;
for (i = 256; i < 280; ++i)
  flt[i] = 7;
var i;
for (i = 280; i < 288; ++i)
  flt[i] = 8;
var i, fdt = new u8(32);
for (i = 0; i < 32; ++i)
  fdt[i] = 5;
var i;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1), max = function(a) {
  for (var m = a[0], i = 1; i < a.length; ++i)
    a[i] > m && (m = a[i]);
  return m;
}, bits = function(d, p, m) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
}, bits16 = function(d, p) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
}, shft = function(p) {
  return (p + 7) / 8 | 0;
}, slc = function(v, s, e) {
  return (s == null || s < 0) && (s = 0), (e == null || e > v.length) && (e = v.length), new u8(v.subarray(s, e));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
], err = function(ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  if (e.code = ind, Error.captureStackTrace && Error.captureStackTrace(e, err), !nt)
    throw e;
  return e;
}, inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf, resize = noBuf || st.i != 2, noSt = st.i;
  noBuf && (buf = new u8(sl * 3));
  var cbuf = function(l2) {
    var bl = buf.length;
    if (l2 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l2));
      nbuf.set(buf), buf = nbuf;
    }
  }, final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n, tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      if (pos += 3, type)
        if (type == 1)
          lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
        else if (type == 2) {
          var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4, tl = hLit + bits(dat, pos + 5, 31) + 1;
          pos += 14;
          for (var ldt = new u8(tl), clt = new u8(19), i = 0; i < hcLen; ++i)
            clt[clim[i]] = bits(dat, pos + i * 3, 7);
          pos += hcLen * 3;
          for (var clb = max(clt), clbmsk = (1 << clb) - 1, clm = hMap(clt, clb, 1), i = 0; i < tl; ) {
            var r = clm[bits(dat, pos, clbmsk)];
            pos += r & 15;
            var s = r >> 4;
            if (s < 16)
              ldt[i++] = s;
            else {
              var c = 0, n = 0;
              for (s == 16 ? (n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1]) : s == 17 ? (n = 3 + bits(dat, pos, 7), pos += 3) : s == 18 && (n = 11 + bits(dat, pos, 127), pos += 7); n--; )
                ldt[i++] = c;
            }
          }
          var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
          lbt = max(lt), dbt = max(dt), lm = hMap(lt, lbt, 1), dm = hMap(dt, dbt, 1);
        } else
          err(1);
      else {
        var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
        if (t > sl) {
          noSt && err(0);
          break;
        }
        resize && cbuf(bt + l), buf.set(dat.subarray(s, t), bt), st.b = bt += l, st.p = pos = t * 8, st.f = final;
        continue;
      }
      if (pos > tbts) {
        noSt && err(0);
        break;
      }
    }
    resize && cbuf(bt + 131072);
    for (var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1, lpos = pos; ; lpos = pos) {
      var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
      if (pos += c & 15, pos > tbts) {
        noSt && err(0);
        break;
      }
      if (c || err(2), sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i = sym - 257, b = fleb[i];
          add = bits(dat, pos, (1 << b) - 1) + fl[i], pos += b;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
        d || err(3), pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          noSt && err(0);
          break;
        }
        resize && cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift = dl - dt, dend = Math.min(dt, end);
          for (shift + bt < 0 && err(3); bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; ++bt)
          buf[bt] = buf[bt - dt];
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final, lm && (final = 1, st.m = lbt, st.d = dm, st.n = dbt);
  } while (!final);
  return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var b2 = function(d, b) {
  return d[b] | d[b + 1] << 8;
}, b4 = function(d, b) {
  return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
}, b8 = function(d, b) {
  return b4(d, b) + b4(d, b + 4) * 4294967296;
};
function inflateSync(data, opts) {
  return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var td = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), tds = 0;
try {
  td.decode(et, { stream: !0 }), tds = 1;
} catch {
}
var dutf8 = function(d) {
  for (var r = "", i = 0; ; ) {
    var c = d[i++], eb = (c > 127) + (c > 223) + (c > 239);
    if (i + eb > d.length)
      return { s: r, r: slc(d, i - 1) };
    eb ? eb == 3 ? (c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023)) : eb & 1 ? r += String.fromCharCode((c & 31) << 6 | d[i++] & 63) : r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) : r += String.fromCharCode(c);
  }
};
function strFromU8(dat, latin1) {
  if (latin1) {
    for (var r = "", i = 0; i < dat.length; i += 16384)
      r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
    return r;
  } else {
    if (td)
      return td.decode(dat);
    var _a2 = dutf8(dat), s = _a2.s, r = _a2.r;
    return r.length && err(8), s;
  }
}
var slzh = function(d, b) {
  return b + 30 + b2(d, b + 26) + b2(d, b + 28);
}, zh = function(d, b, z) {
  var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl, bs = b4(d, b + 20), _a2 = z && bs == 4294967295 ? z64e(d, es) : [bs, b4(d, b + 24), b4(d, b + 42)], sc = _a2[0], su = _a2[1], off = _a2[2];
  return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
}, z64e = function(d, b) {
  for (; b2(d, b) != 1; b += 4 + b2(d, b + 2))
    ;
  return [b8(d, b + 12), b8(d, b + 4), b8(d, b + 20)];
};
function unzipSync(data, opts) {
  for (var files = {}, e = data.length - 22; b4(data, e) != 101010256; --e)
    (!e || data.length - e > 65558) && err(13);
  var c = b2(data, e + 8);
  if (!c)
    return {};
  var o = b4(data, e + 16), z = o == 4294967295 || c == 65535;
  if (z) {
    var ze = b4(data, e - 12);
    z = b4(data, ze) == 101075792, z && (c = b4(data, ze + 32), o = b4(data, ze + 48));
  }
  for (var fltr = opts && opts.filter, i = 0; i < c; ++i) {
    var _a2 = zh(data, o, z), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
    o = no, (!fltr || fltr({
      name: fn,
      size: sc,
      originalSize: su,
      compression: c_2
    })) && (c_2 ? c_2 == 8 ? files[fn] = inflateSync(data.subarray(b, b + sc), { out: new u8(su) }) : err(14, "unknown compression type " + c_2) : files[fn] = slc(data, b, b + sc));
  }
  return files;
}

// ../../../mnt/user-data/outputs/research-site/server-src/lib.js
var CFB = __toESM(require_cfb());

// node_modules/pako/dist/pako.esm.mjs
function zero$1(buf) {
  let len = buf.length;
  for (; --len >= 0; )
    buf[len] = 0;
}
var STORED_BLOCK = 0, STATIC_TREES = 1, DYN_TREES = 2, MIN_MATCH$1 = 3, MAX_MATCH$1 = 258, LENGTH_CODES$1 = 29, LITERALS$1 = 256, L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1, D_CODES$1 = 30, BL_CODES$1 = 19, HEAP_SIZE$1 = 2 * L_CODES$1 + 1, MAX_BITS$1 = 15, Buf_size = 16, MAX_BL_BITS = 7, END_BLOCK = 256, REP_3_6 = 16, REPZ_3_10 = 17, REPZ_11_138 = 18, extra_lbits = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
), extra_dbits = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
), extra_blbits = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
), bl_order = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), DIST_CODE_LEN = 512, static_ltree = new Array((L_CODES$1 + 2) * 2);
zero$1(static_ltree);
var static_dtree = new Array(D_CODES$1 * 2);
zero$1(static_dtree);
var _dist_code = new Array(DIST_CODE_LEN);
zero$1(_dist_code);
var _length_code = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
zero$1(_length_code);
var base_length = new Array(LENGTH_CODES$1);
zero$1(base_length);
var base_dist = new Array(D_CODES$1);
zero$1(base_dist);
function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
  this.static_tree = static_tree, this.extra_bits = extra_bits, this.extra_base = extra_base, this.elems = elems, this.max_length = max_length, this.has_stree = static_tree && static_tree.length;
}
var static_l_desc, static_d_desc, static_bl_desc;
function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree, this.max_code = 0, this.stat_desc = stat_desc;
}
var d_code = (dist) => dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)], put_short = (s, w) => {
  s.pending_buf[s.pending++] = w & 255, s.pending_buf[s.pending++] = w >>> 8 & 255;
}, send_bits = (s, value, length) => {
  s.bi_valid > Buf_size - length ? (s.bi_buf |= value << s.bi_valid & 65535, put_short(s, s.bi_buf), s.bi_buf = value >> Buf_size - s.bi_valid, s.bi_valid += length - Buf_size) : (s.bi_buf |= value << s.bi_valid & 65535, s.bi_valid += length);
}, send_code = (s, c, tree) => {
  send_bits(
    s,
    tree[c * 2],
    tree[c * 2 + 1]
    /*.Len*/
  );
}, bi_reverse = (code, len) => {
  let res = 0;
  do
    res |= code & 1, code >>>= 1, res <<= 1;
  while (--len > 0);
  return res >>> 1;
}, bi_flush = (s) => {
  s.bi_valid === 16 ? (put_short(s, s.bi_buf), s.bi_buf = 0, s.bi_valid = 0) : s.bi_valid >= 8 && (s.pending_buf[s.pending++] = s.bi_buf & 255, s.bi_buf >>= 8, s.bi_valid -= 8);
}, gen_bitlen = (s, desc) => {
  let tree = desc.dyn_tree, max_code = desc.max_code, stree = desc.stat_desc.static_tree, has_stree = desc.stat_desc.has_stree, extra = desc.stat_desc.extra_bits, base = desc.stat_desc.extra_base, max_length = desc.stat_desc.max_length, h, n, m, bits2, xbits, f, overflow = 0;
  for (bits2 = 0; bits2 <= MAX_BITS$1; bits2++)
    s.bl_count[bits2] = 0;
  for (tree[s.heap[s.heap_max] * 2 + 1] = 0, h = s.heap_max + 1; h < HEAP_SIZE$1; h++)
    n = s.heap[h], bits2 = tree[tree[n * 2 + 1] * 2 + 1] + 1, bits2 > max_length && (bits2 = max_length, overflow++), tree[n * 2 + 1] = bits2, !(n > max_code) && (s.bl_count[bits2]++, xbits = 0, n >= base && (xbits = extra[n - base]), f = tree[n * 2], s.opt_len += f * (bits2 + xbits), has_stree && (s.static_len += f * (stree[n * 2 + 1] + xbits)));
  if (overflow !== 0) {
    do {
      for (bits2 = max_length - 1; s.bl_count[bits2] === 0; )
        bits2--;
      s.bl_count[bits2]--, s.bl_count[bits2 + 1] += 2, s.bl_count[max_length]--, overflow -= 2;
    } while (overflow > 0);
    for (bits2 = max_length; bits2 !== 0; bits2--)
      for (n = s.bl_count[bits2]; n !== 0; )
        m = s.heap[--h], !(m > max_code) && (tree[m * 2 + 1] !== bits2 && (s.opt_len += (bits2 - tree[m * 2 + 1]) * tree[m * 2], tree[m * 2 + 1] = bits2), n--);
  }
}, gen_codes = (tree, max_code, bl_count) => {
  let next_code = new Array(MAX_BITS$1 + 1), code = 0, bits2, n;
  for (bits2 = 1; bits2 <= MAX_BITS$1; bits2++)
    code = code + bl_count[bits2 - 1] << 1, next_code[bits2] = code;
  for (n = 0; n <= max_code; n++) {
    let len = tree[n * 2 + 1];
    len !== 0 && (tree[n * 2] = bi_reverse(next_code[len]++, len));
  }
}, tr_static_init = () => {
  let n, bits2, length, code, dist, bl_count = new Array(MAX_BITS$1 + 1);
  for (length = 0, code = 0; code < LENGTH_CODES$1 - 1; code++)
    for (base_length[code] = length, n = 0; n < 1 << extra_lbits[code]; n++)
      _length_code[length++] = code;
  for (_length_code[length - 1] = code, dist = 0, code = 0; code < 16; code++)
    for (base_dist[code] = dist, n = 0; n < 1 << extra_dbits[code]; n++)
      _dist_code[dist++] = code;
  for (dist >>= 7; code < D_CODES$1; code++)
    for (base_dist[code] = dist << 7, n = 0; n < 1 << extra_dbits[code] - 7; n++)
      _dist_code[256 + dist++] = code;
  for (bits2 = 0; bits2 <= MAX_BITS$1; bits2++)
    bl_count[bits2] = 0;
  for (n = 0; n <= 143; )
    static_ltree[n * 2 + 1] = 8, n++, bl_count[8]++;
  for (; n <= 255; )
    static_ltree[n * 2 + 1] = 9, n++, bl_count[9]++;
  for (; n <= 279; )
    static_ltree[n * 2 + 1] = 7, n++, bl_count[7]++;
  for (; n <= 287; )
    static_ltree[n * 2 + 1] = 8, n++, bl_count[8]++;
  for (gen_codes(static_ltree, L_CODES$1 + 1, bl_count), n = 0; n < D_CODES$1; n++)
    static_dtree[n * 2 + 1] = 5, static_dtree[n * 2] = bi_reverse(n, 5);
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1), static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES$1, MAX_BITS$1), static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES$1, MAX_BL_BITS);
}, init_block = (s) => {
  let n;
  for (n = 0; n < L_CODES$1; n++)
    s.dyn_ltree[n * 2] = 0;
  for (n = 0; n < D_CODES$1; n++)
    s.dyn_dtree[n * 2] = 0;
  for (n = 0; n < BL_CODES$1; n++)
    s.bl_tree[n * 2] = 0;
  s.dyn_ltree[END_BLOCK * 2] = 1, s.opt_len = s.static_len = 0, s.sym_next = s.matches = 0;
}, bi_windup = (s) => {
  s.bi_valid > 8 ? put_short(s, s.bi_buf) : s.bi_valid > 0 && (s.pending_buf[s.pending++] = s.bi_buf), s.bi_buf = 0, s.bi_valid = 0;
}, smaller = (tree, n, m, depth) => {
  let _n2 = n * 2, _m2 = m * 2;
  return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
}, pqdownheap = (s, tree, k) => {
  let v = s.heap[k], j = k << 1;
  for (; j <= s.heap_len && (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth) && j++, !smaller(tree, v, s.heap[j], s.depth)); )
    s.heap[k] = s.heap[j], k = j, j <<= 1;
  s.heap[k] = v;
}, compress_block = (s, ltree, dtree) => {
  let dist, lc, sx = 0, code, extra;
  if (s.sym_next !== 0)
    do
      dist = s.pending_buf[s.sym_buf + sx++] & 255, dist += (s.pending_buf[s.sym_buf + sx++] & 255) << 8, lc = s.pending_buf[s.sym_buf + sx++], dist === 0 ? send_code(s, lc, ltree) : (code = _length_code[lc], send_code(s, code + LITERALS$1 + 1, ltree), extra = extra_lbits[code], extra !== 0 && (lc -= base_length[code], send_bits(s, lc, extra)), dist--, code = d_code(dist), send_code(s, code, dtree), extra = extra_dbits[code], extra !== 0 && (dist -= base_dist[code], send_bits(s, dist, extra)));
    while (sx < s.sym_next);
  send_code(s, END_BLOCK, ltree);
}, build_tree = (s, desc) => {
  let tree = desc.dyn_tree, stree = desc.stat_desc.static_tree, has_stree = desc.stat_desc.has_stree, elems = desc.stat_desc.elems, n, m, max_code = -1, node;
  for (s.heap_len = 0, s.heap_max = HEAP_SIZE$1, n = 0; n < elems; n++)
    tree[n * 2] !== 0 ? (s.heap[++s.heap_len] = max_code = n, s.depth[n] = 0) : tree[n * 2 + 1] = 0;
  for (; s.heap_len < 2; )
    node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0, tree[node * 2] = 1, s.depth[node] = 0, s.opt_len--, has_stree && (s.static_len -= stree[node * 2 + 1]);
  for (desc.max_code = max_code, n = s.heap_len >> 1; n >= 1; n--)
    pqdownheap(s, tree, n);
  node = elems;
  do
    n = s.heap[
      1
      /*SMALLEST*/
    ], s.heap[
      1
      /*SMALLEST*/
    ] = s.heap[s.heap_len--], pqdownheap(
      s,
      tree,
      1
      /*SMALLEST*/
    ), m = s.heap[
      1
      /*SMALLEST*/
    ], s.heap[--s.heap_max] = n, s.heap[--s.heap_max] = m, tree[node * 2] = tree[n * 2] + tree[m * 2], s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1, tree[n * 2 + 1] = tree[m * 2 + 1] = node, s.heap[
      1
      /*SMALLEST*/
    ] = node++, pqdownheap(
      s,
      tree,
      1
      /*SMALLEST*/
    );
  while (s.heap_len >= 2);
  s.heap[--s.heap_max] = s.heap[
    1
    /*SMALLEST*/
  ], gen_bitlen(s, desc), gen_codes(tree, max_code, s.bl_count);
}, scan_tree = (s, tree, max_code) => {
  let n, prevlen = -1, curlen, nextlen = tree[0 * 2 + 1], count = 0, max_count = 7, min_count = 4;
  for (nextlen === 0 && (max_count = 138, min_count = 3), tree[(max_code + 1) * 2 + 1] = 65535, n = 0; n <= max_code; n++)
    curlen = nextlen, nextlen = tree[(n + 1) * 2 + 1], !(++count < max_count && curlen === nextlen) && (count < min_count ? s.bl_tree[curlen * 2] += count : curlen !== 0 ? (curlen !== prevlen && s.bl_tree[curlen * 2]++, s.bl_tree[REP_3_6 * 2]++) : count <= 10 ? s.bl_tree[REPZ_3_10 * 2]++ : s.bl_tree[REPZ_11_138 * 2]++, count = 0, prevlen = curlen, nextlen === 0 ? (max_count = 138, min_count = 3) : curlen === nextlen ? (max_count = 6, min_count = 3) : (max_count = 7, min_count = 4));
}, send_tree = (s, tree, max_code) => {
  let n, prevlen = -1, curlen, nextlen = tree[0 * 2 + 1], count = 0, max_count = 7, min_count = 4;
  for (nextlen === 0 && (max_count = 138, min_count = 3), n = 0; n <= max_code; n++)
    if (curlen = nextlen, nextlen = tree[(n + 1) * 2 + 1], !(++count < max_count && curlen === nextlen)) {
      if (count < min_count)
        do
          send_code(s, curlen, s.bl_tree);
        while (--count !== 0);
      else curlen !== 0 ? (curlen !== prevlen && (send_code(s, curlen, s.bl_tree), count--), send_code(s, REP_3_6, s.bl_tree), send_bits(s, count - 3, 2)) : count <= 10 ? (send_code(s, REPZ_3_10, s.bl_tree), send_bits(s, count - 3, 3)) : (send_code(s, REPZ_11_138, s.bl_tree), send_bits(s, count - 11, 7));
      count = 0, prevlen = curlen, nextlen === 0 ? (max_count = 138, min_count = 3) : curlen === nextlen ? (max_count = 6, min_count = 3) : (max_count = 7, min_count = 4);
    }
}, build_bl_tree = (s) => {
  let max_blindex;
  for (scan_tree(s, s.dyn_ltree, s.l_desc.max_code), scan_tree(s, s.dyn_dtree, s.d_desc.max_code), build_tree(s, s.bl_desc), max_blindex = BL_CODES$1 - 1; max_blindex >= 3 && s.bl_tree[bl_order[max_blindex] * 2 + 1] === 0; max_blindex--)
    ;
  return s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4, max_blindex;
}, send_all_trees = (s, lcodes, dcodes, blcodes) => {
  let rank2;
  for (send_bits(s, lcodes - 257, 5), send_bits(s, dcodes - 1, 5), send_bits(s, blcodes - 4, 4), rank2 = 0; rank2 < blcodes; rank2++)
    send_bits(s, s.bl_tree[bl_order[rank2] * 2 + 1], 3);
  send_tree(s, s.dyn_ltree, lcodes - 1), send_tree(s, s.dyn_dtree, dcodes - 1);
}, detect_data_type = (s) => {
  let block_mask = 4093624447, n;
  for (n = 0; n <= 31; n++, block_mask >>>= 1)
    if (block_mask & 1 && s.dyn_ltree[n * 2] !== 0)
      return 0;
  if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0)
    return 1;
  for (n = 32; n < LITERALS$1; n++)
    if (s.dyn_ltree[n * 2] !== 0)
      return 1;
  return 0;
}, static_init_done = !1, _tr_init$1 = (s) => {
  static_init_done || (tr_static_init(), static_init_done = !0), s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc), s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc), s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc), s.bi_buf = 0, s.bi_valid = 0, init_block(s);
}, _tr_stored_block$1 = (s, buf, stored_len, last) => {
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3), bi_windup(s), put_short(s, stored_len), put_short(s, ~stored_len), stored_len && s.pending_buf.set(s.window.subarray(buf, buf + stored_len), s.pending), s.pending += stored_len;
}, _tr_align$1 = (s) => {
  send_bits(s, STATIC_TREES << 1, 3), send_code(s, END_BLOCK, static_ltree), bi_flush(s);
}, _tr_flush_block$1 = (s, buf, stored_len, last) => {
  let opt_lenb, static_lenb, max_blindex = 0;
  s.level > 0 ? (s.strm.data_type === 2 && (s.strm.data_type = detect_data_type(s)), build_tree(s, s.l_desc), build_tree(s, s.d_desc), max_blindex = build_bl_tree(s), opt_lenb = s.opt_len + 3 + 7 >>> 3, static_lenb = s.static_len + 3 + 7 >>> 3, static_lenb <= opt_lenb && (opt_lenb = static_lenb)) : opt_lenb = static_lenb = stored_len + 5, stored_len + 4 <= opt_lenb && buf !== -1 ? _tr_stored_block$1(s, buf, stored_len, last) : s.strategy === 4 || static_lenb === opt_lenb ? (send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3), compress_block(s, static_ltree, static_dtree)) : (send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3), send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1), compress_block(s, s.dyn_ltree, s.dyn_dtree)), init_block(s), last && bi_windup(s);
}, _tr_tally$1 = (s, dist, lc) => (s.pending_buf[s.sym_buf + s.sym_next++] = dist, s.pending_buf[s.sym_buf + s.sym_next++] = dist >> 8, s.pending_buf[s.sym_buf + s.sym_next++] = lc, dist === 0 ? s.dyn_ltree[lc * 2]++ : (s.matches++, dist--, s.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2]++, s.dyn_dtree[d_code(dist) * 2]++), s.sym_next === s.sym_end), _tr_init_1 = _tr_init$1, _tr_stored_block_1 = _tr_stored_block$1, _tr_flush_block_1 = _tr_flush_block$1, _tr_tally_1 = _tr_tally$1, _tr_align_1 = _tr_align$1, trees = {
  _tr_init: _tr_init_1,
  _tr_stored_block: _tr_stored_block_1,
  _tr_flush_block: _tr_flush_block_1,
  _tr_tally: _tr_tally_1,
  _tr_align: _tr_align_1
}, adler32 = (adler, buf, len, pos) => {
  let s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
  for (; len !== 0; ) {
    n = len > 2e3 ? 2e3 : len, len -= n;
    do
      s1 = s1 + buf[pos++] | 0, s2 = s2 + s1 | 0;
    while (--n);
    s1 %= 65521, s2 %= 65521;
  }
  return s1 | s2 << 16 | 0;
}, adler32_1 = adler32, makeTable = () => {
  let c, table = [];
  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++)
      c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
    table[n] = c;
  }
  return table;
}, crcTable = new Uint32Array(makeTable()), crc32 = (crc, buf, len, pos) => {
  let t = crcTable, end = pos + len;
  crc ^= -1;
  for (let i = pos; i < end; i++)
    crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
  return crc ^ -1;
}, crc32_1 = crc32, messages = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
}, constants$2 = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  //Z_VERSION_ERROR: -6,
  /* compression levels */
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY: 0,
  Z_TEXT: 1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN: 2,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
}, { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = trees, {
  Z_NO_FLUSH: Z_NO_FLUSH$2,
  Z_PARTIAL_FLUSH,
  Z_FULL_FLUSH: Z_FULL_FLUSH$1,
  Z_FINISH: Z_FINISH$3,
  Z_BLOCK: Z_BLOCK$1,
  Z_OK: Z_OK$3,
  Z_STREAM_END: Z_STREAM_END$3,
  Z_STREAM_ERROR: Z_STREAM_ERROR$2,
  Z_DATA_ERROR: Z_DATA_ERROR$2,
  Z_BUF_ERROR: Z_BUF_ERROR$1,
  Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1,
  Z_FILTERED,
  Z_HUFFMAN_ONLY,
  Z_RLE,
  Z_FIXED,
  Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1,
  Z_UNKNOWN,
  Z_DEFLATED: Z_DEFLATED$2
} = constants$2, MAX_MEM_LEVEL = 9, MAX_WBITS$1 = 15, DEF_MEM_LEVEL = 8, LENGTH_CODES = 29, LITERALS = 256, L_CODES = LITERALS + 1 + LENGTH_CODES, D_CODES = 30, BL_CODES = 19, HEAP_SIZE = 2 * L_CODES + 1, MAX_BITS = 15, MIN_MATCH = 3, MAX_MATCH = 258, MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1, PRESET_DICT = 32, INIT_STATE = 42, GZIP_STATE = 57, EXTRA_STATE = 69, NAME_STATE = 73, COMMENT_STATE = 91, HCRC_STATE = 103, BUSY_STATE = 113, FINISH_STATE = 666, BS_NEED_MORE = 1, BS_BLOCK_DONE = 2, BS_FINISH_STARTED = 3, BS_FINISH_DONE = 4, OS_CODE = 3, err2 = (strm, errorCode) => (strm.msg = messages[errorCode], errorCode), rank = (f) => f * 2 - (f > 4 ? 9 : 0), zero = (buf) => {
  let len = buf.length;
  for (; --len >= 0; )
    buf[len] = 0;
}, slide_hash = (s) => {
  let n, m, p, wsize = s.w_size;
  n = s.hash_size, p = n;
  do
    m = s.head[--p], s.head[p] = m >= wsize ? m - wsize : 0;
  while (--n);
  n = wsize, p = n;
  do
    m = s.prev[--p], s.prev[p] = m >= wsize ? m - wsize : 0;
  while (--n);
}, HASH_ZLIB = (s, prev, data) => (prev << s.hash_shift ^ data) & s.hash_mask, HASH = HASH_ZLIB, flush_pending = (strm) => {
  let s = strm.state, len = s.pending;
  len > strm.avail_out && (len = strm.avail_out), len !== 0 && (strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out), strm.next_out += len, s.pending_out += len, strm.total_out += len, strm.avail_out -= len, s.pending -= len, s.pending === 0 && (s.pending_out = 0));
}, flush_block_only = (s, last) => {
  _tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last), s.block_start = s.strstart, flush_pending(s.strm);
}, put_byte = (s, b) => {
  s.pending_buf[s.pending++] = b;
}, putShortMSB = (s, b) => {
  s.pending_buf[s.pending++] = b >>> 8 & 255, s.pending_buf[s.pending++] = b & 255;
}, read_buf = (strm, buf, start, size) => {
  let len = strm.avail_in;
  return len > size && (len = size), len === 0 ? 0 : (strm.avail_in -= len, buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start), strm.state.wrap === 1 ? strm.adler = adler32_1(strm.adler, buf, len, start) : strm.state.wrap === 2 && (strm.adler = crc32_1(strm.adler, buf, len, start)), strm.next_in += len, strm.total_in += len, len);
}, longest_match = (s, cur_match) => {
  let chain_length = s.max_chain_length, scan = s.strstart, match, len, best_len = s.prev_length, nice_match = s.nice_match, limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0, _win = s.window, wmask = s.w_mask, prev = s.prev, strend = s.strstart + MAX_MATCH, scan_end1 = _win[scan + best_len - 1], scan_end = _win[scan + best_len];
  s.prev_length >= s.good_match && (chain_length >>= 2), nice_match > s.lookahead && (nice_match = s.lookahead);
  do
    if (match = cur_match, !(_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1])) {
      scan += 2, match++;
      do
        ;
      while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
      if (len = MAX_MATCH - (strend - scan), scan = strend - MAX_MATCH, len > best_len) {
        if (s.match_start = cur_match, best_len = len, len >= nice_match)
          break;
        scan_end1 = _win[scan + best_len - 1], scan_end = _win[scan + best_len];
      }
    }
  while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
  return best_len <= s.lookahead ? best_len : s.lookahead;
}, fill_window = (s) => {
  let _w_size = s.w_size, n, more, str;
  do {
    if (more = s.window_size - s.lookahead - s.strstart, s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD) && (s.window.set(s.window.subarray(_w_size, _w_size + _w_size - more), 0), s.match_start -= _w_size, s.strstart -= _w_size, s.block_start -= _w_size, s.insert > s.strstart && (s.insert = s.strstart), slide_hash(s), more += _w_size), s.strm.avail_in === 0)
      break;
    if (n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more), s.lookahead += n, s.lookahead + s.insert >= MIN_MATCH)
      for (str = s.strstart - s.insert, s.ins_h = s.window[str], s.ins_h = HASH(s, s.ins_h, s.window[str + 1]); s.insert && (s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]), s.prev[str & s.w_mask] = s.head[s.ins_h], s.head[s.ins_h] = str, str++, s.insert--, !(s.lookahead + s.insert < MIN_MATCH)); )
        ;
  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
}, deflate_stored = (s, flush) => {
  let min_block = s.pending_buf_size - 5 > s.w_size ? s.w_size : s.pending_buf_size - 5, len, left, have, last = 0, used = s.strm.avail_in;
  do {
    if (len = 65535, have = s.bi_valid + 42 >> 3, s.strm.avail_out < have || (have = s.strm.avail_out - have, left = s.strstart - s.block_start, len > left + s.strm.avail_in && (len = left + s.strm.avail_in), len > have && (len = have), len < min_block && (len === 0 && flush !== Z_FINISH$3 || flush === Z_NO_FLUSH$2 || len !== left + s.strm.avail_in)))
      break;
    last = flush === Z_FINISH$3 && len === left + s.strm.avail_in ? 1 : 0, _tr_stored_block(s, 0, 0, last), s.pending_buf[s.pending - 4] = len, s.pending_buf[s.pending - 3] = len >> 8, s.pending_buf[s.pending - 2] = ~len, s.pending_buf[s.pending - 1] = ~len >> 8, flush_pending(s.strm), left && (left > len && (left = len), s.strm.output.set(s.window.subarray(s.block_start, s.block_start + left), s.strm.next_out), s.strm.next_out += left, s.strm.avail_out -= left, s.strm.total_out += left, s.block_start += left, len -= left), len && (read_buf(s.strm, s.strm.output, s.strm.next_out, len), s.strm.next_out += len, s.strm.avail_out -= len, s.strm.total_out += len);
  } while (last === 0);
  return used -= s.strm.avail_in, used && (used >= s.w_size ? (s.matches = 2, s.window.set(s.strm.input.subarray(s.strm.next_in - s.w_size, s.strm.next_in), 0), s.strstart = s.w_size, s.insert = s.strstart) : (s.window_size - s.strstart <= used && (s.strstart -= s.w_size, s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0), s.matches < 2 && s.matches++, s.insert > s.strstart && (s.insert = s.strstart)), s.window.set(s.strm.input.subarray(s.strm.next_in - used, s.strm.next_in), s.strstart), s.strstart += used, s.insert += used > s.w_size - s.insert ? s.w_size - s.insert : used), s.block_start = s.strstart), s.high_water < s.strstart && (s.high_water = s.strstart), last ? BS_FINISH_DONE : flush !== Z_NO_FLUSH$2 && flush !== Z_FINISH$3 && s.strm.avail_in === 0 && s.strstart === s.block_start ? BS_BLOCK_DONE : (have = s.window_size - s.strstart, s.strm.avail_in > have && s.block_start >= s.w_size && (s.block_start -= s.w_size, s.strstart -= s.w_size, s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0), s.matches < 2 && s.matches++, have += s.w_size, s.insert > s.strstart && (s.insert = s.strstart)), have > s.strm.avail_in && (have = s.strm.avail_in), have && (read_buf(s.strm, s.window, s.strstart, have), s.strstart += have, s.insert += have > s.w_size - s.insert ? s.w_size - s.insert : have), s.high_water < s.strstart && (s.high_water = s.strstart), have = s.bi_valid + 42 >> 3, have = s.pending_buf_size - have > 65535 ? 65535 : s.pending_buf_size - have, min_block = have > s.w_size ? s.w_size : have, left = s.strstart - s.block_start, (left >= min_block || (left || flush === Z_FINISH$3) && flush !== Z_NO_FLUSH$2 && s.strm.avail_in === 0 && left <= have) && (len = left > have ? have : left, last = flush === Z_FINISH$3 && s.strm.avail_in === 0 && len === left ? 1 : 0, _tr_stored_block(s, s.block_start, len, last), s.block_start += len, flush_pending(s.strm)), last ? BS_FINISH_STARTED : BS_NEED_MORE);
}, deflate_fast = (s, flush) => {
  let hash_head, bflush;
  for (; ; ) {
    if (s.lookahead < MIN_LOOKAHEAD) {
      if (fill_window(s), s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2)
        return BS_NEED_MORE;
      if (s.lookahead === 0)
        break;
    }
    if (hash_head = 0, s.lookahead >= MIN_MATCH && (s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]), hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h], s.head[s.ins_h] = s.strstart), hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD && (s.match_length = longest_match(s, hash_head)), s.match_length >= MIN_MATCH)
      if (bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH), s.lookahead -= s.match_length, s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
        s.match_length--;
        do
          s.strstart++, s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]), hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h], s.head[s.ins_h] = s.strstart;
        while (--s.match_length !== 0);
        s.strstart++;
      } else
        s.strstart += s.match_length, s.match_length = 0, s.ins_h = s.window[s.strstart], s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);
    else
      bflush = _tr_tally(s, 0, s.window[s.strstart]), s.lookahead--, s.strstart++;
    if (bflush && (flush_block_only(s, !1), s.strm.avail_out === 0))
      return BS_NEED_MORE;
  }
  return s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1, flush === Z_FINISH$3 ? (flush_block_only(s, !0), s.strm.avail_out === 0 ? BS_FINISH_STARTED : BS_FINISH_DONE) : s.sym_next && (flush_block_only(s, !1), s.strm.avail_out === 0) ? BS_NEED_MORE : BS_BLOCK_DONE;
}, deflate_slow = (s, flush) => {
  let hash_head, bflush, max_insert;
  for (; ; ) {
    if (s.lookahead < MIN_LOOKAHEAD) {
      if (fill_window(s), s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2)
        return BS_NEED_MORE;
      if (s.lookahead === 0)
        break;
    }
    if (hash_head = 0, s.lookahead >= MIN_MATCH && (s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]), hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h], s.head[s.ins_h] = s.strstart), s.prev_length = s.match_length, s.prev_match = s.match_start, s.match_length = MIN_MATCH - 1, hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD && (s.match_length = longest_match(s, hash_head), s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096) && (s.match_length = MIN_MATCH - 1)), s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH, bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH), s.lookahead -= s.prev_length - 1, s.prev_length -= 2;
      do
        ++s.strstart <= max_insert && (s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]), hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h], s.head[s.ins_h] = s.strstart);
      while (--s.prev_length !== 0);
      if (s.match_available = 0, s.match_length = MIN_MATCH - 1, s.strstart++, bflush && (flush_block_only(s, !1), s.strm.avail_out === 0))
        return BS_NEED_MORE;
    } else if (s.match_available) {
      if (bflush = _tr_tally(s, 0, s.window[s.strstart - 1]), bflush && flush_block_only(s, !1), s.strstart++, s.lookahead--, s.strm.avail_out === 0)
        return BS_NEED_MORE;
    } else
      s.match_available = 1, s.strstart++, s.lookahead--;
  }
  return s.match_available && (bflush = _tr_tally(s, 0, s.window[s.strstart - 1]), s.match_available = 0), s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1, flush === Z_FINISH$3 ? (flush_block_only(s, !0), s.strm.avail_out === 0 ? BS_FINISH_STARTED : BS_FINISH_DONE) : s.sym_next && (flush_block_only(s, !1), s.strm.avail_out === 0) ? BS_NEED_MORE : BS_BLOCK_DONE;
}, deflate_rle = (s, flush) => {
  let bflush, prev, scan, strend, _win = s.window;
  for (; ; ) {
    if (s.lookahead <= MAX_MATCH) {
      if (fill_window(s), s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$2)
        return BS_NEED_MORE;
      if (s.lookahead === 0)
        break;
    }
    if (s.match_length = 0, s.lookahead >= MIN_MATCH && s.strstart > 0 && (scan = s.strstart - 1, prev = _win[scan], prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan])) {
      strend = s.strstart + MAX_MATCH;
      do
        ;
      while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
      s.match_length = MAX_MATCH - (strend - scan), s.match_length > s.lookahead && (s.match_length = s.lookahead);
    }
    if (s.match_length >= MIN_MATCH ? (bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH), s.lookahead -= s.match_length, s.strstart += s.match_length, s.match_length = 0) : (bflush = _tr_tally(s, 0, s.window[s.strstart]), s.lookahead--, s.strstart++), bflush && (flush_block_only(s, !1), s.strm.avail_out === 0))
      return BS_NEED_MORE;
  }
  return s.insert = 0, flush === Z_FINISH$3 ? (flush_block_only(s, !0), s.strm.avail_out === 0 ? BS_FINISH_STARTED : BS_FINISH_DONE) : s.sym_next && (flush_block_only(s, !1), s.strm.avail_out === 0) ? BS_NEED_MORE : BS_BLOCK_DONE;
}, deflate_huff = (s, flush) => {
  let bflush;
  for (; ; ) {
    if (s.lookahead === 0 && (fill_window(s), s.lookahead === 0)) {
      if (flush === Z_NO_FLUSH$2)
        return BS_NEED_MORE;
      break;
    }
    if (s.match_length = 0, bflush = _tr_tally(s, 0, s.window[s.strstart]), s.lookahead--, s.strstart++, bflush && (flush_block_only(s, !1), s.strm.avail_out === 0))
      return BS_NEED_MORE;
  }
  return s.insert = 0, flush === Z_FINISH$3 ? (flush_block_only(s, !0), s.strm.avail_out === 0 ? BS_FINISH_STARTED : BS_FINISH_DONE) : s.sym_next && (flush_block_only(s, !1), s.strm.avail_out === 0) ? BS_NEED_MORE : BS_BLOCK_DONE;
};
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length, this.max_lazy = max_lazy, this.nice_length = nice_length, this.max_chain = max_chain, this.func = func;
}
var configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),
  /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),
  /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),
  /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),
  /* 3 */
  new Config(4, 4, 16, 16, deflate_slow),
  /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),
  /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),
  /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),
  /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),
  /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)
  /* 9 max compression */
], lm_init = (s) => {
  s.window_size = 2 * s.w_size, zero(s.head), s.max_lazy_match = configuration_table[s.level].max_lazy, s.good_match = configuration_table[s.level].good_length, s.nice_match = configuration_table[s.level].nice_length, s.max_chain_length = configuration_table[s.level].max_chain, s.strstart = 0, s.block_start = 0, s.lookahead = 0, s.insert = 0, s.match_length = s.prev_length = MIN_MATCH - 1, s.match_available = 0, s.ins_h = 0;
};
function DeflateState() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Z_DEFLATED$2, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(HEAP_SIZE * 2), this.dyn_dtree = new Uint16Array((2 * D_CODES + 1) * 2), this.bl_tree = new Uint16Array((2 * BL_CODES + 1) * 2), zero(this.dyn_ltree), zero(this.dyn_dtree), zero(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(MAX_BITS + 1), this.heap = new Uint16Array(2 * L_CODES + 1), zero(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * L_CODES + 1), zero(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
var deflateStateCheck = (strm) => {
  if (!strm)
    return 1;
  let s = strm.state;
  return !s || s.strm !== strm || s.status !== INIT_STATE && //#ifdef GZIP
  s.status !== GZIP_STATE && //#endif
  s.status !== EXTRA_STATE && s.status !== NAME_STATE && s.status !== COMMENT_STATE && s.status !== HCRC_STATE && s.status !== BUSY_STATE && s.status !== FINISH_STATE ? 1 : 0;
}, deflateResetKeep = (strm) => {
  if (deflateStateCheck(strm))
    return err2(strm, Z_STREAM_ERROR$2);
  strm.total_in = strm.total_out = 0, strm.data_type = Z_UNKNOWN;
  let s = strm.state;
  return s.pending = 0, s.pending_out = 0, s.wrap < 0 && (s.wrap = -s.wrap), s.status = //#ifdef GZIP
  s.wrap === 2 ? GZIP_STATE : (
    //#endif
    s.wrap ? INIT_STATE : BUSY_STATE
  ), strm.adler = s.wrap === 2 ? 0 : 1, s.last_flush = -2, _tr_init(s), Z_OK$3;
}, deflateReset = (strm) => {
  let ret = deflateResetKeep(strm);
  return ret === Z_OK$3 && lm_init(strm.state), ret;
}, deflateSetHeader = (strm, head) => deflateStateCheck(strm) || strm.state.wrap !== 2 ? Z_STREAM_ERROR$2 : (strm.state.gzhead = head, Z_OK$3), deflateInit2 = (strm, level, method, windowBits, memLevel, strategy) => {
  if (!strm)
    return Z_STREAM_ERROR$2;
  let wrap = 1;
  if (level === Z_DEFAULT_COMPRESSION$1 && (level = 6), windowBits < 0 ? (wrap = 0, windowBits = -windowBits) : windowBits > 15 && (wrap = 2, windowBits -= 16), memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED || windowBits === 8 && wrap !== 1)
    return err2(strm, Z_STREAM_ERROR$2);
  windowBits === 8 && (windowBits = 9);
  let s = new DeflateState();
  return strm.state = s, s.strm = strm, s.status = INIT_STATE, s.wrap = wrap, s.gzhead = null, s.w_bits = windowBits, s.w_size = 1 << s.w_bits, s.w_mask = s.w_size - 1, s.hash_bits = memLevel + 7, s.hash_size = 1 << s.hash_bits, s.hash_mask = s.hash_size - 1, s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH), s.window = new Uint8Array(s.w_size * 2), s.head = new Uint16Array(s.hash_size), s.prev = new Uint16Array(s.w_size), s.lit_bufsize = 1 << memLevel + 6, s.pending_buf_size = s.lit_bufsize * 4, s.pending_buf = new Uint8Array(s.pending_buf_size), s.sym_buf = s.lit_bufsize, s.sym_end = (s.lit_bufsize - 1) * 3, s.level = level, s.strategy = strategy, s.method = method, deflateReset(strm);
}, deflateInit = (strm, level) => deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1), deflate$2 = (strm, flush) => {
  if (deflateStateCheck(strm) || flush > Z_BLOCK$1 || flush < 0)
    return strm ? err2(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
  let s = strm.state;
  if (!strm.output || strm.avail_in !== 0 && !strm.input || s.status === FINISH_STATE && flush !== Z_FINISH$3)
    return err2(strm, strm.avail_out === 0 ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
  let old_flush = s.last_flush;
  if (s.last_flush = flush, s.pending !== 0) {
    if (flush_pending(strm), strm.avail_out === 0)
      return s.last_flush = -1, Z_OK$3;
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH$3)
    return err2(strm, Z_BUF_ERROR$1);
  if (s.status === FINISH_STATE && strm.avail_in !== 0)
    return err2(strm, Z_BUF_ERROR$1);
  if (s.status === INIT_STATE && s.wrap === 0 && (s.status = BUSY_STATE), s.status === INIT_STATE) {
    let header = Z_DEFLATED$2 + (s.w_bits - 8 << 4) << 8, level_flags = -1;
    if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? level_flags = 0 : s.level < 6 ? level_flags = 1 : s.level === 6 ? level_flags = 2 : level_flags = 3, header |= level_flags << 6, s.strstart !== 0 && (header |= PRESET_DICT), header += 31 - header % 31, putShortMSB(s, header), s.strstart !== 0 && (putShortMSB(s, strm.adler >>> 16), putShortMSB(s, strm.adler & 65535)), strm.adler = 1, s.status = BUSY_STATE, flush_pending(strm), s.pending !== 0)
      return s.last_flush = -1, Z_OK$3;
  }
  if (s.status === GZIP_STATE) {
    if (strm.adler = 0, put_byte(s, 31), put_byte(s, 139), put_byte(s, 8), s.gzhead)
      put_byte(
        s,
        (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (s.gzhead.extra ? 4 : 0) + (s.gzhead.name ? 8 : 0) + (s.gzhead.comment ? 16 : 0)
      ), put_byte(s, s.gzhead.time & 255), put_byte(s, s.gzhead.time >> 8 & 255), put_byte(s, s.gzhead.time >> 16 & 255), put_byte(s, s.gzhead.time >> 24 & 255), put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0), put_byte(s, s.gzhead.os & 255), s.gzhead.extra && s.gzhead.extra.length && (put_byte(s, s.gzhead.extra.length & 255), put_byte(s, s.gzhead.extra.length >> 8 & 255)), s.gzhead.hcrc && (strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0)), s.gzindex = 0, s.status = EXTRA_STATE;
    else if (put_byte(s, 0), put_byte(s, 0), put_byte(s, 0), put_byte(s, 0), put_byte(s, 0), put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0), put_byte(s, OS_CODE), s.status = BUSY_STATE, flush_pending(strm), s.pending !== 0)
      return s.last_flush = -1, Z_OK$3;
  }
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra) {
      let beg = s.pending, left = (s.gzhead.extra.length & 65535) - s.gzindex;
      for (; s.pending + left > s.pending_buf_size; ) {
        let copy = s.pending_buf_size - s.pending;
        if (s.pending_buf.set(s.gzhead.extra.subarray(s.gzindex, s.gzindex + copy), s.pending), s.pending = s.pending_buf_size, s.gzhead.hcrc && s.pending > beg && (strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg)), s.gzindex += copy, flush_pending(strm), s.pending !== 0)
          return s.last_flush = -1, Z_OK$3;
        beg = 0, left -= copy;
      }
      let gzhead_extra = new Uint8Array(s.gzhead.extra);
      s.pending_buf.set(gzhead_extra.subarray(s.gzindex, s.gzindex + left), s.pending), s.pending += left, s.gzhead.hcrc && s.pending > beg && (strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg)), s.gzindex = 0;
    }
    s.status = NAME_STATE;
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name) {
      let beg = s.pending, val;
      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg && (strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg)), flush_pending(strm), s.pending !== 0)
            return s.last_flush = -1, Z_OK$3;
          beg = 0;
        }
        s.gzindex < s.gzhead.name.length ? val = s.gzhead.name.charCodeAt(s.gzindex++) & 255 : val = 0, put_byte(s, val);
      } while (val !== 0);
      s.gzhead.hcrc && s.pending > beg && (strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg)), s.gzindex = 0;
    }
    s.status = COMMENT_STATE;
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment) {
      let beg = s.pending, val;
      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg && (strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg)), flush_pending(strm), s.pending !== 0)
            return s.last_flush = -1, Z_OK$3;
          beg = 0;
        }
        s.gzindex < s.gzhead.comment.length ? val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255 : val = 0, put_byte(s, val);
      } while (val !== 0);
      s.gzhead.hcrc && s.pending > beg && (strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg));
    }
    s.status = HCRC_STATE;
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size && (flush_pending(strm), s.pending !== 0))
        return s.last_flush = -1, Z_OK$3;
      put_byte(s, strm.adler & 255), put_byte(s, strm.adler >> 8 & 255), strm.adler = 0;
    }
    if (s.status = BUSY_STATE, flush_pending(strm), s.pending !== 0)
      return s.last_flush = -1, Z_OK$3;
  }
  if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH$2 && s.status !== FINISH_STATE) {
    let bstate = s.level === 0 ? deflate_stored(s, flush) : s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
    if ((bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) && (s.status = FINISH_STATE), bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED)
      return strm.avail_out === 0 && (s.last_flush = -1), Z_OK$3;
    if (bstate === BS_BLOCK_DONE && (flush === Z_PARTIAL_FLUSH ? _tr_align(s) : flush !== Z_BLOCK$1 && (_tr_stored_block(s, 0, 0, !1), flush === Z_FULL_FLUSH$1 && (zero(s.head), s.lookahead === 0 && (s.strstart = 0, s.block_start = 0, s.insert = 0))), flush_pending(strm), strm.avail_out === 0))
      return s.last_flush = -1, Z_OK$3;
  }
  return flush !== Z_FINISH$3 ? Z_OK$3 : s.wrap <= 0 ? Z_STREAM_END$3 : (s.wrap === 2 ? (put_byte(s, strm.adler & 255), put_byte(s, strm.adler >> 8 & 255), put_byte(s, strm.adler >> 16 & 255), put_byte(s, strm.adler >> 24 & 255), put_byte(s, strm.total_in & 255), put_byte(s, strm.total_in >> 8 & 255), put_byte(s, strm.total_in >> 16 & 255), put_byte(s, strm.total_in >> 24 & 255)) : (putShortMSB(s, strm.adler >>> 16), putShortMSB(s, strm.adler & 65535)), flush_pending(strm), s.wrap > 0 && (s.wrap = -s.wrap), s.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3);
}, deflateEnd = (strm) => {
  if (deflateStateCheck(strm))
    return Z_STREAM_ERROR$2;
  let status = strm.state.status;
  return strm.state = null, status === BUSY_STATE ? err2(strm, Z_DATA_ERROR$2) : Z_OK$3;
}, deflateSetDictionary = (strm, dictionary) => {
  let dictLength = dictionary.length;
  if (deflateStateCheck(strm))
    return Z_STREAM_ERROR$2;
  let s = strm.state, wrap = s.wrap;
  if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead)
    return Z_STREAM_ERROR$2;
  if (wrap === 1 && (strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0)), s.wrap = 0, dictLength >= s.w_size) {
    wrap === 0 && (zero(s.head), s.strstart = 0, s.block_start = 0, s.insert = 0);
    let tmpDict = new Uint8Array(s.w_size);
    tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0), dictionary = tmpDict, dictLength = s.w_size;
  }
  let avail = strm.avail_in, next = strm.next_in, input = strm.input;
  for (strm.avail_in = dictLength, strm.next_in = 0, strm.input = dictionary, fill_window(s); s.lookahead >= MIN_MATCH; ) {
    let str = s.strstart, n = s.lookahead - (MIN_MATCH - 1);
    do
      s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]), s.prev[str & s.w_mask] = s.head[s.ins_h], s.head[s.ins_h] = str, str++;
    while (--n);
    s.strstart = str, s.lookahead = MIN_MATCH - 1, fill_window(s);
  }
  return s.strstart += s.lookahead, s.block_start = s.strstart, s.insert = s.lookahead, s.lookahead = 0, s.match_length = s.prev_length = MIN_MATCH - 1, s.match_available = 0, strm.next_in = next, strm.input = input, strm.avail_in = avail, s.wrap = wrap, Z_OK$3;
}, deflateInit_1 = deflateInit, deflateInit2_1 = deflateInit2, deflateReset_1 = deflateReset, deflateResetKeep_1 = deflateResetKeep, deflateSetHeader_1 = deflateSetHeader, deflate_2$1 = deflate$2, deflateEnd_1 = deflateEnd, deflateSetDictionary_1 = deflateSetDictionary, deflateInfo = "pako deflate (from Nodeca project)", deflate_1$2 = {
  deflateInit: deflateInit_1,
  deflateInit2: deflateInit2_1,
  deflateReset: deflateReset_1,
  deflateResetKeep: deflateResetKeep_1,
  deflateSetHeader: deflateSetHeader_1,
  deflate: deflate_2$1,
  deflateEnd: deflateEnd_1,
  deflateSetDictionary: deflateSetDictionary_1,
  deflateInfo
}, _has = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key), assign = function(obj) {
  let sources = Array.prototype.slice.call(arguments, 1);
  for (; sources.length; ) {
    let source = sources.shift();
    if (source) {
      if (typeof source != "object")
        throw new TypeError(source + "must be non-object");
      for (let p in source)
        _has(source, p) && (obj[p] = source[p]);
    }
  }
  return obj;
}, flattenChunks = (chunks) => {
  let len = 0;
  for (let i = 0, l = chunks.length; i < l; i++)
    len += chunks[i].length;
  let result = new Uint8Array(len);
  for (let i = 0, pos = 0, l = chunks.length; i < l; i++) {
    let chunk = chunks[i];
    result.set(chunk, pos), pos += chunk.length;
  }
  return result;
}, common = {
  assign,
  flattenChunks
}, STR_APPLY_UIA_OK = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  STR_APPLY_UIA_OK = !1;
}
var _utf8len = new Uint8Array(256);
for (let q = 0; q < 256; q++)
  _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
_utf8len[254] = _utf8len[254] = 1;
var string2buf = (str) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(str);
  let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
  for (m_pos = 0; m_pos < str_len; m_pos++)
    c = str.charCodeAt(m_pos), (c & 64512) === 55296 && m_pos + 1 < str_len && (c2 = str.charCodeAt(m_pos + 1), (c2 & 64512) === 56320 && (c = 65536 + (c - 55296 << 10) + (c2 - 56320), m_pos++)), buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
  for (buf = new Uint8Array(buf_len), i = 0, m_pos = 0; i < buf_len; m_pos++)
    c = str.charCodeAt(m_pos), (c & 64512) === 55296 && m_pos + 1 < str_len && (c2 = str.charCodeAt(m_pos + 1), (c2 & 64512) === 56320 && (c = 65536 + (c - 55296 << 10) + (c2 - 56320), m_pos++)), c < 128 ? buf[i++] = c : c < 2048 ? (buf[i++] = 192 | c >>> 6, buf[i++] = 128 | c & 63) : c < 65536 ? (buf[i++] = 224 | c >>> 12, buf[i++] = 128 | c >>> 6 & 63, buf[i++] = 128 | c & 63) : (buf[i++] = 240 | c >>> 18, buf[i++] = 128 | c >>> 12 & 63, buf[i++] = 128 | c >>> 6 & 63, buf[i++] = 128 | c & 63);
  return buf;
}, buf2binstring = (buf, len) => {
  if (len < 65534 && buf.subarray && STR_APPLY_UIA_OK)
    return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
  let result = "";
  for (let i = 0; i < len; i++)
    result += String.fromCharCode(buf[i]);
  return result;
}, buf2string = (buf, max2) => {
  let len = max2 || buf.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(buf.subarray(0, max2));
  let i, out, utf16buf = new Array(len * 2);
  for (out = 0, i = 0; i < len; ) {
    let c = buf[i++];
    if (c < 128) {
      utf16buf[out++] = c;
      continue;
    }
    let c_len = _utf8len[c];
    if (c_len > 4) {
      utf16buf[out++] = 65533, i += c_len - 1;
      continue;
    }
    for (c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7; c_len > 1 && i < len; )
      c = c << 6 | buf[i++] & 63, c_len--;
    if (c_len > 1) {
      utf16buf[out++] = 65533;
      continue;
    }
    c < 65536 ? utf16buf[out++] = c : (c -= 65536, utf16buf[out++] = 55296 | c >> 10 & 1023, utf16buf[out++] = 56320 | c & 1023);
  }
  return buf2binstring(utf16buf, out);
}, utf8border = (buf, max2) => {
  max2 = max2 || buf.length, max2 > buf.length && (max2 = buf.length);
  let pos = max2 - 1;
  for (; pos >= 0 && (buf[pos] & 192) === 128; )
    pos--;
  return pos < 0 || pos === 0 ? max2 : pos + _utf8len[buf[pos]] > max2 ? pos : max2;
}, strings = {
  string2buf,
  buf2string,
  utf8border
};
function ZStream() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var zstream = ZStream, toString$1 = Object.prototype.toString, {
  Z_NO_FLUSH: Z_NO_FLUSH$1,
  Z_SYNC_FLUSH,
  Z_FULL_FLUSH,
  Z_FINISH: Z_FINISH$2,
  Z_OK: Z_OK$2,
  Z_STREAM_END: Z_STREAM_END$2,
  Z_DEFAULT_COMPRESSION,
  Z_DEFAULT_STRATEGY,
  Z_DEFLATED: Z_DEFLATED$1
} = constants$2;
function Deflate$1(options) {
  this.options = common.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED$1,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY
  }, options || {});
  let opt = this.options;
  opt.raw && opt.windowBits > 0 ? opt.windowBits = -opt.windowBits : opt.gzip && opt.windowBits > 0 && opt.windowBits < 16 && (opt.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new zstream(), this.strm.avail_out = 0;
  let status = deflate_1$2.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );
  if (status !== Z_OK$2)
    throw new Error(messages[status]);
  if (opt.header && deflate_1$2.deflateSetHeader(this.strm, opt.header), opt.dictionary) {
    let dict;
    if (typeof opt.dictionary == "string" ? dict = strings.string2buf(opt.dictionary) : toString$1.call(opt.dictionary) === "[object ArrayBuffer]" ? dict = new Uint8Array(opt.dictionary) : dict = opt.dictionary, status = deflate_1$2.deflateSetDictionary(this.strm, dict), status !== Z_OK$2)
      throw new Error(messages[status]);
    this._dict_set = !0;
  }
}
Deflate$1.prototype.push = function(data, flush_mode) {
  let strm = this.strm, chunkSize = this.options.chunkSize, status, _flush_mode;
  if (this.ended)
    return !1;
  for (flush_mode === ~~flush_mode ? _flush_mode = flush_mode : _flush_mode = flush_mode === !0 ? Z_FINISH$2 : Z_NO_FLUSH$1, typeof data == "string" ? strm.input = strings.string2buf(data) : toString$1.call(data) === "[object ArrayBuffer]" ? strm.input = new Uint8Array(data) : strm.input = data, strm.next_in = 0, strm.avail_in = strm.input.length; ; ) {
    if (strm.avail_out === 0 && (strm.output = new Uint8Array(chunkSize), strm.next_out = 0, strm.avail_out = chunkSize), (_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
      this.onData(strm.output.subarray(0, strm.next_out)), strm.avail_out = 0;
      continue;
    }
    if (status = deflate_1$2.deflate(strm, _flush_mode), status === Z_STREAM_END$2)
      return strm.next_out > 0 && this.onData(strm.output.subarray(0, strm.next_out)), status = deflate_1$2.deflateEnd(this.strm), this.onEnd(status), this.ended = !0, status === Z_OK$2;
    if (strm.avail_out === 0) {
      this.onData(strm.output);
      continue;
    }
    if (_flush_mode > 0 && strm.next_out > 0) {
      this.onData(strm.output.subarray(0, strm.next_out)), strm.avail_out = 0;
      continue;
    }
    if (strm.avail_in === 0) break;
  }
  return !0;
};
Deflate$1.prototype.onData = function(chunk) {
  this.chunks.push(chunk);
};
Deflate$1.prototype.onEnd = function(status) {
  status === Z_OK$2 && (this.result = common.flattenChunks(this.chunks)), this.chunks = [], this.err = status, this.msg = this.strm.msg;
};
function deflate$1(input, options) {
  let deflator = new Deflate$1(options);
  if (deflator.push(input, !0), deflator.err)
    throw deflator.msg || messages[deflator.err];
  return deflator.result;
}
function deflateRaw$1(input, options) {
  return options = options || {}, options.raw = !0, deflate$1(input, options);
}
function gzip$1(input, options) {
  return options = options || {}, options.gzip = !0, deflate$1(input, options);
}
var Deflate_1$1 = Deflate$1, deflate_2 = deflate$1, deflateRaw_1$1 = deflateRaw$1, gzip_1$1 = gzip$1, constants$1 = constants$2, deflate_1$1 = {
  Deflate: Deflate_1$1,
  deflate: deflate_2,
  deflateRaw: deflateRaw_1$1,
  gzip: gzip_1$1,
  constants: constants$1
}, BAD$1 = 16209, TYPE$1 = 16191, inffast = function(strm, start) {
  let _in, last, _out, beg, end, dmax, wsize, whave, wnext, s_window, hold, bits2, lcode, dcode, lmask, dmask, here, op, len, dist, from, from_source, input, output, state = strm.state;
  _in = strm.next_in, input = strm.input, last = _in + (strm.avail_in - 5), _out = strm.next_out, output = strm.output, beg = _out - (start - strm.avail_out), end = _out + (strm.avail_out - 257), dmax = state.dmax, wsize = state.wsize, whave = state.whave, wnext = state.wnext, s_window = state.window, hold = state.hold, bits2 = state.bits, lcode = state.lencode, dcode = state.distcode, lmask = (1 << state.lenbits) - 1, dmask = (1 << state.distbits) - 1;
  top:
    do {
      bits2 < 15 && (hold += input[_in++] << bits2, bits2 += 8, hold += input[_in++] << bits2, bits2 += 8), here = lcode[hold & lmask];
      dolen:
        for (; ; ) {
          if (op = here >>> 24, hold >>>= op, bits2 -= op, op = here >>> 16 & 255, op === 0)
            output[_out++] = here & 65535;
          else if (op & 16) {
            len = here & 65535, op &= 15, op && (bits2 < op && (hold += input[_in++] << bits2, bits2 += 8), len += hold & (1 << op) - 1, hold >>>= op, bits2 -= op), bits2 < 15 && (hold += input[_in++] << bits2, bits2 += 8, hold += input[_in++] << bits2, bits2 += 8), here = dcode[hold & dmask];
            dodist:
              for (; ; ) {
                if (op = here >>> 24, hold >>>= op, bits2 -= op, op = here >>> 16 & 255, op & 16) {
                  if (dist = here & 65535, op &= 15, bits2 < op && (hold += input[_in++] << bits2, bits2 += 8, bits2 < op && (hold += input[_in++] << bits2, bits2 += 8)), dist += hold & (1 << op) - 1, dist > dmax) {
                    strm.msg = "invalid distance too far back", state.mode = BAD$1;
                    break top;
                  }
                  if (hold >>>= op, bits2 -= op, op = _out - beg, dist > op) {
                    if (op = dist - op, op > whave && state.sane) {
                      strm.msg = "invalid distance too far back", state.mode = BAD$1;
                      break top;
                    }
                    if (from = 0, from_source = s_window, wnext === 0) {
                      if (from += wsize - op, op < len) {
                        len -= op;
                        do
                          output[_out++] = s_window[from++];
                        while (--op);
                        from = _out - dist, from_source = output;
                      }
                    } else if (wnext < op) {
                      if (from += wsize + wnext - op, op -= wnext, op < len) {
                        len -= op;
                        do
                          output[_out++] = s_window[from++];
                        while (--op);
                        if (from = 0, wnext < len) {
                          op = wnext, len -= op;
                          do
                            output[_out++] = s_window[from++];
                          while (--op);
                          from = _out - dist, from_source = output;
                        }
                      }
                    } else if (from += wnext - op, op < len) {
                      len -= op;
                      do
                        output[_out++] = s_window[from++];
                      while (--op);
                      from = _out - dist, from_source = output;
                    }
                    for (; len > 2; )
                      output[_out++] = from_source[from++], output[_out++] = from_source[from++], output[_out++] = from_source[from++], len -= 3;
                    len && (output[_out++] = from_source[from++], len > 1 && (output[_out++] = from_source[from++]));
                  } else {
                    from = _out - dist;
                    do
                      output[_out++] = output[from++], output[_out++] = output[from++], output[_out++] = output[from++], len -= 3;
                    while (len > 2);
                    len && (output[_out++] = output[from++], len > 1 && (output[_out++] = output[from++]));
                  }
                } else if (op & 64) {
                  strm.msg = "invalid distance code", state.mode = BAD$1;
                  break top;
                } else {
                  here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                  continue dodist;
                }
                break;
              }
          } else if (op & 64)
            if (op & 32) {
              state.mode = TYPE$1;
              break top;
            } else {
              strm.msg = "invalid literal/length code", state.mode = BAD$1;
              break top;
            }
          else {
            here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
            continue dolen;
          }
          break;
        }
    } while (_in < last && _out < end);
  len = bits2 >> 3, _in -= len, bits2 -= len << 3, hold &= (1 << bits2) - 1, strm.next_in = _in, strm.next_out = _out, strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last), strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end), state.hold = hold, state.bits = bits2;
}, MAXBITS = 15, ENOUGH_LENS$1 = 852, ENOUGH_DISTS$1 = 592, CODES$1 = 0, LENS$1 = 1, DISTS$1 = 2, lbase = new Uint16Array([
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), lext = new Uint8Array([
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
]), dbase = new Uint16Array([
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]), dext = new Uint8Array([
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts) => {
  let bits2 = opts.bits, len = 0, sym = 0, min = 0, max2 = 0, root = 0, curr = 0, drop = 0, left = 0, used = 0, huff = 0, incr, fill, low, mask, next, base = null, match, count = new Uint16Array(MAXBITS + 1), offs = new Uint16Array(MAXBITS + 1), extra = null, here_bits, here_op, here_val;
  for (len = 0; len <= MAXBITS; len++)
    count[len] = 0;
  for (sym = 0; sym < codes; sym++)
    count[lens[lens_index + sym]]++;
  for (root = bits2, max2 = MAXBITS; max2 >= 1 && count[max2] === 0; max2--)
    ;
  if (root > max2 && (root = max2), max2 === 0)
    return table[table_index++] = 1 << 24 | 64 << 16 | 0, table[table_index++] = 1 << 24 | 64 << 16 | 0, opts.bits = 1, 0;
  for (min = 1; min < max2 && count[min] === 0; min++)
    ;
  for (root < min && (root = min), left = 1, len = 1; len <= MAXBITS; len++)
    if (left <<= 1, left -= count[len], left < 0)
      return -1;
  if (left > 0 && (type === CODES$1 || max2 !== 1))
    return -1;
  for (offs[1] = 0, len = 1; len < MAXBITS; len++)
    offs[len + 1] = offs[len] + count[len];
  for (sym = 0; sym < codes; sym++)
    lens[lens_index + sym] !== 0 && (work[offs[lens[lens_index + sym]]++] = sym);
  if (type === CODES$1 ? (base = extra = work, match = 20) : type === LENS$1 ? (base = lbase, extra = lext, match = 257) : (base = dbase, extra = dext, match = 0), huff = 0, sym = 0, len = min, next = table_index, curr = root, drop = 0, low = -1, used = 1 << root, mask = used - 1, type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1)
    return 1;
  for (; ; ) {
    here_bits = len - drop, work[sym] + 1 < match ? (here_op = 0, here_val = work[sym]) : work[sym] >= match ? (here_op = extra[work[sym] - match], here_val = base[work[sym] - match]) : (here_op = 96, here_val = 0), incr = 1 << len - drop, fill = 1 << curr, min = fill;
    do
      fill -= incr, table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
    while (fill !== 0);
    for (incr = 1 << len - 1; huff & incr; )
      incr >>= 1;
    if (incr !== 0 ? (huff &= incr - 1, huff += incr) : huff = 0, sym++, --count[len] === 0) {
      if (len === max2)
        break;
      len = lens[lens_index + work[sym]];
    }
    if (len > root && (huff & mask) !== low) {
      for (drop === 0 && (drop = root), next += min, curr = len - drop, left = 1 << curr; curr + drop < max2 && (left -= count[curr + drop], !(left <= 0)); )
        curr++, left <<= 1;
      if (used += 1 << curr, type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1)
        return 1;
      low = huff & mask, table[low] = root << 24 | curr << 16 | next - table_index | 0;
    }
  }
  return huff !== 0 && (table[next + huff] = len - drop << 24 | 64 << 16 | 0), opts.bits = root, 0;
}, inftrees = inflate_table, CODES = 0, LENS = 1, DISTS = 2, {
  Z_FINISH: Z_FINISH$1,
  Z_BLOCK,
  Z_TREES,
  Z_OK: Z_OK$1,
  Z_STREAM_END: Z_STREAM_END$1,
  Z_NEED_DICT: Z_NEED_DICT$1,
  Z_STREAM_ERROR: Z_STREAM_ERROR$1,
  Z_DATA_ERROR: Z_DATA_ERROR$1,
  Z_MEM_ERROR: Z_MEM_ERROR$1,
  Z_BUF_ERROR,
  Z_DEFLATED
} = constants$2, HEAD = 16180, FLAGS = 16181, TIME = 16182, OS = 16183, EXLEN = 16184, EXTRA = 16185, NAME = 16186, COMMENT = 16187, HCRC = 16188, DICTID = 16189, DICT = 16190, TYPE = 16191, TYPEDO = 16192, STORED = 16193, COPY_ = 16194, COPY = 16195, TABLE = 16196, LENLENS = 16197, CODELENS = 16198, LEN_ = 16199, LEN = 16200, LENEXT = 16201, DIST = 16202, DISTEXT = 16203, MATCH = 16204, LIT = 16205, CHECK = 16206, LENGTH = 16207, DONE = 16208, BAD = 16209, MEM = 16210, SYNC = 16211, ENOUGH_LENS = 852, ENOUGH_DISTS = 592, MAX_WBITS = 15, DEF_WBITS = MAX_WBITS, zswap32 = (q) => (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
function InflateState() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
var inflateStateCheck = (strm) => {
  if (!strm)
    return 1;
  let state = strm.state;
  return !state || state.strm !== strm || state.mode < HEAD || state.mode > SYNC ? 1 : 0;
}, inflateResetKeep = (strm) => {
  if (inflateStateCheck(strm))
    return Z_STREAM_ERROR$1;
  let state = strm.state;
  return strm.total_in = strm.total_out = state.total = 0, strm.msg = "", state.wrap && (strm.adler = state.wrap & 1), state.mode = HEAD, state.last = 0, state.havedict = 0, state.flags = -1, state.dmax = 32768, state.head = null, state.hold = 0, state.bits = 0, state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS), state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS), state.sane = 1, state.back = -1, Z_OK$1;
}, inflateReset = (strm) => {
  if (inflateStateCheck(strm))
    return Z_STREAM_ERROR$1;
  let state = strm.state;
  return state.wsize = 0, state.whave = 0, state.wnext = 0, inflateResetKeep(strm);
}, inflateReset2 = (strm, windowBits) => {
  let wrap;
  if (inflateStateCheck(strm))
    return Z_STREAM_ERROR$1;
  let state = strm.state;
  return windowBits < 0 ? (wrap = 0, windowBits = -windowBits) : (wrap = (windowBits >> 4) + 5, windowBits < 48 && (windowBits &= 15)), windowBits && (windowBits < 8 || windowBits > 15) ? Z_STREAM_ERROR$1 : (state.window !== null && state.wbits !== windowBits && (state.window = null), state.wrap = wrap, state.wbits = windowBits, inflateReset(strm));
}, inflateInit2 = (strm, windowBits) => {
  if (!strm)
    return Z_STREAM_ERROR$1;
  let state = new InflateState();
  strm.state = state, state.strm = strm, state.window = null, state.mode = HEAD;
  let ret = inflateReset2(strm, windowBits);
  return ret !== Z_OK$1 && (strm.state = null), ret;
}, inflateInit = (strm) => inflateInit2(strm, DEF_WBITS), virgin = !0, lenfix, distfix, fixedtables = (state) => {
  if (virgin) {
    lenfix = new Int32Array(512), distfix = new Int32Array(32);
    let sym = 0;
    for (; sym < 144; )
      state.lens[sym++] = 8;
    for (; sym < 256; )
      state.lens[sym++] = 9;
    for (; sym < 280; )
      state.lens[sym++] = 7;
    for (; sym < 288; )
      state.lens[sym++] = 8;
    for (inftrees(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 }), sym = 0; sym < 32; )
      state.lens[sym++] = 5;
    inftrees(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 }), virgin = !1;
  }
  state.lencode = lenfix, state.lenbits = 9, state.distcode = distfix, state.distbits = 5;
}, updatewindow = (strm, src, end, copy) => {
  let dist, state = strm.state;
  return state.window === null && (state.wsize = 1 << state.wbits, state.wnext = 0, state.whave = 0, state.window = new Uint8Array(state.wsize)), copy >= state.wsize ? (state.window.set(src.subarray(end - state.wsize, end), 0), state.wnext = 0, state.whave = state.wsize) : (dist = state.wsize - state.wnext, dist > copy && (dist = copy), state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext), copy -= dist, copy ? (state.window.set(src.subarray(end - copy, end), 0), state.wnext = copy, state.whave = state.wsize) : (state.wnext += dist, state.wnext === state.wsize && (state.wnext = 0), state.whave < state.wsize && (state.whave += dist))), 0;
}, inflate$2 = (strm, flush) => {
  let state, input, output, next, put, have, left, hold, bits2, _in, _out, copy, from, from_source, here = 0, here_bits, here_op, here_val, last_bits, last_op, last_val, len, ret, hbuf = new Uint8Array(4), opts, n, order = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (inflateStateCheck(strm) || !strm.output || !strm.input && strm.avail_in !== 0)
    return Z_STREAM_ERROR$1;
  state = strm.state, state.mode === TYPE && (state.mode = TYPEDO), put = strm.next_out, output = strm.output, left = strm.avail_out, next = strm.next_in, input = strm.input, have = strm.avail_in, hold = state.hold, bits2 = state.bits, _in = have, _out = left, ret = Z_OK$1;
  inf_leave:
    for (; ; )
      switch (state.mode) {
        case HEAD:
          if (state.wrap === 0) {
            state.mode = TYPEDO;
            break;
          }
          for (; bits2 < 16; ) {
            if (have === 0)
              break inf_leave;
            have--, hold += input[next++] << bits2, bits2 += 8;
          }
          if (state.wrap & 2 && hold === 35615) {
            state.wbits === 0 && (state.wbits = 15), state.check = 0, hbuf[0] = hold & 255, hbuf[1] = hold >>> 8 & 255, state.check = crc32_1(state.check, hbuf, 2, 0), hold = 0, bits2 = 0, state.mode = FLAGS;
            break;
          }
          if (state.head && (state.head.done = !1), !(state.wrap & 1) || /* check if zlib header allowed */
          (((hold & 255) << 8) + (hold >> 8)) % 31) {
            strm.msg = "incorrect header check", state.mode = BAD;
            break;
          }
          if ((hold & 15) !== Z_DEFLATED) {
            strm.msg = "unknown compression method", state.mode = BAD;
            break;
          }
          if (hold >>>= 4, bits2 -= 4, len = (hold & 15) + 8, state.wbits === 0 && (state.wbits = len), len > 15 || len > state.wbits) {
            strm.msg = "invalid window size", state.mode = BAD;
            break;
          }
          state.dmax = 1 << state.wbits, state.flags = 0, strm.adler = state.check = 1, state.mode = hold & 512 ? DICTID : TYPE, hold = 0, bits2 = 0;
          break;
        case FLAGS:
          for (; bits2 < 16; ) {
            if (have === 0)
              break inf_leave;
            have--, hold += input[next++] << bits2, bits2 += 8;
          }
          if (state.flags = hold, (state.flags & 255) !== Z_DEFLATED) {
            strm.msg = "unknown compression method", state.mode = BAD;
            break;
          }
          if (state.flags & 57344) {
            strm.msg = "unknown header flags set", state.mode = BAD;
            break;
          }
          state.head && (state.head.text = hold >> 8 & 1), state.flags & 512 && state.wrap & 4 && (hbuf[0] = hold & 255, hbuf[1] = hold >>> 8 & 255, state.check = crc32_1(state.check, hbuf, 2, 0)), hold = 0, bits2 = 0, state.mode = TIME;
        case TIME:
          for (; bits2 < 32; ) {
            if (have === 0)
              break inf_leave;
            have--, hold += input[next++] << bits2, bits2 += 8;
          }
          state.head && (state.head.time = hold), state.flags & 512 && state.wrap & 4 && (hbuf[0] = hold & 255, hbuf[1] = hold >>> 8 & 255, hbuf[2] = hold >>> 16 & 255, hbuf[3] = hold >>> 24 & 255, state.check = crc32_1(state.check, hbuf, 4, 0)), hold = 0, bits2 = 0, state.mode = OS;
        case OS:
          for (; bits2 < 16; ) {
            if (have === 0)
              break inf_leave;
            have--, hold += input[next++] << bits2, bits2 += 8;
          }
          state.head && (state.head.xflags = hold & 255, state.head.os = hold >> 8), state.flags & 512 && state.wrap & 4 && (hbuf[0] = hold & 255, hbuf[1] = hold >>> 8 & 255, state.check = crc32_1(state.check, hbuf, 2, 0)), hold = 0, bits2 = 0, state.mode = EXLEN;
        case EXLEN:
          if (state.flags & 1024) {
            for (; bits2 < 16; ) {
              if (have === 0)
                break inf_leave;
              have--, hold += input[next++] << bits2, bits2 += 8;
            }
            state.length = hold, state.head && (state.head.extra_len = hold), state.flags & 512 && state.wrap & 4 && (hbuf[0] = hold & 255, hbuf[1] = hold >>> 8 & 255, state.check = crc32_1(state.check, hbuf, 2, 0)), hold = 0, bits2 = 0;
          } else state.head && (state.head.extra = null);
          state.mode = EXTRA;
        case EXTRA:
          if (state.flags & 1024 && (copy = state.length, copy > have && (copy = have), copy && (state.head && (len = state.head.extra_len - state.length, state.head.extra || (state.head.extra = new Uint8Array(state.head.extra_len)), state.head.extra.set(
            input.subarray(
              next,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              next + copy
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            len
          )), state.flags & 512 && state.wrap & 4 && (state.check = crc32_1(state.check, input, copy, next)), have -= copy, next += copy, state.length -= copy), state.length))
            break inf_leave;
          state.length = 0, state.mode = NAME;
        case NAME:
          if (state.flags & 2048) {
            if (have === 0)
              break inf_leave;
            copy = 0;
            do
              len = input[next + copy++], state.head && len && state.length < 65536 && (state.head.name += String.fromCharCode(len));
            while (len && copy < have);
            if (state.flags & 512 && state.wrap & 4 && (state.check = crc32_1(state.check, input, copy, next)), have -= copy, next += copy, len)
              break inf_leave;
          } else state.head && (state.head.name = null);
          state.length = 0, state.mode = COMMENT;
        case COMMENT:
          if (state.flags & 4096) {
            if (have === 0)
              break inf_leave;
            copy = 0;
            do
              len = input[next + copy++], state.head && len && state.length < 65536 && (state.head.comment += String.fromCharCode(len));
            while (len && copy < have);
            if (state.flags & 512 && state.wrap & 4 && (state.check = crc32_1(state.check, input, copy, next)), have -= copy, next += copy, len)
              break inf_leave;
          } else state.head && (state.head.comment = null);
          state.mode = HCRC;
        case HCRC:
          if (state.flags & 512) {
            for (; bits2 < 16; ) {
              if (have === 0)
                break inf_leave;
              have--, hold += input[next++] << bits2, bits2 += 8;
            }
            if (state.wrap & 4 && hold !== (state.check & 65535)) {
              strm.msg = "header crc mismatch", state.mode = BAD;
              break;
            }
            hold = 0, bits2 = 0;
          }
          state.head && (state.head.hcrc = state.flags >> 9 & 1, state.head.done = !0), strm.adler = state.check = 0, state.mode = TYPE;
          break;
        case DICTID:
          for (; bits2 < 32; ) {
            if (have === 0)
              break inf_leave;
            have--, hold += input[next++] << bits2, bits2 += 8;
          }
          strm.adler = state.check = zswap32(hold), hold = 0, bits2 = 0, state.mode = DICT;
        case DICT:
          if (state.havedict === 0)
            return strm.next_out = put, strm.avail_out = left, strm.next_in = next, strm.avail_in = have, state.hold = hold, state.bits = bits2, Z_NEED_DICT$1;
          strm.adler = state.check = 1, state.mode = TYPE;
        case TYPE:
          if (flush === Z_BLOCK || flush === Z_TREES)
            break inf_leave;
        case TYPEDO:
          if (state.last) {
            hold >>>= bits2 & 7, bits2 -= bits2 & 7, state.mode = CHECK;
            break;
          }
          for (; bits2 < 3; ) {
            if (have === 0)
              break inf_leave;
            have--, hold += input[next++] << bits2, bits2 += 8;
          }
          switch (state.last = hold & 1, hold >>>= 1, bits2 -= 1, hold & 3) {
            case 0:
              state.mode = STORED;
              break;
            case 1:
              if (fixedtables(state), state.mode = LEN_, flush === Z_TREES) {
                hold >>>= 2, bits2 -= 2;
                break inf_leave;
              }
              break;
            case 2:
              state.mode = TABLE;
              break;
            case 3:
              strm.msg = "invalid block type", state.mode = BAD;
          }
          hold >>>= 2, bits2 -= 2;
          break;
        case STORED:
          for (hold >>>= bits2 & 7, bits2 -= bits2 & 7; bits2 < 32; ) {
            if (have === 0)
              break inf_leave;
            have--, hold += input[next++] << bits2, bits2 += 8;
          }
          if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
            strm.msg = "invalid stored block lengths", state.mode = BAD;
            break;
          }
          if (state.length = hold & 65535, hold = 0, bits2 = 0, state.mode = COPY_, flush === Z_TREES)
            break inf_leave;
        case COPY_:
          state.mode = COPY;
        case COPY:
          if (copy = state.length, copy) {
            if (copy > have && (copy = have), copy > left && (copy = left), copy === 0)
              break inf_leave;
            output.set(input.subarray(next, next + copy), put), have -= copy, next += copy, left -= copy, put += copy, state.length -= copy;
            break;
          }
          state.mode = TYPE;
          break;
        case TABLE:
          for (; bits2 < 14; ) {
            if (have === 0)
              break inf_leave;
            have--, hold += input[next++] << bits2, bits2 += 8;
          }
          if (state.nlen = (hold & 31) + 257, hold >>>= 5, bits2 -= 5, state.ndist = (hold & 31) + 1, hold >>>= 5, bits2 -= 5, state.ncode = (hold & 15) + 4, hold >>>= 4, bits2 -= 4, state.nlen > 286 || state.ndist > 30) {
            strm.msg = "too many length or distance symbols", state.mode = BAD;
            break;
          }
          state.have = 0, state.mode = LENLENS;
        case LENLENS:
          for (; state.have < state.ncode; ) {
            for (; bits2 < 3; ) {
              if (have === 0)
                break inf_leave;
              have--, hold += input[next++] << bits2, bits2 += 8;
            }
            state.lens[order[state.have++]] = hold & 7, hold >>>= 3, bits2 -= 3;
          }
          for (; state.have < 19; )
            state.lens[order[state.have++]] = 0;
          if (state.lencode = state.lendyn, state.lenbits = 7, opts = { bits: state.lenbits }, ret = inftrees(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts), state.lenbits = opts.bits, ret) {
            strm.msg = "invalid code lengths set", state.mode = BAD;
            break;
          }
          state.have = 0, state.mode = CODELENS;
        case CODELENS:
          for (; state.have < state.nlen + state.ndist; ) {
            for (; here = state.lencode[hold & (1 << state.lenbits) - 1], here_bits = here >>> 24, here_op = here >>> 16 & 255, here_val = here & 65535, !(here_bits <= bits2); ) {
              if (have === 0)
                break inf_leave;
              have--, hold += input[next++] << bits2, bits2 += 8;
            }
            if (here_val < 16)
              hold >>>= here_bits, bits2 -= here_bits, state.lens[state.have++] = here_val;
            else {
              if (here_val === 16) {
                for (n = here_bits + 2; bits2 < n; ) {
                  if (have === 0)
                    break inf_leave;
                  have--, hold += input[next++] << bits2, bits2 += 8;
                }
                if (hold >>>= here_bits, bits2 -= here_bits, state.have === 0) {
                  strm.msg = "invalid bit length repeat", state.mode = BAD;
                  break;
                }
                len = state.lens[state.have - 1], copy = 3 + (hold & 3), hold >>>= 2, bits2 -= 2;
              } else if (here_val === 17) {
                for (n = here_bits + 3; bits2 < n; ) {
                  if (have === 0)
                    break inf_leave;
                  have--, hold += input[next++] << bits2, bits2 += 8;
                }
                hold >>>= here_bits, bits2 -= here_bits, len = 0, copy = 3 + (hold & 7), hold >>>= 3, bits2 -= 3;
              } else {
                for (n = here_bits + 7; bits2 < n; ) {
                  if (have === 0)
                    break inf_leave;
                  have--, hold += input[next++] << bits2, bits2 += 8;
                }
                hold >>>= here_bits, bits2 -= here_bits, len = 0, copy = 11 + (hold & 127), hold >>>= 7, bits2 -= 7;
              }
              if (state.have + copy > state.nlen + state.ndist) {
                strm.msg = "invalid bit length repeat", state.mode = BAD;
                break;
              }
              for (; copy--; )
                state.lens[state.have++] = len;
            }
          }
          if (state.mode === BAD)
            break;
          if (state.lens[256] === 0) {
            strm.msg = "invalid code -- missing end-of-block", state.mode = BAD;
            break;
          }
          if (state.lenbits = 9, opts = { bits: state.lenbits }, ret = inftrees(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts), state.lenbits = opts.bits, ret) {
            strm.msg = "invalid literal/lengths set", state.mode = BAD;
            break;
          }
          if (state.distbits = 6, state.distcode = state.distdyn, opts = { bits: state.distbits }, ret = inftrees(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts), state.distbits = opts.bits, ret) {
            strm.msg = "invalid distances set", state.mode = BAD;
            break;
          }
          if (state.mode = LEN_, flush === Z_TREES)
            break inf_leave;
        case LEN_:
          state.mode = LEN;
        case LEN:
          if (have >= 6 && left >= 258) {
            strm.next_out = put, strm.avail_out = left, strm.next_in = next, strm.avail_in = have, state.hold = hold, state.bits = bits2, inffast(strm, _out), put = strm.next_out, output = strm.output, left = strm.avail_out, next = strm.next_in, input = strm.input, have = strm.avail_in, hold = state.hold, bits2 = state.bits, state.mode === TYPE && (state.back = -1);
            break;
          }
          for (state.back = 0; here = state.lencode[hold & (1 << state.lenbits) - 1], here_bits = here >>> 24, here_op = here >>> 16 & 255, here_val = here & 65535, !(here_bits <= bits2); ) {
            if (have === 0)
              break inf_leave;
            have--, hold += input[next++] << bits2, bits2 += 8;
          }
          if (here_op && !(here_op & 240)) {
            for (last_bits = here_bits, last_op = here_op, last_val = here_val; here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)], here_bits = here >>> 24, here_op = here >>> 16 & 255, here_val = here & 65535, !(last_bits + here_bits <= bits2); ) {
              if (have === 0)
                break inf_leave;
              have--, hold += input[next++] << bits2, bits2 += 8;
            }
            hold >>>= last_bits, bits2 -= last_bits, state.back += last_bits;
          }
          if (hold >>>= here_bits, bits2 -= here_bits, state.back += here_bits, state.length = here_val, here_op === 0) {
            state.mode = LIT;
            break;
          }
          if (here_op & 32) {
            state.back = -1, state.mode = TYPE;
            break;
          }
          if (here_op & 64) {
            strm.msg = "invalid literal/length code", state.mode = BAD;
            break;
          }
          state.extra = here_op & 15, state.mode = LENEXT;
        case LENEXT:
          if (state.extra) {
            for (n = state.extra; bits2 < n; ) {
              if (have === 0)
                break inf_leave;
              have--, hold += input[next++] << bits2, bits2 += 8;
            }
            state.length += hold & (1 << state.extra) - 1, hold >>>= state.extra, bits2 -= state.extra, state.back += state.extra;
          }
          state.was = state.length, state.mode = DIST;
        case DIST:
          for (; here = state.distcode[hold & (1 << state.distbits) - 1], here_bits = here >>> 24, here_op = here >>> 16 & 255, here_val = here & 65535, !(here_bits <= bits2); ) {
            if (have === 0)
              break inf_leave;
            have--, hold += input[next++] << bits2, bits2 += 8;
          }
          if (!(here_op & 240)) {
            for (last_bits = here_bits, last_op = here_op, last_val = here_val; here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)], here_bits = here >>> 24, here_op = here >>> 16 & 255, here_val = here & 65535, !(last_bits + here_bits <= bits2); ) {
              if (have === 0)
                break inf_leave;
              have--, hold += input[next++] << bits2, bits2 += 8;
            }
            hold >>>= last_bits, bits2 -= last_bits, state.back += last_bits;
          }
          if (hold >>>= here_bits, bits2 -= here_bits, state.back += here_bits, here_op & 64) {
            strm.msg = "invalid distance code", state.mode = BAD;
            break;
          }
          state.offset = here_val, state.extra = here_op & 15, state.mode = DISTEXT;
        case DISTEXT:
          if (state.extra) {
            for (n = state.extra; bits2 < n; ) {
              if (have === 0)
                break inf_leave;
              have--, hold += input[next++] << bits2, bits2 += 8;
            }
            state.offset += hold & (1 << state.extra) - 1, hold >>>= state.extra, bits2 -= state.extra, state.back += state.extra;
          }
          if (state.offset > state.dmax) {
            strm.msg = "invalid distance too far back", state.mode = BAD;
            break;
          }
          state.mode = MATCH;
        case MATCH:
          if (left === 0)
            break inf_leave;
          if (copy = _out - left, state.offset > copy) {
            if (copy = state.offset - copy, copy > state.whave && state.sane) {
              strm.msg = "invalid distance too far back", state.mode = BAD;
              break;
            }
            copy > state.wnext ? (copy -= state.wnext, from = state.wsize - copy) : from = state.wnext - copy, copy > state.length && (copy = state.length), from_source = state.window;
          } else
            from_source = output, from = put - state.offset, copy = state.length;
          copy > left && (copy = left), left -= copy, state.length -= copy;
          do
            output[put++] = from_source[from++];
          while (--copy);
          state.length === 0 && (state.mode = LEN);
          break;
        case LIT:
          if (left === 0)
            break inf_leave;
          output[put++] = state.length, left--, state.mode = LEN;
          break;
        case CHECK:
          if (state.wrap) {
            for (; bits2 < 32; ) {
              if (have === 0)
                break inf_leave;
              have--, hold |= input[next++] << bits2, bits2 += 8;
            }
            if (_out -= left, strm.total_out += _out, state.total += _out, state.wrap & 4 && _out && (strm.adler = state.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out)), _out = left, state.wrap & 4 && (state.flags ? hold : zswap32(hold)) !== state.check) {
              strm.msg = "incorrect data check", state.mode = BAD;
              break;
            }
            hold = 0, bits2 = 0;
          }
          state.mode = LENGTH;
        case LENGTH:
          if (state.wrap && state.flags) {
            for (; bits2 < 32; ) {
              if (have === 0)
                break inf_leave;
              have--, hold += input[next++] << bits2, bits2 += 8;
            }
            if (state.wrap & 4 && hold !== (state.total & 4294967295)) {
              strm.msg = "incorrect length check", state.mode = BAD;
              break;
            }
            hold = 0, bits2 = 0;
          }
          state.mode = DONE;
        case DONE:
          ret = Z_STREAM_END$1;
          break inf_leave;
        case BAD:
          ret = Z_DATA_ERROR$1;
          break inf_leave;
        case MEM:
          return Z_MEM_ERROR$1;
        case SYNC:
        default:
          return Z_STREAM_ERROR$1;
      }
  return strm.next_out = put, strm.avail_out = left, strm.next_in = next, strm.avail_in = have, state.hold = hold, state.bits = bits2, (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH$1)) && updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out), _in -= strm.avail_in, _out -= strm.avail_out, strm.total_in += _in, strm.total_out += _out, state.total += _out, state.wrap & 4 && _out && (strm.adler = state.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out)), strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0), (_in === 0 && _out === 0 || flush === Z_FINISH$1) && ret === Z_OK$1 && (ret = Z_BUF_ERROR), ret;
}, inflateEnd = (strm) => {
  if (inflateStateCheck(strm))
    return Z_STREAM_ERROR$1;
  let state = strm.state;
  return state.window && (state.window = null), strm.state = null, Z_OK$1;
}, inflateGetHeader = (strm, head) => {
  if (inflateStateCheck(strm))
    return Z_STREAM_ERROR$1;
  let state = strm.state;
  return state.wrap & 2 ? (state.head = head, head.done = !1, Z_OK$1) : Z_STREAM_ERROR$1;
}, inflateSetDictionary = (strm, dictionary) => {
  let dictLength = dictionary.length, state, dictid, ret;
  return inflateStateCheck(strm) || (state = strm.state, state.wrap !== 0 && state.mode !== DICT) ? Z_STREAM_ERROR$1 : state.mode === DICT && (dictid = 1, dictid = adler32_1(dictid, dictionary, dictLength, 0), dictid !== state.check) ? Z_DATA_ERROR$1 : (ret = updatewindow(strm, dictionary, dictLength, dictLength), ret ? (state.mode = MEM, Z_MEM_ERROR$1) : (state.havedict = 1, Z_OK$1));
}, inflateReset_1 = inflateReset, inflateReset2_1 = inflateReset2, inflateResetKeep_1 = inflateResetKeep, inflateInit_1 = inflateInit, inflateInit2_1 = inflateInit2, inflate_2$1 = inflate$2, inflateEnd_1 = inflateEnd, inflateGetHeader_1 = inflateGetHeader, inflateSetDictionary_1 = inflateSetDictionary, inflateInfo = "pako inflate (from Nodeca project)", inflate_1$2 = {
  inflateReset: inflateReset_1,
  inflateReset2: inflateReset2_1,
  inflateResetKeep: inflateResetKeep_1,
  inflateInit: inflateInit_1,
  inflateInit2: inflateInit2_1,
  inflate: inflate_2$1,
  inflateEnd: inflateEnd_1,
  inflateGetHeader: inflateGetHeader_1,
  inflateSetDictionary: inflateSetDictionary_1,
  inflateInfo
};
function GZheader() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var gzheader = GZheader, toString = Object.prototype.toString, {
  Z_NO_FLUSH,
  Z_FINISH,
  Z_OK,
  Z_STREAM_END,
  Z_NEED_DICT,
  Z_STREAM_ERROR,
  Z_DATA_ERROR,
  Z_MEM_ERROR
} = constants$2;
function Inflate$1(options) {
  this.options = common.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, options || {});
  let opt = this.options;
  opt.raw && opt.windowBits >= 0 && opt.windowBits < 16 && (opt.windowBits = -opt.windowBits, opt.windowBits === 0 && (opt.windowBits = -15)), opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits) && (opt.windowBits += 32), opt.windowBits > 15 && opt.windowBits < 48 && (opt.windowBits & 15 || (opt.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new zstream(), this.strm.avail_out = 0;
  let status = inflate_1$2.inflateInit2(
    this.strm,
    opt.windowBits
  );
  if (status !== Z_OK)
    throw new Error(messages[status]);
  if (this.header = new gzheader(), inflate_1$2.inflateGetHeader(this.strm, this.header), opt.dictionary && (typeof opt.dictionary == "string" ? opt.dictionary = strings.string2buf(opt.dictionary) : toString.call(opt.dictionary) === "[object ArrayBuffer]" && (opt.dictionary = new Uint8Array(opt.dictionary)), opt.raw && (status = inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary), status !== Z_OK)))
    throw new Error(messages[status]);
}
Inflate$1.prototype.push = function(data, flush_mode) {
  let strm = this.strm, chunkSize = this.options.chunkSize, dictionary = this.options.dictionary, status, _flush_mode, last_avail_out;
  if (this.ended) return !1;
  for (flush_mode === ~~flush_mode ? _flush_mode = flush_mode : _flush_mode = flush_mode === !0 ? Z_FINISH : Z_NO_FLUSH, toString.call(data) === "[object ArrayBuffer]" ? strm.input = new Uint8Array(data) : strm.input = data, strm.next_in = 0, strm.avail_in = strm.input.length; ; ) {
    for (strm.avail_out === 0 && (strm.output = new Uint8Array(chunkSize), strm.next_out = 0, strm.avail_out = chunkSize), status = inflate_1$2.inflate(strm, _flush_mode), status === Z_NEED_DICT && dictionary && (status = inflate_1$2.inflateSetDictionary(strm, dictionary), status === Z_OK ? status = inflate_1$2.inflate(strm, _flush_mode) : status === Z_DATA_ERROR && (status = Z_NEED_DICT)); strm.avail_in > 0 && status === Z_STREAM_END && strm.state.wrap > 0 && data[strm.next_in] !== 0; )
      inflate_1$2.inflateReset(strm), status = inflate_1$2.inflate(strm, _flush_mode);
    switch (status) {
      case Z_STREAM_ERROR:
      case Z_DATA_ERROR:
      case Z_NEED_DICT:
      case Z_MEM_ERROR:
        return this.onEnd(status), this.ended = !0, !1;
    }
    if (last_avail_out = strm.avail_out, strm.next_out && (strm.avail_out === 0 || status === Z_STREAM_END))
      if (this.options.to === "string") {
        let next_out_utf8 = strings.utf8border(strm.output, strm.next_out), tail = strm.next_out - next_out_utf8, utf8str = strings.buf2string(strm.output, next_out_utf8);
        strm.next_out = tail, strm.avail_out = chunkSize - tail, tail && strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0), this.onData(utf8str);
      } else
        this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
    if (!(status === Z_OK && last_avail_out === 0)) {
      if (status === Z_STREAM_END)
        return status = inflate_1$2.inflateEnd(this.strm), this.onEnd(status), this.ended = !0, !0;
      if (strm.avail_in === 0) break;
    }
  }
  return !0;
};
Inflate$1.prototype.onData = function(chunk) {
  this.chunks.push(chunk);
};
Inflate$1.prototype.onEnd = function(status) {
  status === Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = common.flattenChunks(this.chunks)), this.chunks = [], this.err = status, this.msg = this.strm.msg;
};
function inflate$1(input, options) {
  let inflator = new Inflate$1(options);
  if (inflator.push(input), inflator.err) throw inflator.msg || messages[inflator.err];
  return inflator.result;
}
function inflateRaw$1(input, options) {
  return options = options || {}, options.raw = !0, inflate$1(input, options);
}
var Inflate_1$1 = Inflate$1, inflate_2 = inflate$1, inflateRaw_1$1 = inflateRaw$1, ungzip$1 = inflate$1, constants = constants$2, inflate_1$1 = {
  Inflate: Inflate_1$1,
  inflate: inflate_2,
  inflateRaw: inflateRaw_1$1,
  ungzip: ungzip$1,
  constants
}, { Deflate, deflate, deflateRaw, gzip } = deflate_1$1, { Inflate, inflate, inflateRaw, ungzip } = inflate_1$1;
var Inflate_1 = Inflate;

// ../../../mnt/user-data/outputs/research-site/server-src/lib.js
var PARTS = ["plan", "intro", "body", "conclusion", "output", "extra"], LABEL = {
  plan: "\uC5F0\uAD6C\uACC4\uD68D\uC11C",
  intro: "\uCD5C\uC885\uBCF4\uACE0\uC11C 1. \uC11C\uB860",
  body: "\uCD5C\uC885\uBCF4\uACE0\uC11C 2. \uBCF8\uB860",
  conclusion: "\uCD5C\uC885\uBCF4\uACE0\uC11C 3. \uACB0\uB860",
  output: "\uC0B0\uCD9C\uBB3C",
  extra: "\uAC1C\uC778\uC5F0\uAD6C\uBCF4\uACE0\uC11C",
  overall: "\uC804\uCCB4 \uC694\uC57D"
}, MODEL = {
  plan: "claude-haiku-5-5",
  intro: "claude-sonnet-5-5",
  body: "claude-sonnet-5-5",
  conclusion: "claude-sonnet-5-5",
  output: "claude-sonnet-5-5",
  extra: "claude-sonnet-5-5",
  overall: "claude-sonnet-5-5"
};
var MAX_IMAGES = 5, MAX_IMAGE_BYTES = 1024 * 1024, IMAGE_TYPES = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", gif: "image/gif", webp: "image/webp" };
function send(res, status, body) {
  res.status(status).setHeader("Content-Type", "application/json; charset=utf-8"), res.end(JSON.stringify(body));
}
function readBody(req) {
  return typeof req.body == "string" ? JSON.parse(req.body || "{}") : req.body || {};
}
function env() {
  let key = process.env.ANTHROPIC_API_KEY, url = (process.env.SUPABASE_URL || "").replace(/\/$/, ""), anon = process.env.SUPABASE_ANON_KEY;
  if (!key || !url || !anon) {
    let e = new Error("Vercel \uD658\uACBD \uBCC0\uC218(ANTHROPIC_API_KEY, SUPABASE_URL, SUPABASE_ANON_KEY)\uAC00 \uC124\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC124\uC815 \uD6C4 \uB2E4\uC2DC \uBC30\uD3EC(Redeploy)\uD558\uC138\uC694.");
    throw e.status = 500, e;
  }
  return { key, url, anon };
}
function supa(req) {
  let { url, anon } = env(), auth = req.headers.authorization || "";
  if (!/^Bearer\s+.+/.test(auth)) {
    let e = new Error("\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.");
    throw e.status = 401, e;
  }
  let headers = { apikey: anon, Authorization: auth, "Content-Type": "application/json" }, call = async (path, opts = {}) => {
    let r = await fetch(`${url}${path}`, { ...opts, headers: { ...headers, ...opts.headers || {} } }), text = await r.text(), data = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = text;
    }
    if (!r.ok) {
      let e = new Error(data && data.message || `Supabase \uC624\uB958 (${r.status})`);
      throw e.status = r.status, e;
    }
    return data;
  };
  return {
    rest: call,
    rpc: (fn, args) => call(`/rest/v1/rpc/${fn}`, { method: "POST", body: JSON.stringify(args || {}) }),
    select: (table, query) => call(`/rest/v1/${table}?${query}`),
    upsert: (table, rows, conflict) => call(`/rest/v1/${table}?on_conflict=${conflict}`, {
      method: "POST",
      body: JSON.stringify(rows),
      headers: { Prefer: "resolution=merge-duplicates,return=representation" }
    }),
    insert: (table, rows) => call(`/rest/v1/${table}`, { method: "POST", body: JSON.stringify(rows), headers: { Prefer: "return=representation" } }),
    update: (table, query, patch) => call(`/rest/v1/${table}?${query}`, { method: "PATCH", body: JSON.stringify(patch), headers: { Prefer: "return=representation" } }),
    download: async (path) => {
      let r = await fetch(`${url}/storage/v1/object/authenticated/submissions/${path.split("/").map(encodeURIComponent).join("/")}`, { headers: { apikey: anon, Authorization: auth } });
      if (!r.ok) throw new Error(`\uD30C\uC77C\uC744 \uBC1B\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4 (${r.status})`);
      return new Uint8Array(await r.arrayBuffer());
    }
  };
}
async function canManage(db, studentId) {
  if (!/^[0-9a-f-]{36}$/i.test(String(studentId))) return !1;
  try {
    return await db.rpc("can_manage", { p_student: studentId }) === !0;
  } catch {
    return !1;
  }
}
function masker(st) {
  let name = String(st.name || "").trim(), keys = [];
  return name.length >= 2 && keys.push([name, "\u25CB\u25CB"]), name.length >= 3 && keys.push([name.slice(1), "\u25CB\u25CB"]), st.sid && keys.push([String(st.sid), "(\uD559\uBC88)"]), st.email && keys.push([String(st.email), "(\uC774\uBA54\uC77C)"]), (t) => {
    let out = String(t || "");
    for (let [k, v] of keys) out = out.split(k).join(v);
    return out;
  };
}
function sniff(u82) {
  return u82[0] === 80 && u82[1] === 75 ? "hwpx" : u82[0] === 208 && u82[1] === 207 && u82[2] === 17 && u82[3] === 224 ? "hwp" : "";
}
var unescapeXml = (s) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (m, n) => String.fromCharCode(+n)).replace(/&amp;/g, "&");
function extractHwpx(u82, withImages) {
  let files = unzipSync(u82), keys = Object.keys(files), secs = keys.filter((k) => /(^|\/)section\d*\.xml$/i.test(k)).sort((a, b) => parseInt((a.match(/(\d+)\.xml$/i) || [0, 0])[1], 10) - parseInt((b.match(/(\d+)\.xml$/i) || [0, 0])[1], 10));
  if (!secs.length) throw new Error("HWPX \uBCF8\uBB38\uC744 \uCC3E\uC9C0 \uBABB\uD568");
  let manifest = {}, hpfKey = keys.find((k) => /content\.hpf$/i.test(k));
  if (hpfKey) {
    let hpf = strFromU8(files[hpfKey]);
    for (let m of hpf.matchAll(/<(?:\w+:)?item\b([^>]*)\/?>/g)) {
      let id = (m[1].match(/\bid="([^"]*)"/) || [])[1], href = (m[1].match(/\bhref="([^"]*)"/) || [])[1];
      id && href && (manifest[id] = href);
    }
  }
  let text = "", refs = [], firstBreak = -1;
  for (let sec of secs) {
    let x = strFromU8(files[sec]);
    x = x.replace(/<((?:\w+:)?(?:header|footer|footNote|endNote|memo|hiddenComment))\b[^>]*>[\s\S]*?<\/\1>/g, "");
    let inT = 0, inTc = 0, re = /<(\/?)((?:\w+:)?)(\w+)\b([^>]*)>|([^<]+)/g, m;
    for (; m = re.exec(x); ) {
      if (m[5] !== void 0) {
        inT && (text += unescapeXml(m[5]));
        continue;
      }
      let close = m[1] === "/", name = m[3], attrs = m[4] || "", self = /\/\s*$/.test(attrs);
      if (name === "t")
        self || (inT += close ? -1 : 1), inT < 0 && (inT = 0);
      else if (name === "lineBreak") text += `
`;
      else if (name === "tab") text += " ";
      else if (name === "p" && close) text += inTc ? " " : `
`;
      else if (name === "p" && !close && firstBreak < 0 && /pageBreak="1"/.test(attrs) && text.trim()) firstBreak = text.length;
      else if (name === "tc" && !close && !self) inTc++;
      else if (name === "tc" && close)
        inTc = Math.max(0, inTc - 1), text = text.replace(/ +$/, "") + " | ";
      else if (name === "tr" && close) text += `
`;
      else if (name === "img" && !close) {
        let id = (attrs.match(/binaryItemIDRef="([^"]*)"/) || [])[1];
        id && refs.push({ id, pos: text.length });
      }
    }
    text += `
`;
  }
  text = text.replace(/[ \t]+\n/g, `
`).replace(/\n{3,}/g, `

`).trim();
  let images = [], skippedImages = 0;
  if (withImages) {
    let coverEnd = firstBreak >= 0 ? firstBreak : Math.min(1500, Math.floor(text.length * 0.15)), seen = /* @__PURE__ */ new Set();
    for (let r of refs) {
      if (seen.has(r.id)) continue;
      if (seen.add(r.id), r.pos < coverEnd) {
        skippedImages++;
        continue;
      }
      let href = manifest[r.id] || "", key = keys.find((k) => k === href || k === "Contents/" + href || k.toLowerCase().endsWith("/" + href.split("/").pop().toLowerCase())) || keys.find((k) => /^bindata\//i.test(k) && k.split("/").pop().split(".")[0] === r.id);
      if (!key) continue;
      let ext = key.split(".").pop().toLowerCase(), type = IMAGE_TYPES[ext];
      if (!type || files[key].length > MAX_IMAGE_BYTES) {
        skippedImages++;
        continue;
      }
      if (images.length >= MAX_IMAGES) {
        skippedImages++;
        continue;
      }
      images.push({ media_type: type, data: Buffer.from(files[key]).toString("base64") });
    }
  }
  return { text, images, skippedImages };
}
function oleLenient(u82) {
  let dv = new DataView(u82.buffer, u82.byteOffset, u82.byteLength), u32 = (o) => o + 4 <= u82.length ? dv.getUint32(o, !0) : 4294967295, ss = 1 << dv.getUint16(30, !0), mss = 1 << dv.getUint16(32, !0), cutoff = u32(56) || 4096, nSect = Math.floor((u82.length - ss) / ss) + 1, secOff = (n) => (n + 1) * ss, okSec = (n) => n < 4294967290 && secOff(n) < u82.length, fatSecs = [];
  for (let i = 0; i < 109; i++) {
    let s = u32(76 + i * 4);
    okSec(s) && fatSecs.push(s);
  }
  let d = u32(68), guard = 0;
  for (; okSec(d) && guard++ < 1e4; ) {
    let base = secOff(d), per = ss / 4 - 1;
    for (let i = 0; i < per; i++) {
      let s = u32(base + i * 4);
      okSec(s) && fatSecs.push(s);
    }
    d = u32(base + per * 4);
  }
  let fat = [];
  for (let s of fatSecs) {
    let base = secOff(s);
    for (let i = 0; i < ss / 4; i++) fat.push(u32(base + i * 4));
  }
  let chain = (start, table) => {
    let out = [], seen = /* @__PURE__ */ new Set();
    for (let s = start; s < 4294967290 && !seen.has(s) && out.length < 1e6; s = table[s] === void 0 ? 4294967294 : table[s])
      seen.add(s), out.push(s);
    return out;
  }, readChain = (start, size) => {
    let parts = [], got = 0;
    for (let s of chain(start, fat)) {
      if (!okSec(s)) break;
      let o = secOff(s), n = Math.min(ss, u82.length - o);
      if (parts.push(u82.subarray(o, o + n)), got += n, size && got >= size) break;
    }
    let out = new Uint8Array(size ? Math.min(size, got) : got), p = 0;
    for (let b of parts) {
      let n = Math.min(b.length, out.length - p);
      if (out.set(b.subarray(0, n), p), p += n, p >= out.length) break;
    }
    return out;
  }, dir = readChain(u32(48), 0), dd = new DataView(dir.buffer, dir.byteOffset, dir.byteLength), entries = [];
  for (let o = 0; o + 128 <= dir.length; o += 128) {
    let nl = dd.getUint16(o + 64, !0), name = "";
    for (let i = 0; i + 1 < Math.min(nl, 64) - 2 + 1 && i < 62; i += 2) {
      let c = dd.getUint16(o + i, !0);
      if (!c) break;
      name += String.fromCharCode(c);
    }
    entries.push({ name, type: dir[o + 66], left: dd.getUint32(o + 68, !0), right: dd.getUint32(o + 72, !0), child: dd.getUint32(o + 76, !0), start: dd.getUint32(o + 116, !0), size: dd.getUint32(o + 120, !0) });
  }
  let root = entries[0] || { start: 4294967294, child: 4294967295 }, ministream = readChain(root.start, 0), minifat = [];
  {
    let mf = readChain(u32(60), 0), mdv = new DataView(mf.buffer, mf.byteOffset, mf.byteLength);
    for (let i = 0; i + 4 <= mf.length; i += 4) minifat.push(mdv.getUint32(i, !0));
  }
  let readEntry = (e) => {
    if (e.size < cutoff) {
      let out = new Uint8Array(e.size), p = 0;
      for (let s of chain(e.start, minifat)) {
        let o = s * mss;
        if (o >= ministream.length) break;
        let n = Math.min(mss, e.size - p, ministream.length - o);
        if (out.set(ministream.subarray(o, o + n), p), p += n, p >= e.size) break;
      }
      return out.subarray(0, p);
    }
    return readChain(e.start, e.size);
  }, paths = {}, walk = (idx, prefix, depth) => {
    if (idx === 4294967295 || idx >= entries.length || depth > 64) return;
    let stack = [idx], seen = /* @__PURE__ */ new Set();
    for (; stack.length; ) {
      let i = stack.pop();
      if (i === 4294967295 || i >= entries.length || seen.has(i)) continue;
      seen.add(i);
      let e = entries[i];
      stack.push(e.left, e.right);
      let p = prefix + "/" + e.name;
      e.type === 2 ? paths[p] = e : e.type === 1 && walk(e.child, p, depth + 1);
    }
  };
  return walk(root.child, "", 0), {
    get: (n) => {
      let key = n.startsWith("/") ? n : "/" + n, e = paths[key] || Object.entries(paths).find(([k]) => k.toLowerCase() === key.toLowerCase())?.[1];
      return e ? readEntry(e) : null;
    },
    list: () => Object.keys(paths)
  };
}
function inflatePartial(b) {
  for (let raw of [!0, !1]) {
    let parts = [], inf = new Inflate_1({ raw });
    inf.onData = (c) => parts.push(c);
    let ended = !1;
    inf.onEnd = () => {
      ended = !0;
    };
    try {
      inf.push(b, !0);
    } catch {
    }
    !ended && inf.strm && inf.strm.output && inf.strm.next_out > 0 && parts.push(inf.strm.output.subarray(0, inf.strm.next_out));
    let n = parts.reduce((a, c) => a + c.length, 0);
    if (n) {
      let out = new Uint8Array(n), p = 0;
      for (let c of parts)
        out.set(c, p), p += c.length;
      return out;
    }
  }
  return new Uint8Array(0);
}
function openOle(u82) {
  try {
    let cfb = CFB.read(Buffer.from(u82), { type: "buffer" }), get = (n) => {
      let e = CFB.find(cfb, n);
      return e ? new Uint8Array(e.content) : null;
    };
    if (!get("/FileHeader") && !get("FileHeader")) throw new Error("no header");
    return { get, list: () => cfb.FullPaths.map((p, i) => ({ p, e: cfb.FileIndex[i] })).filter((x) => x.e.type === 2).map((x) => x.p.replace(/^Root Entry/, "")), via: "cfb" };
  } catch {
    return { ...oleLenient(u82), via: "lenient" };
  }
}
var SKIP_CTRL = /* @__PURE__ */ new Set(["head", "foot", "fn  ", "en  ", "tcmt", "memo"]);
function extractHwp(u82, withImages) {
  let ole = openOle(u82), get = ole.get, fh = get("/FileHeader") || get("FileHeader");
  if (!fh) throw new Error("\uD55C\uAE00 \uD30C\uC77C \uBA38\uB9AC \uC815\uBCF4\uAC00 \uC5C6\uC74C");
  let prop = new DataView(fh.buffer, fh.byteOffset, fh.byteLength).getUint32(36, !0);
  if (prop & 2) throw new Error("\uC554\uD638\uAC00 \uAC78\uB9B0 \uBB38\uC11C");
  if (prop & 4) throw new Error("\uBC30\uD3EC\uC6A9 \uBB38\uC11C");
  let compressed = !!(prop & 1), unz = (b) => compressed ? inflatePartial(b) : b, out = [];
  for (let i = 0; i < 200; i++) {
    let sec = get(`/BodyText/Section${i}`) || get(`BodyText/Section${i}`);
    if (!sec) break;
    sec = unz(sec);
    let v = new DataView(sec.buffer, sec.byteOffset, sec.byteLength), off = 0, skipLevel = -1;
    for (; off + 4 <= sec.length; ) {
      let h = v.getUint32(off, !0);
      off += 4;
      let tag = h & 1023, level = h >>> 10 & 1023, size = h >>> 20 & 4095;
      if (size === 4095 && (size = v.getUint32(off, !0), off += 4), skipLevel >= 0 && level > skipLevel) {
        off += size;
        continue;
      }
      if (skipLevel = -1, tag === 71 && size >= 4) {
        let id = v.getUint32(off, !0), s = String.fromCharCode(id >>> 24 & 255, id >>> 16 & 255, id >>> 8 & 255, id & 255);
        SKIP_CTRL.has(s) && (skipLevel = level);
      } else if (tag === 67) {
        let s = "";
        for (let k = 0; k + 1 < size; ) {
          let c = v.getUint16(off + k, !0);
          if (c < 32) {
            if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].includes(c)) {
              c === 9 && (s += " "), k += 16;
              continue;
            }
            c === 10 && (s += `
`), k += 2;
            continue;
          }
          s += String.fromCharCode(c), k += 2;
        }
        s = s.replace(/[\uE000-\uF8FF]/g, "").trim(), s && out.push(s);
      }
      off += size;
    }
  }
  let text = out.join(`
`).replace(/\n{3,}/g, `

`).trim(), images = [], skippedImages = 0;
  return withImages && ole.list().filter((p) => /\/BinData\/[^/]+$/i.test(p)).sort((a, b) => a.localeCompare(b, void 0, { numeric: !0 })).forEach((path, idx) => {
    if (idx === 0) {
      skippedImages++;
      return;
    }
    let ext = path.split(".").pop().toLowerCase(), type = IMAGE_TYPES[ext], data = ole.get(path);
    if (!data) {
      skippedImages++;
      return;
    }
    try {
      data = unz(data);
    } catch {
    }
    if (!type || data.length > MAX_IMAGE_BYTES || images.length >= MAX_IMAGES) {
      skippedImages++;
      return;
    }
    images.push({ media_type: type, data: Buffer.from(data).toString("base64") });
  }), { text, images, skippedImages };
}
function extractDoc(u82, withImages) {
  let kind = sniff(u82);
  if (kind === "hwpx") return extractHwpx(u82, withImages);
  if (kind === "hwp") return extractHwp(u82, withImages);
  let e = new Error("hwp\xB7hwpx \uD30C\uC77C\uC774 \uC544\uB2D8");
  throw e.code = "FORMAT", e;
}
var COMMON = `\uB2F9\uC2E0\uC740 \uD55C\uAD6D \uACE0\uB4F1\uD559\uAD50 \uAD50\uC0AC\uAC00 \uD559\uC0DD\uC758 \uAC1C\uC778\uC5F0\uAD6C \uD65C\uB3D9\uC744 \uD30C\uC545\uD558\uB3C4\uB85D \uB3D5\uB294 \uBCF4\uC870\uC790\uC785\uB2C8\uB2E4. \uAD50\uC0AC\uB9CC \uC774 \uC694\uC57D\uC744 \uBD05\uB2C8\uB2E4.
- \uC81C\uCD9C\uBB3C\uC5D0 \uC2E4\uC81C\uB85C \uB4DC\uB7EC\uB09C \uB0B4\uC6A9\uB9CC \uC4F0\uACE0, \uC5C6\uB294 \uB0B4\uC6A9\uC744 \uC9C0\uC5B4\uB0B4\uAC70\uB098 \uBD80\uD480\uB9AC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.
- \uD559\uC0DD \uC774\uB984\uC740 \u25CB\u25CB\uB85C \uAC00\uB824\uC838 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB984\uC744 \uCD94\uCE21\uD558\uAC70\uB098 \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.
- \uAC04\uACB0\uD55C \uD55C\uAD6D\uC5B4\uB85C, \uAD50\uC0AC\uAC00 \uBE60\uB974\uAC8C \uC77D\uC744 \uC218 \uC788\uAC8C \uC501\uB2C8\uB2E4.
- \uBC18\uB4DC\uC2DC \uC9C0\uC815\uD55C JSON \uD558\uB098\uB9CC \uCD9C\uB825\uD569\uB2C8\uB2E4. \uC55E\uB4A4\uC5D0 \uB2E4\uB978 \uAE00\uC774\uB098 \uCF54\uB4DC \uBE14\uB85D \uD45C\uC2DC\uB97C \uBD99\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`;
function partSystem(part) {
  return part === "plan" ? COMMON + `
\uC5F0\uAD6C\uACC4\uD68D\uC11C\uB97C \uC694\uC57D\uD569\uB2C8\uB2E4. \uCD9C\uB825 \uD615\uC2DD:
{"summary":"\uD575\uC2EC \uC694\uC57D 2~4\uBB38\uC7A5","question":"\uD0D0\uAD6C \uC9C8\uBB38","method":"\uD0D0\uAD6C \uBC29\uBC95","schedule":"\uC77C\uC815(\uC788\uC73C\uBA74)","materials":["\uD65C\uC6A9\uD558\uB824\uB294 \uC790\uB8CC"],"revision":"\uAD50\uC0AC \uD53C\uB4DC\uBC31\uC744 \uBC1B\uACE0 \uACE0\uCE5C \uB0B4\uC6A9(\uC5C6\uC73C\uBA74 \uBE48 \uBB38\uC790\uC5F4)","notes":["\uAD50\uC0AC\uAC00 \uD655\uC778\uD560 \uC810"]}` : COMMON + `
${LABEL[part]}\uC744(\uB97C) \uC694\uC57D\uD569\uB2C8\uB2E4. \uBCF8\uBB38 \uD14D\uC2A4\uD2B8\uC640 \uADF8\uB9BC\uB9CC \uC8FC\uC5B4\uC9D1\uB2C8\uB2E4. \uCD9C\uB825 \uD615\uC2DD:
{"summary":"\uD575\uC2EC \uC694\uC57D 3~5\uBB38\uC7A5","motivation":"\uD0D0\uAD6C \uB3D9\uAE30\xB7\uBAA9\uC801(\uC788\uC73C\uBA74)","method":"\uD0D0\uAD6C \uBC29\uBC95\xB7\uACFC\uC815","result":"\uACB0\uACFC\xB7\uACB0\uB860\xB7\uBC1C\uACAC","materials":["\uD65C\uC6A9\uD55C \uC790\uB8CC\xB7\uBB38\uD5CC\xB7\uB3C4\uAD6C"],"figures":["\uADF8\uB9BC\uC774 \uBCF4\uC5EC \uC8FC\uB294 \uB0B4\uC6A9 \uD55C \uC904\uC529"],"revision":"\uAD50\uC0AC \uD53C\uB4DC\uBC31\uC744 \uBC1B\uACE0 \uBB34\uC5C7\uC744 \uC5B4\uB5BB\uAC8C \uACE0\uCCE4\uB294\uC9C0(\uC218\uC815 \uC804 \uB0B4\uC6A9\uC774 \uC8FC\uC5B4\uC9C0\uBA74 \uBE44\uAD50, \uC5C6\uC73C\uBA74 \uBE48 \uBB38\uC790\uC5F4)","notes":["\uAD50\uC0AC\uAC00 \uD655\uC778\uD560 \uC810"]}`;
}
var OVERALL_SYSTEM = COMMON + `
\uC5EC\uB7EC \uD30C\uD2B8 \uC694\uC57D\uACFC \uD53C\uB4DC\uBC31 \uAE30\uB85D\uC744 \uBAA8\uC544 \uD559\uC0DD\uC758 \uAC1C\uC778\uC5F0\uAD6C \uD65C\uB3D9 \uC804\uCCB4\uB97C \uC815\uB9AC\uD569\uB2C8\uB2E4. \uD76C\uB9DD \uC9C4\uB85C\uAC00 \uC8FC\uC5B4\uC9C0\uBA74 \uADF8 \uC9C4\uB85C\uC5D0 \uD544\uC694\uD55C \uC5ED\uB7C9\uC744 3~5\uAC1C \uC815\uD558\uACE0, \uAC01 \uC5ED\uB7C9\uC744 \uBCF4\uC5EC \uC8FC\uB294 \uC2E4\uC81C \uD65C\uB3D9\uACFC \uADFC\uAC70\uB97C \uC5F0\uACB0\uD569\uB2C8\uB2E4. \uADFC\uAC70\uAC00 \uC5C6\uB294 \uC5ED\uB7C9\uC740 "\uADFC\uAC70 \uBD80\uC871"\uC774\uB77C\uACE0 \uC501\uB2C8\uB2E4. \uCD9C\uB825 \uD615\uC2DD:
{"flow":"\uD65C\uB3D9 \uC804\uCCB4 \uD750\uB984 4~6\uBB38\uC7A5","revisions":[{"part":"\uD30C\uD2B8 \uC774\uB984","feedback":"\uAD50\uC0AC \uD53C\uB4DC\uBC31 \uD575\uC2EC","change":"\uD559\uC0DD\uC774 \uACE0\uCE5C \uB0B4\uC6A9(\uD655\uC778 \uC548 \uB418\uBA74 '\uD655\uC778 \uBD88\uAC00')"}],"career":{"goal":"\uD76C\uB9DD \uC9C4\uB85C(\uC5C6\uC73C\uBA74 \uBE48 \uBB38\uC790\uC5F4)","competencies":[{"name":"\uC5ED\uB7C9","why":"\uADF8 \uC9C4\uB85C\uC5D0 \uD544\uC694\uD55C \uC774\uC720","evidence":"\uC774 \uC5ED\uB7C9\uC744 \uBCF4\uC5EC \uC8FC\uB294 \uD65C\uB3D9\uACFC \uADFC\uAC70"}]},"points":["\uC0DD\uAE30\uBD80 \uC791\uC131\uC5D0 \uCC38\uACE0\uD560 \uD3EC\uC778\uD2B8"],"check":["\uAD50\uC0AC\uAC00 \uD655\uC778\uD560 \uC810"]}`;
async function buildPart(db, st, part, sub, events) {
  let hide = masker(st);
  if (!sub || !sub.file_path) return { skip: "\uC81C\uCD9C \uD30C\uC77C \uC5C6\uC74C" };
  let u82;
  try {
    u82 = await db.download(sub.file_path);
  } catch {
    return { skip: "\uD30C\uC77C\uC744 \uBC1B\uC9C0 \uBABB\uD568" };
  }
  let withImages = part !== "plan", doc;
  try {
    doc = extractDoc(u82, withImages);
  } catch (e) {
    return { skip: e.code === "FORMAT" ? "\uD615\uC2DD \uC81C\uC678 (hwp\xB7hwpx \uC544\uB2D8)" : `\uC77D\uAE30 \uC2E4\uD328: ${e.message}` };
  }
  if (!doc.text.trim() && !doc.images.length) return { skip: "\uBCF8\uBB38 \uB0B4\uC6A9\uC774 \uC5C6\uC74C" };
  let evs = (events || []).filter((e) => e.stage === part).sort((a, b) => String(a.created_at).localeCompare(String(b.created_at))), fbs = evs.filter((e) => e.kind === "feedback" && e.note || e.kind === "status" && e.status === "revise"), prevText = "", lastRevise = [...evs].reverse().find((e) => e.status === "revise" && (e.kind === "feedback" || e.kind === "status"));
  if (lastRevise) {
    let prevSubmit = [...evs].reverse().find((e) => e.kind === "submit" && e.created_at < lastRevise.created_at && e.file_path && e.file_path !== sub.file_path);
    if (prevSubmit)
      try {
        prevText = extractDoc(await db.download(prevSubmit.file_path), !1).text.slice(0, 6e3);
      } catch {
        prevText = "";
      }
  }
  let content = [{ type: "text", text: `[\uD30C\uD2B8] ${LABEL[part]}
[\uC5F0\uAD6C \uC8FC\uC81C] ${hide(st.topic || "(\uC5C6\uC74C)")}
` }];
  return content.push({ type: "text", text: `
[\uBCF8\uBB38]
${hide(doc.text).slice(0, part === "plan" ? 15e3 : 3e4)}` }), doc.images.forEach((im, i) => {
    content.push({ type: "text", text: `
[\uADF8\uB9BC ${i + 1}]` }), content.push({ type: "image", source: { type: "base64", media_type: im.media_type, data: im.data } });
  }), fbs.length && content.push({ type: "text", text: `
[\uAD50\uC0AC \uD53C\uB4DC\uBC31 \uAE30\uB85D]
${fbs.map((e) => `- ${String(e.created_at).slice(0, 10)}: ${hide(e.note || "\uBCF4\uC644 \uC694\uCCAD")}`).join(`
`)}` }), prevText && content.push({ type: "text", text: `
[\uBCF4\uC644 \uC694\uCCAD \uC804\uC5D0 \uB0C8\uB358 \uB0B4\uC6A9 (\uC77C\uBD80)]
${hide(prevText)}` }), content.push({ type: "text", text: `
\uC704 \uC790\uB8CC\uB85C \uC815\uD574\uC9C4 JSON \uD615\uC2DD\uC758 \uC694\uC57D\uC744 \uB9CC\uB4E4\uC5B4 \uC8FC\uC138\uC694.` }), {
    params: { model: MODEL[part], max_tokens: part === "plan" ? 1200 : 2e3, system: partSystem(part), messages: [{ role: "user", content }] },
    source: { path: sub.file_path, name: sub.file_name || "" },
    info: { images: doc.images.length, skippedImages: doc.skippedImages, hadPrev: !!prevText }
  };
}
function buildOverall(st, rows, events, subs) {
  let hide = masker(st), applicable = PARTS.filter((p) => p !== "extra" || st.extra_required);
  if (!rows.filter((r) => r.part !== "overall" && r.status === "done" && r.summary).length) return { skip: "\uD30C\uD2B8 \uC694\uC57D\uC774 \uC544\uC9C1 \uC5C6\uC74C" };
  if (rows.some((r) => r.part !== "overall" && r.status === "queued")) return { skip: "\uD30C\uD2B8 \uC694\uC57D\uC774 \uC544\uC9C1 \uC9C4\uD589 \uC911" };
  let lines = applicable.map((p) => {
    let r = rows.find((x) => x.part === p);
    if (r && r.status === "done") return `
[${LABEL[p]} \uC694\uC57D]
${hide(JSON.stringify(r.summary))}`;
    let s = (subs || []).find((x) => x.stage === p);
    return `
[${LABEL[p]}] ${!s || s.status === "none" ? "\uBBF8\uC81C\uCD9C" : r && r.status === "skipped" ? `\uC694\uC57D \uC81C\uC678 (${r.error || ""})` : "\uC694\uC57D \uC5C6\uC74C"}`;
  }), fb = (events || []).filter((e) => e.kind === "feedback" && e.note || e.kind === "status" && e.status).sort((a, b) => String(a.created_at).localeCompare(String(b.created_at))).map((e) => `- ${LABEL[e.stage] || e.stage} ${String(e.created_at).slice(0, 10)} [${e.status || ""}] ${hide(e.note || "")}`).join(`
`), content = [{ type: "text", text: `[\uC5F0\uAD6C \uC8FC\uC81C] ${hide(st.topic || "(\uC5C6\uC74C)")}
[\uC5F0\uAD6C \uBD84\uC57C] ${st.field || "(\uC5C6\uC74C)"}
[\uD76C\uB9DD \uC9C4\uB85C] ${hide(st.career || "(\uC5C6\uC74C)")}
${lines.join(`
`)}

[\uAD50\uC0AC \uD53C\uB4DC\uBC31\xB7\uC0C1\uD0DC \uBCC0\uACBD \uAE30\uB85D]
${fb || "(\uC5C6\uC74C)"}

\uC704 \uC790\uB8CC\uB85C \uC815\uD574\uC9C4 JSON \uD615\uC2DD\uC758 \uC804\uCCB4 \uC694\uC57D\uC744 \uB9CC\uB4E4\uC5B4 \uC8FC\uC138\uC694.` }];
  return {
    params: { model: MODEL.overall, max_tokens: 3e3, system: OVERALL_SYSTEM, messages: [{ role: "user", content }] },
    source: { path: null, name: "" }
  };
}
var API = "https://api.anthropic.com/v1";
function apiHeaders() {
  return { "x-api-key": env().key, "anthropic-version": "2023-06-01", "content-type": "application/json" };
}
function apiError(status, out) {
  let msg = out && out.error && out.error.message || "", hint = status === 401 ? "API \uD0A4\uB97C \uD655\uC778\uD558\uC138\uC694." : /credit|billing|balance/i.test(msg) ? "Anthropic \uCF58\uC194\uC5D0\uC11C \uACB0\uC81C(\uD06C\uB808\uB527)\uB97C \uD655\uC778\uD558\uC138\uC694." : status === 404 ? "\uBAA8\uB378 \uC774\uB984\uC744 \uD655\uC778\uD558\uC138\uC694." : status === 429 ? "\uC694\uCCAD\uC774 \uB9CE\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694." : status === 529 ? "AI \uC11C\uBC84\uAC00 \uBC14\uC069\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694." : "", e = new Error(`AI \uC694\uCCAD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. ${hint} (${status}: ${msg})`);
  return e.status = 502, e;
}
async function createBatch(requests) {
  let r = await fetch(`${API}/messages/batches`, { method: "POST", headers: apiHeaders(), body: JSON.stringify({ requests }) }), out = await r.json();
  if (!r.ok) throw apiError(r.status, out);
  return out;
}
var newKey = () => "k" + Date.now().toString(36) + Math.random().toString(36).slice(2, 12);

// ../../../mnt/user-data/outputs/research-site/server-src/ai-batch.js
async function handler(req, res) {
  if (req.method !== "POST") return send(res, 405, { error: "POST\uB9CC \uBC1B\uC2B5\uB2C8\uB2E4." });
  try {
    let db = supa(req), me = await db.rpc("jwt_email"), { part, student_ids } = readBody(req);
    if (![...PARTS, "overall"].includes(part)) return send(res, 400, { error: "\uC54C \uC218 \uC5C6\uB294 \uC694\uC57D \uD30C\uD2B8\uC785\uB2C8\uB2E4." });
    let limit = part === "overall" ? 20 : 5, ids = (Array.isArray(student_ids) ? student_ids : []).slice(0, limit), requests = [], rows = [], skipped = [];
    for (let id of ids) {
      if (!await canManage(db, id)) {
        skipped.push({ id, why: "\uAD8C\uD55C \uC5C6\uC74C" });
        continue;
      }
      let [st] = await db.select("students", `id=eq.${id}&select=id,name,sid,email,topic,field,career,extra_required`);
      if (!st || part === "extra" && !st.extra_required) continue;
      let existing = (await db.select("ai_summaries", `student_id=eq.${id}&part=eq.${part}&select=id,status,gen_count`))[0];
      if (existing && (existing.status === "queued" || existing.status === "done")) continue;
      let built;
      if (part === "overall") {
        let [aiRows, evs, subs] = await Promise.all([
          db.select("ai_summaries", `student_id=eq.${id}&select=part,status,summary,error`),
          db.select("events", `student_id=eq.${id}&select=stage,kind,status,note,created_at&order=created_at.asc`),
          db.select("submissions", `student_id=eq.${id}&select=stage,status`)
        ]);
        built = buildOverall(st, aiRows, evs, subs);
      } else {
        let [sub] = await db.select("submissions", `student_id=eq.${id}&stage=eq.${part}&select=file_path,file_name,status`), evs = await db.select("events", `student_id=eq.${id}&stage=eq.${part}&select=stage,kind,status,note,file_path,created_at&order=created_at.asc`);
        built = await buildPart(db, st, part, sub, evs);
      }
      if (built.skip) {
        (part === "overall" || !/제출 파일 없음/.test(built.skip)) && rows.push({ student_id: id, part, status: "skipped", error: built.skip, model: MODEL[part], created_by: me }), skipped.push({ id, why: built.skip });
        continue;
      }
      let key = newKey();
      requests.push({ custom_id: key, params: built.params }), rows.push({ student_id: id, part, status: "queued", model: MODEL[part], request_key: key, source_path: built.source.path, source_name: built.source.name, error: null, created_by: me });
    }
    let batchId = null;
    if (requests.length) {
      let b = await createBatch(requests);
      batchId = b.id, await db.insert("ai_batches", [{ id: b.id, part, status: "in_progress", request_count: requests.length, created_by: me }]), rows.forEach((r) => {
        r.status === "queued" && (r.batch_id = b.id);
      });
    }
    return rows.length && await db.upsert("ai_summaries", rows.map((r) => ({
      student_id: r.student_id,
      part: r.part,
      status: r.status,
      model: r.model,
      error: r.error || null,
      created_by: r.created_by,
      request_key: r.request_key || null,
      source_path: r.source_path || null,
      source_name: r.source_name || null,
      batch_id: r.batch_id || null
    })), "student_id,part"), send(res, 200, { batch_id: batchId, sent: requests.length, skipped });
  } catch (e) {
    return send(res, e.status || 500, { error: e.message || String(e) });
  }
}
if (module.exports && module.exports.default) module.exports = module.exports.default;
