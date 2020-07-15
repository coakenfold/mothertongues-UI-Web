/*

The MIT License (MIT)

Copyright (c) 2014 Dylon Edwards

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
(function() {
  var r, p, l;
  p = (function() {
    function a() {
      this.id = a.e;
      a.e += 1;
      this.is_final = !1;
      this.edges = {};
    }
    a.e = 0;
    a.prototype.D = function(a, c, b) {
      for (var g = 0, m; g < b; )
        (m = (g + b) >> 1), a[m] < c ? (g = m + 1) : (b = m);
      return g;
    };
    a.prototype.toString = function() {
      var a, c, b, g;
      c = [];
      g = this.edges;
      for (b in g)
        (a = g[b]),
          (a = b + a.id.toString()),
          c.splice(this.D(c, a, c.length), 0, a);
      return +this.is_final + c.join('');
    };
    return a;
  })();
  r = (function() {
    function a(a) {
      var c, b, g;
      if (!a || 'number' !== typeof a.length)
        throw Error('Expected dictionary to be array-like');
      this.j = '';
      this.root = new p();
      this.k = [];
      this.F = {};
      b = 0;
      for (g = a.length; b < g; b++) (c = a[b]), this.insert(c);
      this.finish();
    }
    a.prototype.insert = function(a) {
      var c, b, g, m, l;
      b = 0;
      c = this.j;
      for (
        g = a.length < c.length ? a.length : c.length;
        b < g && a[b] === c[b];

      )
        b += 1;
      this.i(b);
      l = this.k;
      for (
        m = 0 === l.length ? this.root : l[l.length - 1][2];
        void 0 !== (c = a[b]);

      )
        (g = new p()), (m.edges[c] = g), l.push([m, c, g]), (m = g), (b += 1);
      m.is_final = !0;
      this.j = a;
    };
    a.prototype.finish = function() {
      this.i(0);
    };
    a.prototype.i = function(a) {
      var c, b, g, m, l, p, s;
      l = this.F;
      s = this.k;
      for (m = s.length; m > a; )
        (b = s.pop()),
          (p = b[0]),
          (c = b[1]),
          (b = b[2]),
          (g = b.toString()),
          g in l ? (p.edges[c] = l[g]) : (l[g] = b),
          (m -= 1);
    };
    a.prototype.accepts = function(a) {
      var c, b, g, m;
      b = this.root;
      g = 0;
      for (m = a.length; g < m; g++)
        if (((c = a[g]), (b = b.edges[c]), !b)) return !1;
      return b.is_final;
    };
    return a;
  })();
  l =
    'object' === typeof exports
      ? exports
      : 'object' === typeof window
      ? window
      : this;
  l.levenshtein || (l.levenshtein = {});
  l.levenshtein.DawgNode = p;
  l.levenshtein.Dawg = r;
}.call(this));
(function() {
  var r, p;
  r = (function() {
    function l(a, n, c) {
      n || (n = []);
      if ('number' !== typeof n.length) throw Error('heap must be array-like');
      'number' !== typeof c && (c = n ? n.length : 0);
      if ('function' !== typeof a) throw Error('f must be a function');
      if (!(0 <= c && c <= n.length))
        throw Error(
          'Expected 0 <= heap length = ' +
            c +
            ' <= ' +
            n.length +
            ' = heap size'
        );
      this.b = a;
      this.heap = n;
      this.length = c;
      this.f();
    }
    l.prototype.g = function(a) {
      return 0 < a ? ((a + 1) >> 1) - 1 : 0;
    };
    l.prototype.q = function(a) {
      return (a << 1) + 1;
    };
    l.prototype.u = function(a) {
      return (a << 1) + 2;
    };
    l.prototype.a = function(a) {
      var n, c, b;
      c = this.q(a);
      b = this.u(a);
      n = this.heap;
      c = c < this.length && 0 < this.b(n[c], n[a]) ? c : a;
      b < this.length && 0 < this.b(n[b], n[c]) && (c = b);
      c !== a && ((b = n[a]), (n[a] = n[c]), (n[c] = b), this.a(c));
    };
    l.prototype.f = function() {
      var a;
      for (a = this.length >> 1; 0 <= a; ) this.a(a), (a -= 1);
    };
    l.prototype.increase_key = function(a, n) {
      var c, b, g, m, l;
      c = this.b;
      b = this.heap;
      if (0 > c(n, b[a]))
        throw Error(
          'Expected ' + n + ' to be at least heap[' + a + '] = ' + b[a]
        );
      b[a] = n;
      m = this.g;
      for (g = m(a); a && 0 > c(b[g], b[a]); )
        (l = b[a]), (b[a] = b[g]), (b[g] = l), (a = g), (g = m(a));
      return null;
    };
    l.prototype.sort = function() {
      var a, n, c;
      this.f();
      n = this.length - 1;
      for (a = this.heap; 0 <= n; )
        (c = a[0]),
          (a[0] = a[n]),
          (a[n] = c),
          (this.length -= 1),
          this.a(0),
          (n -= 1);
      return null;
    };
    l.prototype.peek = function() {
      return this.length ? this.heap[0] : null;
    };
    l.prototype.pop = function() {
      var a, n;
      return this.length
        ? ((a = this.heap),
          (n = a[0]),
          (a[0] = a[this.length - 1]),
          (this.length -= 1),
          this.a(0),
          n)
        : null;
    };
    l.prototype.push = function(a) {
      var n, c, b, g, m;
      b = this.length;
      this.length += 1;
      m = this.g;
      g = m(b);
      c = this.heap;
      for (n = this.b; 0 < b && 0 > n(c[g], a); )
        (c[b] = c[g]), (b = g), (g = m(b));
      c[b] = a;
      return null;
    };
    return l;
  })();
  p =
    'object' === typeof exports
      ? exports
      : 'object' === typeof window
      ? window
      : this;
  p.levenshtein || (p.levenshtein = {});
  p.levenshtein.MaxHeap = r;
}.call(this));
(function() {
  var r,
    p,
    l = {}.hasOwnProperty;
  r = (function() {
    function a(a) {
      for (var c in a) l.call(a, c) && (this[c] = a[c]);
    }
    a.prototype.minimum_distance = function() {
      throw Error('minimum_distance not specified on construction');
    };
    a.prototype.build_matches = function() {
      throw Error('build_matches not specified on construction');
    };
    a.prototype.initial_state = function() {
      throw Error('initial_state not specified on construction');
    };
    a.prototype.root = function() {
      throw Error('root not specified on construction');
    };
    a.prototype.edges = function() {
      throw Error('edges not specified on construction');
    };
    a.prototype.is_final = function() {
      throw Error('is_final not specified on construction');
    };
    a.prototype.transform = function() {
      throw Error('transform not specified on construction');
    };
    a.prototype.transition_for_state = function() {
      throw Error('transition_for_state not specified on construction');
    };
    a.prototype.characteristic_vector = function() {
      throw Error('characteristic_vector not specified on construction');
    };
    a.prototype.push = function() {
      throw Error('push not specified on construction');
    };
    a.prototype.default_edit_distance = function() {
      throw Error('default_edit_distance not specified on construction');
    };
    a.prototype.transduce = function(a, c) {
      var b, g, m, l, p, s, r, u, t, q, e, d, f;
      'number' !== typeof c && (c = this.default_edit_distance());
      d = a.length;
      e = this.transition_for_state(c);
      r = this.build_matches();
      for (q = [['', this.root(), this.initial_state()]]; 0 < q.length; )
        for (f in ((b = q.pop()),
        (g = b[0]),
        (t = b[1]),
        (b = b[2]),
        (s = b[0][0]),
        (m = 2 * c + 1),
        (l = d - s),
        (m = m < l ? m : l),
        (t = this.edges(t)),
        t))
          if (
            ((p = t[f]),
            (l = this.characteristic_vector(f, a, m, s)),
            (u = e(b, l)))
          )
            (l = g + f),
              q.push([l, p, u]),
              this.is_final(p) &&
                ((p = this.minimum_distance(u, d)),
                p <= c && this.push(r, [l, p]));
      return this.transform(r);
    };
    return a;
  })();
  p =
    'object' === typeof exports
      ? exports
      : 'object' === typeof window
      ? window
      : this;
  p.levenshtein || (p.levenshtein = {});
  p.levenshtein.Transducer = r;
}.call(this));
(function() {
  function r(a, t) {
    return function() {
      return a.apply(t, arguments);
    };
  }
  var p,
    l,
    a,
    n,
    c,
    b,
    g,
    m,
    v,
    w,
    s = {}.hasOwnProperty,
    x = [].slice;
  m =
    'object' === typeof exports
      ? exports
      : 'object' === typeof window
      ? window
      : this;
  m.levenshtein || (m.levenshtein = {});
  'function' === typeof require
    ? ((a = require('../collection/max-heap').h.H),
      (n = require('./transducer').h.I),
      (l = require('../collection/dawg').h.G))
    : ((a = m.levenshtein.MaxHeap),
      (n = m.levenshtein.Transducer),
      (l = m.levenshtein.Dawg));
  g = {
    _dictionary: new l([]),
    _algorithm: 'standard',
    _sort_candidates: !0,
    _case_insensitive_sort: !0,
    _include_distance: !0,
    _maximum_candidates: Infinity,
    _custom_comparator: null,
    _custom_transform: null,
    _default_edit_distance: Infinity
  };
  p = (function() {
    function b(a, q) {
      this.d = r(this.d, this);
      var e, d;
      if (a instanceof b) {
        for (d in g) s.call(g, d) && (this[d] = a[d]);
        for (e in q) s.call(q, e) && ((d = q[e]), (this['_' + e] = d));
      }
    }
    b.prototype.s = function() {
      return 'standard' === this._algorithm
        ? function(a, q) {
            var e, d, f, h, b;
            f = Infinity;
            h = 0;
            for (b = a.length; h < b; h++)
              (d = a[h]),
                (e = d[0]),
                (d = d[1]),
                (e = q - e + d),
                e < f && (f = e);
            return f;
          }
        : function(a, q) {
            var e, d, f, h, b, k;
            f = Infinity;
            b = 0;
            for (k = a.length; b < k; b++)
              (h = a[b]),
                (d = h[0]),
                (e = h[1]),
                (h = h[2]),
                (e = q - d + e),
                1 !== h && e < f && (f = e);
            return f;
          };
    };
    b.prototype.o = function() {
      var a;
      return 'function' === typeof this._custom_comparator
        ? this._custom_comparator
        : this._sort_candidates
        ? ((a = function(a, e) {
            return a[1] - e[1];
          }),
          (a = (function(a) {
            return function(e, d) {
              return (
                a(e, d) || e[0].toLowerCase().localeCompare(d[0].toLowerCase())
              );
            };
          })(a)),
          this._case_insensitive_sort ||
            (a = (function(a) {
              return function(e, d) {
                return a(e, d) || e[0].localeCompare(d[0]);
              };
            })(a)),
          a)
        : function() {
            return 0;
          };
    };
    b.prototype.A = function() {
      var a;
      a =
        'function' === typeof this._custom_transform
          ? this._custom_transform
          : !1 === this._include_distance
          ? function(a) {
              return a[0];
            }
          : void 0;
      return (function(q) {
        return function(e) {
          var d;
          if (isFinite(q._maximum_candidates)) e.sort(), (e = e.heap);
          else if (q._sort_candidates)
            for (d = e, e = []; null !== d.peek(); ) e.push(d.pop());
          if ('function' === typeof a)
            for (d = -1; ++d < e.length; ) e[d] = a(e[d]);
          return e;
        };
      })(this);
    };
    b.prototype.p = function() {
      return 'standard' === this._algorithm ? [[0, 0]] : [[0, 0, 0]];
    };
    b.prototype.v = function() {
      var a, q;
      a = function(a, d) {
        return a[0] - d[0] || a[1] - d[1];
      };
      if ('transposition' === (q = this._algorithm) || 'merge_and_split' === q)
        a = (function(a) {
          return function(d, f) {
            return a(d, f) || d[2] - f[2];
          };
        })(a);
      return function(e) {
        return e.sort(a);
      };
    };
    b.prototype.c = function(a, q, e) {
      var d;
      for (d = 0; d < q; ) {
        if (a[e + d]) return d;
        d += 1;
      }
      return -1;
    };
    b.prototype.B = function() {
      switch (this._algorithm) {
        case 'standard':
          return (function(a) {
            return function(q) {
              return function(e, d, f) {
                var h, b, k;
                k = e[0];
                e = e[1];
                b = k - f;
                h = d.length;
                return e < q
                  ? b <= h - 2
                    ? ((f = q - e + 1),
                      (h -= b),
                      (d = a.c(d, f < h ? f : h, b)),
                      0 === d
                        ? [[k + 1, e]]
                        : 0 < d
                        ? [
                            [k, e + 1],
                            [k + 1, e + 1],
                            [k + d + 1, e + d]
                          ]
                        : [
                            [k, e + 1],
                            [k + 1, e + 1]
                          ])
                    : b === h - 1
                    ? d[b]
                      ? [[k + 1, e]]
                      : [
                          [k, e + 1],
                          [k + 1, e + 1]
                        ]
                    : [[k, e + 1]]
                  : e === q
                  ? b <= h - 1
                    ? d[b]
                      ? [[k + 1, q]]
                      : null
                    : null
                  : null;
              };
            };
          })(this);
        case 'transposition':
          return (function(a) {
            return function(b) {
              return function(e, d, f) {
                var h, c, k;
                k = e[0];
                c = e[1];
                e = e[2];
                f = k - f;
                h = d.length;
                return 0 === c && 0 < b
                  ? f <= h - 2
                    ? ((e = b - c + 1),
                      (h -= f),
                      (d = a.c(d, e < h ? e : h, f)),
                      0 === d
                        ? [[k + 1, 0, 0]]
                        : 1 === d
                        ? [
                            [k, 1, 0],
                            [k, 1, 1],
                            [k + 1, 1, 0],
                            [k + 2, 1, 0]
                          ]
                        : 1 < d
                        ? [
                            [k, 1, 0],
                            [k + 1, 1, 0],
                            [k + d + 1, d, 0]
                          ]
                        : [
                            [k, 1, 0],
                            [k + 1, 1, 0]
                          ])
                    : f === h - 1
                    ? d[f]
                      ? [[k + 1, 0, 0]]
                      : [
                          [k, 1, 0],
                          [k + 1, 1, 0]
                        ]
                    : [[k, 1, 0]]
                  : 1 <= c && c < b
                  ? f <= h - 2
                    ? 0 === e
                      ? ((e = b - c + 1),
                        (h -= f),
                        (d = a.c(d, e < h ? e : h, f)),
                        0 === d
                          ? [[k + 1, c, 0]]
                          : 1 === d
                          ? [
                              [k, c + 1, 0],
                              [k, c + 1, 1],
                              [k + 1, c + 1, 0],
                              [k + 2, c + 1, 0]
                            ]
                          : 1 < d
                          ? [
                              [k, c + 1, 0],
                              [k + 1, c + 1, 0],
                              [k + d + 1, c + d, 0]
                            ]
                          : [
                              [k, c + 1, 0],
                              [k + 1, c + 1, 0]
                            ])
                      : d[f]
                      ? [[k + 2, c, 0]]
                      : null
                    : f === h - 1
                    ? d[f]
                      ? [[k + 1, c, 0]]
                      : [
                          [k, c + 1, 0],
                          [k + 1, c + 1, 0]
                        ]
                    : [[k, c + 1, 0]]
                  : f <= h - 1 && 0 === e
                  ? d[f]
                    ? [[k + 1, b, 0]]
                    : null
                  : f <= h - 2 && 1 === e
                  ? d[f]
                    ? [[k + 2, b, 0]]
                    : null
                  : null;
              };
            };
          })(this);
        case 'merge_and_split':
          return (function() {
            return function(a) {
              return function(b, e, d) {
                var f, h, c;
                h = b[0];
                f = b[1];
                b = b[2];
                d = h - d;
                c = e.length;
                return 0 === f && 0 < a
                  ? d <= c - 2
                    ? e[d]
                      ? [[h + 1, f, 0]]
                      : [
                          [h, f + 1, 0],
                          [h, f + 1, 1],
                          [h + 1, f + 1, 0],
                          [h + 2, f + 1, 0]
                        ]
                    : d === c - 1
                    ? e[d]
                      ? [[h + 1, f, 0]]
                      : [
                          [h, f + 1, 0],
                          [h, f + 1, 1],
                          [h + 1, f + 1, 0]
                        ]
                    : [[h, f + 1, 0]]
                  : f < a
                  ? d <= c - 2
                    ? 0 === b
                      ? e[d]
                        ? [[h + 1, f, 0]]
                        : [
                            [h, f + 1, 0],
                            [h, f + 1, 1],
                            [h + 1, f + 1, 0],
                            [h + 2, f + 1, 0]
                          ]
                      : [[h + 1, f, 0]]
                    : d === c - 1
                    ? 0 === b
                      ? e[d]
                        ? [[h + 1, f, 0]]
                        : [
                            [h, f + 1, 0],
                            [h, f + 1, 1],
                            [h + 1, f + 1, 0]
                          ]
                      : [[h + 1, f, 0]]
                    : [[h, f + 1, 0]]
                  : d <= c - 1
                  ? 0 === b
                    ? e[d]
                      ? [[h + 1, a, 0]]
                      : null
                    : [[h + 1, f, 0]]
                  : null;
              };
            };
          })(this);
      }
    };
    b.prototype.l = function(a, b, e) {
      var d, f;
      for (f = a.length; e < f; )
        (d = (e + f) >> 1), b < a[d][1] ? (f = d) : (e = d + 1);
      return e;
    };
    b.prototype.d = function() {
      var a, b;
      b = this.w();
      a = this.l;
      switch (this._algorithm) {
        case 'standard':
          return function(e) {
            var d, f, h, c, k, g;
            for (k = 0; (d = e[k]); ) {
              h = d[0];
              d = d[1];
              for (g = a(e, d, k); (f = e[g]); )
                (c = f[0]),
                  (f = f[1]),
                  b(h, d, c, f) ? e.splice(g, 1) : (g += 1);
              k += 1;
            }
          };
        case 'transposition':
          return function(e) {
            var d, f, h, c, k, g, l, m;
            for (k = 0; (f = e[k]); ) {
              h = f[0];
              d = f[1];
              l = f[2];
              for (g = a(e, d, k); (m = e[g]); )
                (c = m[0]),
                  (f = m[1]),
                  (m = m[2]),
                  b(h, d, l, c, f, m, g) ? e.splice(g, 1) : (g += 1);
              k += 1;
            }
          };
        case 'merge_and_split':
          return function(e) {
            var d, f, h, c, k, g, l, m;
            for (k = 0; (f = e[k]); ) {
              h = f[0];
              d = f[1];
              l = f[2];
              for (g = a(e, d, k); (m = e[g]); )
                (c = m[0]),
                  (f = m[1]),
                  (m = m[2]),
                  b(h, d, l, c, f, m, g) ? e.splice(g, 1) : (g += 1);
              k += 1;
            }
          };
      }
    };
    b.prototype.w = function() {
      switch (this._algorithm) {
        case 'standard':
          return function(a, b, e, d) {
            return ((a < e && e - a) || a - e) <= d - b;
          };
        case 'transposition':
          return function(a, b, e, d, f, h, c) {
            return 1 === e
              ? 1 === h
                ? a === d
                : f === c && a === d
              : 1 === h
              ? (d < a ? a - d - 1 : d - a + 1) <= f - b
              : ((a < d && d - a) || a - d) <= f - b;
          };
        case 'merge_and_split':
          return function(a, b, e, d, f, c) {
            return 1 === e && 0 === c
              ? !1
              : ((a < d && d - a) || a - d) <= f - b;
          };
      }
    };
    b.prototype.m = function() {
      return this._algorithm
        ? function(a, b) {
            var e, d, f, c, g, k;
            d = b[0];
            e = b[1];
            c = 0;
            for (k = a.length; c < k; )
              (f = (c + k) >> 1),
                (g = a[f]),
                0 < (e - g[1] || d - g[0]) ? (c = f + 1) : (k = f);
            return c;
          }
        : function(a, b) {
            var e, d, f, c, g, k, l;
            d = b[0];
            e = b[1];
            l = b[2];
            c = 0;
            for (k = a.length; c < k; )
              (f = (c + k) >> 1),
                (g = a[f]),
                0 < (e - g[1] || d - g[0] || l - g[2]) ? (c = f + 1) : (k = f);
            return c;
          };
    };
    b.prototype.r = function() {
      var a;
      a = this.m();
      return 'standard' === this._algorithm
        ? function(b, e) {
            var d, f, c, g, k;
            g = 0;
            for (k = e.length; g < k; g++)
              (c = e[g]),
                (f = a(b, c)),
                (d = b[f])
                  ? (d[0] === c[0] && d[1] === c[1]) || b.splice(f, 0, c)
                  : b.push(c);
          }
        : function(b, e) {
            var d, c, h, g, k;
            g = 0;
            for (k = e.length; g < k; g++)
              (h = e[g]),
                (c = a(b, h)),
                (d = b[c])
                  ? (d[0] === h[0] && d[1] === h[1] && d[2] === h[2]) ||
                    b.splice(c, 0, h)
                  : b.push(h);
          };
    };
    b.prototype.C = function() {
      var a, b, e, d;
      a = this.r();
      d = this.d();
      e = this.B();
      b = this.v();
      return function(c) {
        var h;
        h = e(c);
        return (function() {
          return function(c, e) {
            var f, g, l, m, n;
            g = c[0][0];
            l = [];
            m = 0;
            for (n = c.length; m < n; m++)
              (f = c[m]), (f = h(f, e, g)) && a(l, f);
            d(l);
            return 0 < l.length ? (b(l), l) : null;
          };
        })(this);
      };
    };
    b.prototype.n = function() {
      return function(a, b, c, d) {
        var f, h;
        h = [];
        for (f = 0; f < c; ) h.push(a === b[d + f]), (f += 1);
        return h;
      };
    };
    b.prototype.t = function(a) {
      var b;
      b = this._maximum_candidates;
      return isFinite(b)
        ? function(c, d) {
            c.length === b
              ? 0 > a(d, c.peek()) && (c.pop(), c.push(d))
              : c.push(d);
            return c;
          }
        : function(a, b) {
            a.push(b);
            return a;
          };
    };
    b.prototype.build = function() {
      var b;
      b = this.o();
      return new n({
        minimum_distance: this.s(),
        build_matches: (function(c) {
          return function() {
            return isFinite(c._maximum_candidates)
              ? function() {
                  return new a(b);
                }
              : c._sort_candidates
              ? function() {
                  return new a(function(a, c) {
                    return -b(a, c);
                  });
                }
              : function() {
                  return [];
                };
          };
        })(this)(),
        transition_for_state: this.C(),
        characteristic_vector: this.n(),
        edges: function(a) {
          return a.edges;
        },
        is_final: function(a) {
          return a.is_final;
        },
        root: (function(a) {
          return function() {
            return a.root;
          };
        })(this._dictionary),
        initial_state: (function(a) {
          return (function() {
            return function() {
              return a;
            };
          })(this);
        })(this.p()),
        push: this.t(b),
        default_edit_distance: (function(a) {
          return function() {
            return a.default_edit_distance();
          };
        })(this),
        transform: this.A()
      });
    };
    return b;
  })();
  p.prototype.transducer = p.prototype.build;
  for (c in g) s.call(g, c) && ((b = g[c]), (p.prototype[c] = b));
  w = function() {};
  v = function(a) {
    return a;
  };
  b = c = function(a, b, c, e) {
    var d, f, h, g;
    c = [b.validate, b.translate];
    f = c[0];
    d = c[1];
    'string' === typeof a && (a = [a]);
    if (!(a instanceof Array))
      throw Error('Expected "properties" to be of type Array');
    if (void 0 !== f && 'function' !== typeof f)
      throw Error('Expected "validate" to be of type Function');
    if (void 0 !== d && 'function' !== typeof d)
      throw Error('Expected "translate" to be of type Function');
    f || (f = w);
    d || (d = v);
    b = function(a) {
      var b;
      b = '_' + a;
      p.prototype[a] = function() {
        var c, e;
        e = arguments[0];
        c = 2 <= arguments.length ? x.call(arguments, 1) : [];
        if (void 0 === e) return this[b];
        f(e, c, a);
        e = d(e, c, a);
        c = {};
        c[a] = e;
        return new p(this, c);
      };
    };
    e = h = 0;
    for (g = a.length; h < g; e = ++h) {
      c = a[e];
      if ('string' !== typeof c)
        throw Error(
          'Expected property at index ' +
            e +
            ' of properties to be of type String'
        );
      b(c);
    }
    return !0;
  };
  b('dictionary', {
    validate: function(a) {
      if (!(a instanceof Array || a instanceof l))
        throw Error('dictionary must be either an Array or Dawg');
    },
    translate: function(a, b) {
      var c;
      c = b[0];
      a instanceof Array && (!0 !== c && a.sort(), (a = new l(a)));
      return a;
    }
  });
  b('algorithm', {
    validate: function(a) {
      if ('standard' !== a && 'transposition' !== a && 'merge_and_split' !== a)
        throw Error(
          'algorithm must be standard, transposition, or merge_and_split'
        );
    }
  });
  c(['sort_candidates', 'case_insensitive_sort', 'include_distance'], {
    validate: function(a, b, c) {
      if ('boolean' !== typeof a)
        throw Error('Expected type of "' + c + '" to be boolean');
    }
  });
  c(['maximum_candidates', 'default_edit_distance'], {
    validate: function(a, b, c) {
      if (!('number' === typeof a && 0 <= a))
        throw Error('Expected "' + c + '" to be a non-negative number');
    }
  });
  c(['custom_comparator', 'custom_transform'], {
    validate: function(a, b, c) {
      if ('function' !== typeof a)
        throw Error('Expected "' + c + '" to be a function');
    }
  });
  m.levenshtein.Builder = p;
}.call(this));
