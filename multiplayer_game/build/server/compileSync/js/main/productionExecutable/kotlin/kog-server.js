(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'vision.gears:server'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'vision.gears:server'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'vision.gears:server'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'vision.gears:server'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'vision.gears:server'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'vision.gears:server'.");
    }
    root['vision.gears:server'] = factory(typeof this['vision.gears:server'] === 'undefined' ? {} : this['vision.gears:server'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.f4;
  var objectMeta = kotlin_kotlin.$_$.e4;
  var setMetadataFor = kotlin_kotlin.$_$.g4;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var FloatSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var Unit_instance = kotlin_kotlin.$_$.i2;
  var equals = kotlin_kotlin.$_$.l3;
  var Default_getInstance = kotlin_kotlin.$_$.z1;
  var THROW_CCE = kotlin_kotlin.$_$.e5;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var VOID = kotlin_kotlin.$_$.c;
  var classMeta = kotlin_kotlin.$_$.k3;
  var Comparable = kotlin_kotlin.$_$.z4;
  var HashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.h;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var fillArrayVal = kotlin_kotlin.$_$.m3;
  var numberToInt = kotlin_kotlin.$_$.c4;
  var sort = kotlin_kotlin.$_$.x2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.k;
  var Pair = kotlin_kotlin.$_$.d5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var println = kotlin_kotlin.$_$.e3;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var Error_init_$Create$ = kotlin_kotlin.$_$.o;
  var isInterface = kotlin_kotlin.$_$.y3;
  var interfaceMeta = kotlin_kotlin.$_$.r3;
  var objectCreate = kotlin_kotlin.$_$.d4;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var JsonEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var JsonArrayBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var add = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var get_lastIndex = kotlin_kotlin.$_$.u2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NetObject, 'NetObject', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(GridEntry, 'GridEntry', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(GameState, 'GameState', classMeta, VOID, VOID, GameState, VOID, {0: $serializer_getInstance_0});
  function set(other) {
    if (isInterface(other, UniformFloat)) {
      var inductionVariable = 0;
      var last = this.us().length;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'org.khronos.webgl.set' call
          var this_0 = this.us();
          var tmp;
          if (i < other.us().length) {
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp = other.us()[i];
          } else {
            tmp = 0.0;
          }
          // Inline function 'kotlin.js.asDynamic' call
          this_0[i] = tmp;
        }
         while (inductionVariable < last);
    } else {
      throw Error_init_$Create$('Cannot set a uniform of floats from a non-float uniform.');
    }
    return this;
  }
  setMetadataFor(UniformFloat, 'UniformFloat', interfaceMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Vec1, 'Vec1', classMeta, VOID, [UniformFloat], Vec1_init_$Create$);
  setMetadataFor(Vec2Serializer, 'Vec2Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Vec2, 'Vec2', classMeta, VOID, [UniformFloat], Vec2_init_$Create$, VOID, {0: Vec2Serializer_getInstance});
  //endregion
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('NetObject', this, 18);
    tmp0_serialDesc.pi('playerId', false);
    tmp0_serialDesc.pi('meshName', false);
    tmp0_serialDesc.pi('label', true);
    tmp0_serialDesc.pi('position', true);
    tmp0_serialDesc.pi('roll', true);
    tmp0_serialDesc.pi('velocity', true);
    tmp0_serialDesc.pi('angVelocity', true);
    tmp0_serialDesc.pi('aheadThrust', true);
    tmp0_serialDesc.pi('backThrust', true);
    tmp0_serialDesc.pi('rightThrust', true);
    tmp0_serialDesc.pi('leftThrust', true);
    tmp0_serialDesc.pi('ccwTorque', true);
    tmp0_serialDesc.pi('cwTorque', true);
    tmp0_serialDesc.pi('collisionRadius', true);
    tmp0_serialDesc.pi('cooldown', true);
    tmp0_serialDesc.pi('lifetime', true);
    tmp0_serialDesc.pi('armedTime', true);
    tmp0_serialDesc.pi('armed', true);
    this.fr_1 = tmp0_serialDesc;
  }
  protoOf($serializer).dd = function () {
    return this.fr_1;
  };
  protoOf($serializer).ri = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), Vec2Serializer_getInstance(), FloatSerializer_getInstance(), Vec2Serializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  protoOf($serializer).gr = function (encoder, value) {
    var tmp0_desc = this.fr_1;
    var tmp1_output = encoder.ue(tmp0_desc);
    tmp1_output.mf(tmp0_desc, 0, value.hr_1);
    tmp1_output.rf(tmp0_desc, 1, value.ir_1);
    if (tmp1_output.ag(tmp0_desc, 2) ? true : !(value.jr_1 == null)) {
      tmp1_output.vf(tmp0_desc, 2, StringSerializer_getInstance(), value.jr_1);
    }
    if (tmp1_output.ag(tmp0_desc, 3) ? true : !equals(value.kr_1, Vec2_init_$Create$(128.0, 128.0 + value.hr_1 * 2.2))) {
      tmp1_output.tf(tmp0_desc, 3, Vec2Serializer_getInstance(), value.kr_1);
    }
    var tmp;
    if (tmp1_output.ag(tmp0_desc, 4)) {
      tmp = true;
    } else {
      var tmp_0 = value.lr_1;
      // Inline function 'vision.gears.webglmath.Vec1.x' call
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_1();
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_1();
      var minVal = Vec1_init_$Create$(-3.14);
      var maxVal = Vec1_init_$Create$(3.14);
      var tmp_1 = Default_getInstance().z9();
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = maxVal.zr_1[0];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = tmp_1 * (tmp_2 - minVal.zr_1[0]);
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$5 = minVal.zr_1[0];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$10 = Vec1_init_$Create$(tmp_3 + tmp$ret$5).zr_1[0];
      tmp = !equals(tmp_0, tmp$ret$10);
    }
    if (tmp) {
      tmp1_output.of(tmp0_desc, 4, value.lr_1);
    }
    var tmp_4;
    if (tmp1_output.ag(tmp0_desc, 5)) {
      tmp_4 = true;
    } else {
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_2();
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_2();
      var minVal_0 = Vec2_init_$Create$(-0.1, -0.1);
      var maxVal_0 = Vec2_init_$Create$(0.1, 0.1);
      var tmp_5 = Default_getInstance().z9();
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_6 = maxVal_0.as_1[0];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_7 = tmp_5 * (tmp_6 - minVal_0.as_1[0]);
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_8 = tmp_7 + minVal_0.as_1[0];
      var tmp_9 = Default_getInstance().z9();
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_10 = maxVal_0.as_1[1];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_11 = tmp_9 * (tmp_10 - minVal_0.as_1[1]);
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$22 = minVal_0.as_1[1];
      var tmp$ret$24 = Vec2_init_$Create$(tmp_8, tmp_11 + tmp$ret$22);
      tmp_4 = !equals(value.mr_1, tmp$ret$24);
    }
    if (tmp_4) {
      tmp1_output.tf(tmp0_desc, 5, Vec2Serializer_getInstance(), value.mr_1);
    }
    var tmp_12;
    if (tmp1_output.ag(tmp0_desc, 6)) {
      tmp_12 = true;
    } else {
      var tmp_13 = value.nr_1;
      // Inline function 'vision.gears.webglmath.Vec1.x' call
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_1();
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_1();
      var minVal_1 = Vec1_init_$Create$(-0.314);
      var maxVal_1 = Vec1_init_$Create$(0.314);
      var tmp_14 = Default_getInstance().z9();
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_15 = maxVal_1.zr_1[0];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_16 = tmp_14 * (tmp_15 - minVal_1.zr_1[0]);
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$30 = minVal_1.zr_1[0];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$35 = Vec1_init_$Create$(tmp_16 + tmp$ret$30).zr_1[0];
      tmp_12 = !equals(tmp_13, tmp$ret$35);
    }
    if (tmp_12) {
      tmp1_output.of(tmp0_desc, 6, value.nr_1);
    }
    if (tmp1_output.ag(tmp0_desc, 7) ? true : !equals(value.or_1, 0.0)) {
      tmp1_output.of(tmp0_desc, 7, value.or_1);
    }
    if (tmp1_output.ag(tmp0_desc, 8) ? true : !equals(value.pr_1, 0.0)) {
      tmp1_output.of(tmp0_desc, 8, value.pr_1);
    }
    if (tmp1_output.ag(tmp0_desc, 9) ? true : !equals(value.qr_1, 0.0)) {
      tmp1_output.of(tmp0_desc, 9, value.qr_1);
    }
    if (tmp1_output.ag(tmp0_desc, 10) ? true : !equals(value.rr_1, 0.0)) {
      tmp1_output.of(tmp0_desc, 10, value.rr_1);
    }
    if (tmp1_output.ag(tmp0_desc, 11) ? true : !equals(value.sr_1, 0.0)) {
      tmp1_output.of(tmp0_desc, 11, value.sr_1);
    }
    if (tmp1_output.ag(tmp0_desc, 12) ? true : !equals(value.tr_1, 0.0)) {
      tmp1_output.of(tmp0_desc, 12, value.tr_1);
    }
    if (tmp1_output.ag(tmp0_desc, 13) ? true : !equals(value.ur_1, 1.0)) {
      tmp1_output.of(tmp0_desc, 13, value.ur_1);
    }
    if (tmp1_output.ag(tmp0_desc, 14) ? true : !equals(value.vr_1, 1.0)) {
      tmp1_output.of(tmp0_desc, 14, value.vr_1);
    }
    if (tmp1_output.ag(tmp0_desc, 15) ? true : !equals(value.wr_1, -1.0)) {
      tmp1_output.of(tmp0_desc, 15, value.wr_1);
    }
    if (tmp1_output.ag(tmp0_desc, 16) ? true : !equals(value.xr_1, -1.0)) {
      tmp1_output.of(tmp0_desc, 16, value.xr_1);
    }
    if (tmp1_output.ag(tmp0_desc, 17) ? true : !(value.yr_1 === false)) {
      tmp1_output.jf(tmp0_desc, 17, value.yr_1);
    }
    tmp1_output.ve(tmp0_desc);
  };
  protoOf($serializer).ed = function (encoder, value) {
    return this.gr(encoder, value instanceof NetObject ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function NetObject(playerId, meshName, label) {
    label = label === VOID ? null : label;
    this.hr_1 = playerId;
    this.ir_1 = meshName;
    this.jr_1 = label;
    this.kr_1 = Vec2_init_$Create$(128.0, 128.0 + this.hr_1 * 2.2);
    var tmp = this;
    // Inline function 'vision.gears.webglmath.Vec1.x' call
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_1();
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_1();
    var minVal = Vec1_init_$Create$(-3.14);
    var maxVal = Vec1_init_$Create$(3.14);
    var tmp_0 = Default_getInstance().z9();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = maxVal.zr_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_0 * (tmp_1 - minVal.zr_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = minVal.zr_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.lr_1 = Vec1_init_$Create$(tmp_2 + tmp$ret$5).zr_1[0];
    var tmp_3 = this;
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_2();
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_2();
    var minVal_0 = Vec2_init_$Create$(-0.1, -0.1);
    var maxVal_0 = Vec2_init_$Create$(0.1, 0.1);
    var tmp_4 = Default_getInstance().z9();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = maxVal_0.as_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = tmp_4 * (tmp_5 - minVal_0.as_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_7 = tmp_6 + minVal_0.as_1[0];
    var tmp_8 = Default_getInstance().z9();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = maxVal_0.as_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = tmp_8 * (tmp_9 - minVal_0.as_1[1]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$22 = minVal_0.as_1[1];
    tmp_3.mr_1 = Vec2_init_$Create$(tmp_7, tmp_10 + tmp$ret$22);
    var tmp_11 = this;
    // Inline function 'vision.gears.webglmath.Vec1.x' call
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_1();
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_1();
    var minVal_1 = Vec1_init_$Create$(-0.314);
    var maxVal_1 = Vec1_init_$Create$(0.314);
    var tmp_12 = Default_getInstance().z9();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_13 = maxVal_1.zr_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_14 = tmp_12 * (tmp_13 - minVal_1.zr_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$30 = minVal_1.zr_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_11.nr_1 = Vec1_init_$Create$(tmp_14 + tmp$ret$30).zr_1[0];
    this.or_1 = 0.0;
    this.pr_1 = 0.0;
    this.qr_1 = 0.0;
    this.rr_1 = 0.0;
    this.sr_1 = 0.0;
    this.tr_1 = 0.0;
    this.ur_1 = 1.0;
    this.vr_1 = 1.0;
    this.wr_1 = -1.0;
    this.xr_1 = -1.0;
    this.yr_1 = false;
  }
  protoOf(NetObject).bs = function (dt, t) {
    // Inline function 'kotlin.math.cos' call
    var x = this.lr_1;
    var tmp = Math.cos(x);
    // Inline function 'kotlin.math.sin' call
    var x_0 = this.lr_1;
    var tmp$ret$1 = Math.sin(x_0);
    var ahead = Vec2_init_$Create$(tmp, tmp$ret$1);
    // Inline function 'vision.gears.webglmath.Vec2.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = ahead.as_1[1];
    // Inline function 'vision.gears.webglmath.Vec2.x' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = ahead.as_1[0];
    var right = Vec2_init_$Create$(tmp_0, -tmp$ret$7);
    // Inline function 'vision.gears.webglmath.Vec2.plusAssign' call
    var this_0 = this.mr_1;
    // Inline function 'vision.gears.webglmath.Vec2.times' call
    // Inline function 'vision.gears.webglmath.Vec2.plus' call
    // Inline function 'vision.gears.webglmath.Vec2.times' call
    var scalar = this.or_1 - this.pr_1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = ahead.as_1[0] * scalar;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = ahead.as_1[1];
    var this_1 = Vec2_init_$Create$(tmp_1, tmp$ret$11 * scalar);
    // Inline function 'vision.gears.webglmath.Vec2.times' call
    var scalar_0 = this.qr_1 - this.rr_1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = right.as_1[0] * scalar_0;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$16 = right.as_1[1];
    var other = Vec2_init_$Create$(tmp_2, tmp$ret$16 * scalar_0);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this_1.as_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp_3 + other.as_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = this_1.as_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$25 = other.as_1[1];
    var this_2 = Vec2_init_$Create$(tmp_4, tmp_5 + tmp$ret$25);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = this_2.as_1[0] * dt;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$30 = this_2.as_1[1];
    var other_0 = Vec2_init_$Create$(tmp_6, tmp$ret$30 * dt);
    var tmp0_array = this_0.as_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_7 = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp_7 + other_0.as_1[0];
    var tmp2_array = this_0.as_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = tmp2_array[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp_8 + other_0.as_1[1];
    // Inline function 'vision.gears.webglmath.Vec2.plusAssign' call
    var this_3 = this.kr_1;
    // Inline function 'vision.gears.webglmath.Vec2.times' call
    var this_4 = this.mr_1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = this_4.as_1[0] * dt;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$45 = this_4.as_1[1];
    var other_1 = Vec2_init_$Create$(tmp_9, tmp$ret$45 * dt);
    var tmp0_array_0 = this_3.as_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = tmp0_array_0[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array_0[0] = tmp_10 + other_1.as_1[0];
    var tmp2_array_0 = this_3.as_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_11 = tmp2_array_0[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array_0[1] = tmp_11 + other_1.as_1[1];
    this.nr_1 = this.nr_1 + (-this.tr_1 * dt + this.sr_1 * dt);
    this.lr_1 = this.lr_1 + this.nr_1 * dt;
    // Inline function 'vision.gears.webglmath.Vec2.timesAssign' call
    var this_5 = this.mr_1;
    // Inline function 'kotlin.math.exp' call
    var x_1 = -dt;
    var scalar_1 = Math.exp(x_1);
    var tmp0_array_1 = this_5.as_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array_1[0] = tmp0_array_1[0] * scalar_1;
    var tmp2_array_1 = this_5.as_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array_1[1] = tmp2_array_1[1] * scalar_1;
    var tmp_12 = this;
    var tmp_13 = this.nr_1;
    // Inline function 'kotlin.math.exp' call
    var x_2 = -dt;
    tmp_12.nr_1 = tmp_13 * Math.exp(x_2);
    this.vr_1 = this.vr_1 - dt;
    if (this.yr_1 === false) {
      if (this.xr_1 <= 0.0 ? !(this.xr_1 === -1.0) : false) {
        this.yr_1 = true;
      } else if (this.xr_1 > 0.0) {
        this.xr_1 = this.xr_1 - dt;
      }
    }
    if (this.wr_1 > 0.0) {
      this.wr_1 = this.wr_1 - dt;
    }
    return this.wr_1 > 0.0 ? true : this.wr_1 === -1.0;
  };
  function GridEntry(x, y, id) {
    this.cs_1 = x;
    this.ds_1 = y;
    this.es_1 = id;
  }
  protoOf(GridEntry).fs = function (other) {
    if (!((this.cs_1 - other.cs_1 | 0) === 0))
      return this.cs_1 - other.cs_1 | 0;
    if (!((this.ds_1 - other.ds_1 | 0) === 0))
      return this.ds_1 - other.ds_1 | 0;
    return this.es_1 - other.es_1 | 0;
  };
  protoOf(GridEntry).d = function (other) {
    return this.fs(other instanceof GridEntry ? other : THROW_CCE());
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.gs_1 = [new HashMapSerializer(IntSerializer_getInstance(), IntSerializer_getInstance()), new HashMapSerializer(IntSerializer_getInstance(), $serializer_getInstance())];
  }
  protoOf(Companion_0).hs = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('GameState', this, 2);
    tmp0_serialDesc.pi('perPlayerObjectCounts', true);
    tmp0_serialDesc.pi('objects', true);
    this.is_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).dd = function () {
    return this.is_1;
  };
  protoOf($serializer_0).ri = function () {
    var tmp0_cached = Companion_getInstance_0().gs_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], tmp0_cached[1]];
  };
  protoOf($serializer_0).js = function (encoder, value) {
    var tmp0_desc = this.is_1;
    var tmp1_output = encoder.ue(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().gs_1;
    if (tmp1_output.ag(tmp0_desc, 0) ? true : !value.ks_1.equals(HashMap_init_$Create$())) {
      tmp1_output.tf(tmp0_desc, 0, tmp2_cached[0], value.ks_1);
    }
    if (tmp1_output.ag(tmp0_desc, 1) ? true : !value.ls_1.equals(HashMap_init_$Create$())) {
      tmp1_output.tf(tmp0_desc, 1, tmp2_cached[1], value.ls_1);
    }
    tmp1_output.ve(tmp0_desc);
  };
  protoOf($serializer_0).ed = function (encoder, value) {
    return this.js(encoder, value instanceof GameState ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function GameState() {
    Companion_getInstance_0();
    this.ks_1 = HashMap_init_$Create$();
    this.ls_1 = HashMap_init_$Create$();
  }
  protoOf(GameState).ms = function (playerId, meshName, label) {
    var netObj = new NetObject(playerId, meshName, label);
    var tmp0_elvis_lhs = this.ks_1.s1(playerId);
    var perPlayerObjectId = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.ks_1;
    var value = perPlayerObjectId + 1 | 0;
    this_0.m1(playerId, value);
    var netObjectId = imul(perPlayerObjectId, 256) + playerId | 0;
    // Inline function 'kotlin.collections.set' call
    this.ls_1.m1(netObjectId, netObj);
    return netObj;
  };
  protoOf(GameState).ns = function (playerId, meshName, label, $super) {
    label = label === VOID ? null : label;
    return $super === VOID ? this.ms(playerId, meshName, label) : $super.ms.call(this, playerId, meshName, label);
  };
  protoOf(GameState).os = function (playerId) {
    var tmp = this;
    // Inline function 'kotlin.collections.filterValues' call
    var this_0 = this.ls_1;
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.t1().o();
    while (tmp0_iterator.v()) {
      var entry = tmp0_iterator.w();
      // Inline function 'GameState.dropPlayer.<anonymous>' call
      if (!(entry.c3().hr_1 === playerId)) {
        result.m1(entry.y2(), entry.c3());
      }
    }
    tmp.ls_1 = HashMap_init_$Create$_0(result);
  };
  protoOf(GameState).ps = function (dt, t) {
    var tmp = this;
    // Inline function 'kotlin.collections.filterValues' call
    var this_0 = this.ls_1;
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.t1().o();
    while (tmp0_iterator.v()) {
      var entry = tmp0_iterator.w();
      // Inline function 'GameState.update.<anonymous>' call
      if (entry.c3().bs(dt, t)) {
        result.m1(entry.y2(), entry.c3());
      }
    }
    tmp.ls_1 = HashMap_init_$Create$_0(result);
    // Inline function 'kotlin.collections.iterator' call
    var iObject = this.ls_1.t1().o();
    if (!iObject.v()) {
      return Unit_instance;
    }
    var entry_0 = iObject.w();
    var tmp_0 = 0;
    var tmp_1 = imul(this.ls_1.n(), 4);
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var netObj = entry_0.c3();
      var index = entry_0.y2();
      if ((tmp_3 % 4 | 0) === 3 ? iObject.v() : false) {
        entry_0 = iObject.w();
      }
      // Inline function 'vision.gears.webglmath.Vec2.x' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$7 = netObj.kr_1.as_1[0];
      var tmp_4 = (numberToInt(tmp$ret$7) / 2 | 0) - (tmp_3 % 2 | 0) | 0;
      // Inline function 'vision.gears.webglmath.Vec2.y' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$10 = netObj.kr_1.as_1[1];
      tmp_2[tmp_3] = new GridEntry(tmp_4, (numberToInt(tmp$ret$10) / 2 | 0) - ((tmp_3 % 4 | 0) / 2 | 0) | 0, index);
      tmp_0 = tmp_0 + 1 | 0;
    }
    var linearGrid = tmp_2;
    sort(linearGrid);
    var candidates = HashSet_init_$Create$();
    var j = 0;
    while (j < linearGrid.length) {
      var k = j + 1 | 0;
      while ((k < linearGrid.length ? linearGrid[k].cs_1 === linearGrid[j].cs_1 : false) ? linearGrid[k].ds_1 === linearGrid[j].ds_1 : false) {
        candidates.l(new Pair(linearGrid[j].es_1, linearGrid[k].es_1));
        k = k + 1 | 0;
      }
      j = j + 1 | 0;
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_1 = this.ls_1.l1();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator_0 = this_1.o();
    while (tmp0_iterator_0.v()) {
      var element = tmp0_iterator_0.w();
      // Inline function 'GameState.update.<anonymous>' call
      if (element.ir_1 === 'mine') {
        destination.l(element);
      }
    }
    var mines = destination;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = mines.o();
    while (tmp0_iterator_1.v()) {
      var element_0 = tmp0_iterator_1.w();
      // Inline function 'GameState.update.<anonymous>' call
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_2 = this.ls_1.l1().o();
      while (tmp0_iterator_2.v()) {
        var element_1 = tmp0_iterator_2.w();
        // Inline function 'GameState.update.<anonymous>.<anonymous>' call
        if (element_1.ir_1 === 'fighter' ? element_0.yr_1 : false) {
          // Inline function 'vision.gears.webglmath.Vec2.minus' call
          var this_2 = element_1.kr_1;
          var other = element_0.kr_1;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_5 = this_2.as_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_6 = tmp_5 - other.as_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_7 = this_2.as_1[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$22 = other.as_1[1];
          var diff = Vec2_init_$Create$(tmp_6, tmp_7 - tmp$ret$22);
          // Inline function 'vision.gears.webglmath.Vec2.dot' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_8 = diff.as_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_9 = tmp_8 * diff.as_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_10 = diff.as_1[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var distance2 = tmp_9 + tmp_10 * diff.as_1[1];
          if (distance2 < 16.0) {
            // Inline function 'vision.gears.webglmath.Vec2.normalize' call
            // Inline function 'vision.gears.webglmath.Vec2.length' call
            // Inline function 'kotlin.math.sqrt' call
            // Inline function 'vision.gears.webglmath.Vec2.lengthSquared' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_11 = diff.as_1[0];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_12 = tmp_11 * diff.as_1[0];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_13 = diff.as_1[1];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var x = tmp_12 + tmp_13 * diff.as_1[1];
            var l = Math.sqrt(x);
            var tmp0_array = diff.as_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp0_array[0] = tmp0_array[0] / l;
            var tmp2_array = diff.as_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp2_array[1] = tmp2_array[1] / l;
            var direction = diff;
            // Inline function 'vision.gears.webglmath.Vec2.plusAssign' call
            var this_3 = element_0.mr_1;
            // Inline function 'vision.gears.webglmath.Vec2.times' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_14 = direction.as_1[0] * dt;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp$ret$54 = direction.as_1[1];
            var other_0 = Vec2_init_$Create$(tmp_14, tmp$ret$54 * dt);
            var tmp0_array_0 = this_3.as_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_15 = tmp0_array_0[0];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp0_array_0[0] = tmp_15 + other_0.as_1[0];
            var tmp2_array_0 = this_3.as_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_16 = tmp2_array_0[1];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp2_array_0[1] = tmp_16 + other_0.as_1[1];
          }
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_3 = candidates.o();
    while (tmp0_iterator_3.v()) {
      var element_2 = tmp0_iterator_3.w();
      $l$block_3: {
        // Inline function 'GameState.update.<anonymous>' call
        var tmp0_elvis_lhs = this.ls_1.s1(element_2.j9_1);
        var tmp_17;
        if (tmp0_elvis_lhs == null) {
          break $l$block_3;
        } else {
          tmp_17 = tmp0_elvis_lhs;
        }
        var i = tmp_17;
        var tmp1_elvis_lhs = this.ls_1.s1(element_2.k9_1);
        var tmp_18;
        if (tmp1_elvis_lhs == null) {
          break $l$block_3;
        } else {
          tmp_18 = tmp1_elvis_lhs;
        }
        var j_0 = tmp_18;
        if (i.ir_1 === 'mine' ? !i.yr_1 : false) {
          break $l$block_3;
        }
        if (j_0.ir_1 === 'mine' ? !j_0.yr_1 : false) {
          break $l$block_3;
        }
        if (i.ir_1 === 'boom' ? true : j_0.ir_1 === 'boom') {
          break $l$block_3;
        }
        // Inline function 'vision.gears.webglmath.Vec2.minus' call
        var this_4 = i.kr_1;
        var other_1 = j_0.kr_1;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_19 = this_4.as_1[0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_20 = tmp_19 - other_1.as_1[0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_21 = this_4.as_1[1];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$74 = other_1.as_1[1];
        var diff_0 = Vec2_init_$Create$(tmp_20, tmp_21 - tmp$ret$74);
        // Inline function 'vision.gears.webglmath.Vec2.dot' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_22 = diff_0.as_1[0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_23 = tmp_22 * diff_0.as_1[0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_24 = diff_0.as_1[1];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        if (tmp_23 + tmp_24 * diff_0.as_1[1] < i.ur_1 + j_0.ur_1) {
          // Inline function 'vision.gears.webglmath.Vec2.normalize' call
          // Inline function 'vision.gears.webglmath.Vec2.length' call
          // Inline function 'kotlin.math.sqrt' call
          // Inline function 'vision.gears.webglmath.Vec2.lengthSquared' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_25 = diff_0.as_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_26 = tmp_25 * diff_0.as_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_27 = diff_0.as_1[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var x_0 = tmp_26 + tmp_27 * diff_0.as_1[1];
          var l_0 = Math.sqrt(x_0);
          var tmp0_array_1 = diff_0.as_1;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp0_array_1[0] = tmp0_array_1[0] / l_0;
          var tmp2_array_1 = diff_0.as_1;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp2_array_1[1] = tmp2_array_1[1] / l_0;
          var collisionNormal = diff_0;
          // Inline function 'vision.gears.webglmath.Vec2.plusAssign' call
          var this_5 = i.kr_1;
          // Inline function 'vision.gears.webglmath.Vec2.times' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_28 = collisionNormal.as_1[0] * 0.01;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$106 = collisionNormal.as_1[1];
          var other_2 = Vec2_init_$Create$(tmp_28, tmp$ret$106 * 0.01);
          var tmp0_array_2 = this_5.as_1;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_29 = tmp0_array_2[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp0_array_2[0] = tmp_29 + other_2.as_1[0];
          var tmp2_array_2 = this_5.as_1;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_30 = tmp2_array_2[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp2_array_2[1] = tmp_30 + other_2.as_1[1];
          // Inline function 'vision.gears.webglmath.Vec2.minusAssign' call
          var this_6 = j_0.kr_1;
          // Inline function 'vision.gears.webglmath.Vec2.times' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_31 = collisionNormal.as_1[0] * 0.01;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$121 = collisionNormal.as_1[1];
          var other_3 = Vec2_init_$Create$(tmp_31, tmp$ret$121 * 0.01);
          var tmp0_array_3 = this_6.as_1;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_32 = tmp0_array_3[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp0_array_3[0] = tmp_32 - other_3.as_1[0];
          var tmp2_array_3 = this_6.as_1;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_33 = tmp2_array_3[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp2_array_3[1] = tmp_33 - other_3.as_1[1];
          // Inline function 'vision.gears.webglmath.Vec2.minus' call
          var this_7 = i.mr_1;
          var other_4 = j_0.mr_1;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_34 = this_7.as_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_35 = tmp_34 - other_4.as_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_36 = this_7.as_1[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$140 = other_4.as_1[1];
          var relativeVelocity = Vec2_init_$Create$(tmp_35, tmp_36 - tmp$ret$140);
          // Inline function 'vision.gears.webglmath.Vec2.dot' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_37 = relativeVelocity.as_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_38 = tmp_37 * collisionNormal.as_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_39 = relativeVelocity.as_1[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var relVelAlongNormal = tmp_38 + tmp_39 * collisionNormal.as_1[1];
          if (relVelAlongNormal < 0.0) {
            if (!(i.ir_1 === 'fighter') ? true : !(j_0.ir_1 === 'fighter')) {
              // Inline function 'vision.gears.webglmath.Vec2.times' call
              // Inline function 'vision.gears.webglmath.Vec2.plus' call
              var this_8 = i.kr_1;
              var other_5 = j_0.kr_1;
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_40 = this_8.as_1[0];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_41 = tmp_40 + other_5.as_1[0];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_42 = this_8.as_1[1];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp$ret$158 = other_5.as_1[1];
              var this_9 = Vec2_init_$Create$(tmp_41, tmp_42 + tmp$ret$158);
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_43 = this_9.as_1[0] * 0.5;
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp$ret$163 = this_9.as_1[1];
              var midpoint = Vec2_init_$Create$(tmp_43, tmp$ret$163 * 0.5);
              // Inline function 'kotlin.apply' call
              var this_10 = this.ns(-1, 'boom');
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'GameState.update.<anonymous>.<anonymous>' call
              this_10.kr_1.qs(midpoint);
              this_10.wr_1 = 1.3;
            }
            if (i.ir_1 === 'mine') {
              var impulseMagnitude = 10.0;
              // Inline function 'vision.gears.webglmath.Vec2.times' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_44 = collisionNormal.as_1[0] * impulseMagnitude;
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp$ret$169 = collisionNormal.as_1[1];
              var impulseVector = Vec2_init_$Create$(tmp_44, tmp$ret$169 * impulseMagnitude);
              // Inline function 'vision.gears.webglmath.Vec2.minusAssign' call
              var this_11 = j_0.mr_1;
              var tmp0_array_4 = this_11.as_1;
              // Inline function 'org.khronos.webgl.set' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_45 = tmp0_array_4[0];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp0_array_4[0] = tmp_45 - impulseVector.as_1[0];
              var tmp2_array_4 = this_11.as_1;
              // Inline function 'org.khronos.webgl.set' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_46 = tmp2_array_4[1];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp2_array_4[1] = tmp_46 - impulseVector.as_1[1];
            } else if (j_0.ir_1 === 'mine') {
              var impulseMagnitude_0 = 10.0;
              // Inline function 'vision.gears.webglmath.Vec2.times' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_47 = collisionNormal.as_1[0] * impulseMagnitude_0;
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp$ret$184 = collisionNormal.as_1[1];
              var impulseVector_0 = Vec2_init_$Create$(tmp_47, tmp$ret$184 * impulseMagnitude_0);
              // Inline function 'vision.gears.webglmath.Vec2.plusAssign' call
              var this_12 = i.mr_1;
              var tmp0_array_5 = this_12.as_1;
              // Inline function 'org.khronos.webgl.set' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_48 = tmp0_array_5[0];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp0_array_5[0] = tmp_48 + impulseVector_0.as_1[0];
              var tmp2_array_5 = this_12.as_1;
              // Inline function 'org.khronos.webgl.set' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_49 = tmp2_array_5[1];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp2_array_5[1] = tmp_49 + impulseVector_0.as_1[1];
            } else {
              var e = 0.2;
              var impulse = -(1 + e) * relVelAlongNormal;
              // Inline function 'vision.gears.webglmath.Vec2.times' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_50 = collisionNormal.as_1[0] * impulse;
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp$ret$199 = collisionNormal.as_1[1];
              var impulseVector_1 = Vec2_init_$Create$(tmp_50, tmp$ret$199 * impulse);
              // Inline function 'vision.gears.webglmath.Vec2.plusAssign' call
              var this_13 = i.mr_1;
              var tmp0_array_6 = this_13.as_1;
              // Inline function 'org.khronos.webgl.set' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_51 = tmp0_array_6[0];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp0_array_6[0] = tmp_51 + impulseVector_1.as_1[0];
              var tmp2_array_6 = this_13.as_1;
              // Inline function 'org.khronos.webgl.set' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_52 = tmp2_array_6[1];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp2_array_6[1] = tmp_52 + impulseVector_1.as_1[1];
              // Inline function 'vision.gears.webglmath.Vec2.minusAssign' call
              var this_14 = j_0.mr_1;
              var tmp0_array_7 = this_14.as_1;
              // Inline function 'org.khronos.webgl.set' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_53 = tmp0_array_7[0];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp0_array_7[0] = tmp_53 - impulseVector_1.as_1[0];
              var tmp2_array_7 = this_14.as_1;
              // Inline function 'org.khronos.webgl.set' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_54 = tmp2_array_7[1];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp2_array_7[1] = tmp_54 - impulseVector_1.as_1[1];
            }
            if (i.ir_1 === 'orb' ? true : i.ir_1 === 'mine')
              i.wr_1 = 0.0;
            if (j_0.ir_1 === 'orb' ? true : j_0.ir_1 === 'mine')
              j_0.wr_1 = 0.0;
          }
        }
      }
    }
  };
  protoOf(GameState).rs = function (playerId, key) {
    var tmp0_elvis_lhs = this.ls_1.s1(playerId);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var obj = tmp;
    if (key === 'W') {
      obj.or_1 = 5.0;
    }
    if (key === 'S') {
      obj.pr_1 = 5.0;
    }
    if (key === 'A') {
      obj.rr_1 = 2.0;
    }
    if (key === 'D') {
      obj.qr_1 = 2.0;
    }
    if (key === 'Q') {
      obj.sr_1 = 2.0;
    }
    if (key === 'E') {
      obj.tr_1 = 2.0;
    }
    if (key === 'SPACE') {
      var tmp1_safe_receiver = this.ls_1.s1(playerId);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp_0;
        if (tmp1_safe_receiver.vr_1 < 0.0) {
          // Inline function 'kotlin.math.cos' call
          var x = tmp1_safe_receiver.lr_1;
          var tmp_1 = Math.cos(x);
          // Inline function 'kotlin.math.sin' call
          var x_0 = tmp1_safe_receiver.lr_1;
          var tmp$ret$1 = Math.sin(x_0);
          var ahead = Vec2_init_$Create$(tmp_1, tmp$ret$1);
          // Inline function 'kotlin.apply' call
          var this_0 = this.ns(playerId, 'orb');
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'GameState.onKeyDown.<anonymous>.<anonymous>' call
          // Inline function 'vision.gears.webglmath.Vec2.plus' call
          var this_1 = tmp1_safe_receiver.kr_1;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_2 = this_1.as_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_3 = tmp_2 + ahead.as_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_4 = this_1.as_1[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$9 = ahead.as_1[1];
          var tmp$ret$10 = Vec2_init_$Create$(tmp_3, tmp_4 + tmp$ret$9);
          this_0.kr_1.qs(tmp$ret$10);
          // Inline function 'vision.gears.webglmath.Vec2.times' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_5 = ahead.as_1[0] * 15.0;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$14 = ahead.as_1[1];
          var tmp$ret$15 = Vec2_init_$Create$(tmp_5, tmp$ret$14 * 15.0);
          this_0.mr_1.qs(tmp$ret$15);
          this_0.wr_1 = 10.0;
          tmp1_safe_receiver.vr_1 = 1.0;
          tmp_0 = Unit_instance;
        }
      }
    }
    if (key === 'M') {
      var tmp2_safe_receiver = this.ls_1.s1(playerId);
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp_6;
        if (tmp2_safe_receiver.vr_1 < 0.0) {
          // Inline function 'kotlin.math.cos' call
          var x_1 = tmp2_safe_receiver.lr_1;
          var tmp_7 = Math.cos(x_1);
          // Inline function 'kotlin.math.sin' call
          var x_2 = tmp2_safe_receiver.lr_1;
          var tmp$ret$19 = Math.sin(x_2);
          var ahead_0 = Vec2_init_$Create$(tmp_7, tmp$ret$19);
          // Inline function 'kotlin.apply' call
          var this_2 = this.ns(playerId, 'mine');
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'GameState.onKeyDown.<anonymous>.<anonymous>' call
          // Inline function 'vision.gears.webglmath.Vec2.minus' call
          var this_3 = tmp2_safe_receiver.kr_1;
          // Inline function 'vision.gears.webglmath.Vec2.times' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_8 = ahead_0.as_1[0] * 2.0;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$23 = ahead_0.as_1[1];
          var other = Vec2_init_$Create$(tmp_8, tmp$ret$23 * 2.0);
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_9 = this_3.as_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_10 = tmp_9 - other.as_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_11 = this_3.as_1[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$32 = other.as_1[1];
          var tmp$ret$33 = Vec2_init_$Create$(tmp_10, tmp_11 - tmp$ret$32);
          this_2.kr_1.qs(tmp$ret$33);
          this_2.mr_1.ss(new Float32Array([0.0, 0.0]));
          this_2.xr_1 = 3.0;
          this_2.ur_1 = 1.0;
          tmp2_safe_receiver.vr_1 = 1.0;
          tmp_6 = Unit_instance;
        }
      }
    }
  };
  protoOf(GameState).ts = function (playerId, key) {
    var tmp0_elvis_lhs = this.ls_1.s1(playerId);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var obj = tmp;
    if (key === 'W') {
      obj.or_1 = 0.0;
    }
    if (key === 'S') {
      obj.pr_1 = 0.0;
    }
    if (key === 'A') {
      obj.rr_1 = 0.0;
    }
    if (key === 'D') {
      obj.qr_1 = 0.0;
    }
    if (key === 'Q') {
      obj.sr_1 = 0.0;
    }
    if (key === 'E') {
      obj.tr_1 = 0.0;
    }
  };
  function main(args) {
    println('Hello JavaScript!');
    var express = require('express');
    var app = express();
    app.use(express.static('build/web'));
    var gameState = new GameState();
    var server = {_v: null};
    server._v = app.listen(3001, main$lambda(server, gameState));
    var port = server._v.address().port;
    console.log('Server listening at port ' + port);
  }
  function main$lambda$lambda$lambda($gameState, $clientId) {
    return function (name) {
      var tmp0_safe_receiver = $gameState.ls_1.s1($clientId);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = Unit_instance;
      } else {
        tmp0_safe_receiver.jr_1 = name;
        tmp = Unit_instance;
      }
      return undefined;
    };
  }
  function main$lambda$lambda$lambda_0($clientId, $gameState) {
    return function () {
      console.log('User left, id: ' + $clientId);
      $gameState.os($clientId);
      return undefined;
    };
  }
  function main$lambda$lambda$lambda_1($gameState, $clientId) {
    return function (key) {
      $gameState.rs($clientId, key);
      return undefined;
    };
  }
  function main$lambda$lambda$lambda_2($gameState, $clientId) {
    return function (key) {
      $gameState.ts($clientId, key);
      return undefined;
    };
  }
  function main$lambda$lambda($lastClientId, $gameState) {
    return function (client) {
      var tmp0 = $lastClientId._v;
      $lastClientId._v = tmp0 + 1 | 0;
      var clientId = tmp0;
      console.log('User connected, id: ' + clientId);
      client.on('introduction', main$lambda$lambda$lambda($gameState, clientId));
      client.on('disconnect', main$lambda$lambda$lambda_0(clientId, $gameState));
      client.on('keyDown', main$lambda$lambda$lambda_1($gameState, clientId));
      client.on('keyUp', main$lambda$lambda$lambda_2($gameState, clientId));
      $gameState.ms(clientId, 'fighter', 'Player ' + clientId);
      return client.emit('welcome', clientId);
    };
  }
  function main$lambda$lambda_0($this$Json) {
    $this$Json.an_1 = true;
    return Unit_instance;
  }
  function main$lambda$lambda_1($timeAtLastFrame, $timeAtFirstFrame, $gameState, $json, $io) {
    return function (it) {
      var timeAtThisFrame = (new Date()).getTime();
      var dt = (timeAtThisFrame - $timeAtLastFrame._v) / 1000.0;
      var t = (timeAtThisFrame - $timeAtFirstFrame) / 1000.0;
      $timeAtLastFrame._v = timeAtThisFrame;
      $gameState.ps(dt, t);
      var serializedGameState = $json.vm(Companion_getInstance_0().hs(), $gameState);
      $io.emit('syncState', serializedGameState);
      return Unit_instance;
    };
  }
  function main$lambda($server, $gameState) {
    return function () {
      console.log('Server launched.');
      var tmp;
      if ($server._v != null) {
        console.log('Server is not null.');
        var io = require('socket.io')($server._v);
        console.log('Socket open.');
        if (io != null) {
          console.log('Socket is not null.');
        }
        var lastClientId = {_v: 0};
        io.on('connection', main$lambda$lambda(lastClientId, $gameState));
        var timeAtFirstFrame = (new Date()).getTime();
        var timeAtLastFrame = {_v: timeAtFirstFrame};
        var json = Json(VOID, main$lambda$lambda_0);
        tmp = setInterval(main$lambda$lambda_1(timeAtLastFrame, timeAtFirstFrame, $gameState, json, io), 16);
      }
      return Unit_instance;
    };
  }
  function UniformFloat() {
  }
  function Vec1_init_$Init$(u, $this) {
    u = u === VOID ? 0.0 : u;
    Vec1.call($this, null, 0);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.zr_1[0] = u;
    return $this;
  }
  function Vec1_init_$Create$(u) {
    return Vec1_init_$Init$(u, objectCreate(protoOf(Vec1)));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.vs_1 = Vec1_init_$Create$();
    this.ws_1 = Vec1_init_$Create$(1.0);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Vec1(backingStorage, offset) {
    Companion_getInstance_1();
    offset = offset === VOID ? 0 : offset;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(offset, offset + 1 | 0);
    tmp.zr_1 = tmp1_elvis_lhs == null ? new Float32Array(1) : tmp1_elvis_lhs;
  }
  protoOf(Vec1).us = function () {
    return this.zr_1;
  };
  function Vec2Serializer() {
    Vec2Serializer_instance = this;
    this.xs_1 = buildSerialDescriptor('vision.gears.Vec2', LIST_getInstance(), []);
  }
  protoOf(Vec2Serializer).dd = function () {
    return this.xs_1;
  };
  protoOf(Vec2Serializer).ys = function (encoder, value) {
    var tmp0_elvis_lhs = isInterface(encoder, JsonEncoder) ? encoder : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw SerializationException_init_$Create$('This class can be saved only by Json');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var output = tmp;
    // Inline function 'kotlinx.serialization.json.buildJsonArray' call
    // Inline function 'kotlin.contracts.contract' call
    var builder = new JsonArrayBuilder();
    // Inline function 'vision.gears.webglmath.Vec2Serializer.serialize.<anonymous>' call
    // Inline function 'vision.gears.webglmath.Vec2.x' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = value.as_1[0];
    add(builder, tmp$ret$2);
    // Inline function 'vision.gears.webglmath.Vec2.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = value.as_1[1];
    add(builder, tmp$ret$5);
    var array = builder.on();
    output.gp(array);
  };
  protoOf(Vec2Serializer).ed = function (encoder, value) {
    return this.ys(encoder, value instanceof Vec2 ? value : THROW_CCE());
  };
  var Vec2Serializer_instance;
  function Vec2Serializer_getInstance() {
    if (Vec2Serializer_instance == null)
      new Vec2Serializer();
    return Vec2Serializer_instance;
  }
  function Vec2_init_$Init$(u, v, $this) {
    u = u === VOID ? 0.0 : u;
    v = v === VOID ? 0.0 : v;
    Vec2.call($this, null, 0);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.as_1[0] = u;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.as_1[1] = v;
    return $this;
  }
  function Vec2_init_$Create$(u, v) {
    return Vec2_init_$Init$(u, v, objectCreate(protoOf(Vec2)));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.zs_1 = Vec2_init_$Create$();
    this.at_1 = Vec2_init_$Create$(1.0, 1.0);
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Vec2(backingStorage, offset) {
    Companion_getInstance_2();
    offset = offset === VOID ? 0 : offset;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(offset, offset + 2 | 0);
    tmp.as_1 = tmp1_elvis_lhs == null ? new Float32Array(2) : tmp1_elvis_lhs;
  }
  protoOf(Vec2).us = function () {
    return this.as_1;
  };
  protoOf(Vec2).ss = function (values) {
    // Inline function 'org.khronos.webgl.set' call
    var this_0 = this.as_1;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp;
    if (0 >= 0 ? 0 <= get_lastIndex(values) : false) {
      tmp = values[0];
    } else {
      // Inline function 'vision.gears.webglmath.Vec2.set.<anonymous>' call
      tmp = 0.0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    this_0[0] = tmp;
    // Inline function 'org.khronos.webgl.set' call
    var this_1 = this.as_1;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp_0;
    if (1 >= 0 ? 1 <= get_lastIndex(values) : false) {
      tmp_0 = values[1];
    } else {
      // Inline function 'vision.gears.webglmath.Vec2.set.<anonymous>' call
      tmp_0 = 0.0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    this_1[1] = tmp_0;
    return this;
  };
  //region block: post-declaration
  protoOf($serializer).si = typeParametersSerializers;
  protoOf($serializer_0).si = typeParametersSerializers;
  protoOf(Vec2).qs = set;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  //endregion
  main([]);
  return _;
}));

//# sourceMappingURL=kog-server.js.map
