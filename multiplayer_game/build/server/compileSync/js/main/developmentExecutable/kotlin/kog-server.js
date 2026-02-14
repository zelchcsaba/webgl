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
  var protoOf = kotlin_kotlin.$_$.l7;
  var objectMeta = kotlin_kotlin.$_$.k7;
  var setMetadataFor = kotlin_kotlin.$_$.m7;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var FloatSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var equals = kotlin_kotlin.$_$.m6;
  var Default_getInstance = kotlin_kotlin.$_$.e3;
  var THROW_CCE = kotlin_kotlin.$_$.n9;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var VOID = kotlin_kotlin.$_$.e;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var objectCreate = kotlin_kotlin.$_$.j7;
  var classMeta = kotlin_kotlin.$_$.l6;
  var Comparable = kotlin_kotlin.$_$.f9;
  var HashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var Unit_getInstance = kotlin_kotlin.$_$.o3;
  var fillArrayVal = kotlin_kotlin.$_$.n6;
  var numberToInt = kotlin_kotlin.$_$.h7;
  var sort = kotlin_kotlin.$_$.q5;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var Pair = kotlin_kotlin.$_$.l9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var println = kotlin_kotlin.$_$.d6;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var getOrNull = kotlin_kotlin.$_$.z4;
  var Error_init_$Create$ = kotlin_kotlin.$_$.w;
  var ensureNotNull = kotlin_kotlin.$_$.ba;
  var split = kotlin_kotlin.$_$.m8;
  var lastOrNull = kotlin_kotlin.$_$.h5;
  var dropLast = kotlin_kotlin.$_$.u4;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var interfaceMeta = kotlin_kotlin.$_$.s6;
  var isInterface = kotlin_kotlin.$_$.a7;
  var toMutableMap = kotlin_kotlin.$_$.w5;
  var addAll = kotlin_kotlin.$_$.f4;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var Map = kotlin_kotlin.$_$.a4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var to = kotlin_kotlin.$_$.la;
  var toMap = kotlin_kotlin.$_$.v5;
  var getOrNull_0 = kotlin_kotlin.$_$.y4;
  var get_lastIndex = kotlin_kotlin.$_$.g5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var JsonDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var get_float = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var JsonEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var JsonArrayBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var add = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var until = kotlin_kotlin.$_$.w7;
  var step = kotlin_kotlin.$_$.v7;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NetObject, 'NetObject', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(GridEntry, 'GridEntry', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(GameState, 'GameState', classMeta, VOID, VOID, GameState, VOID, {0: $serializer_getInstance_0});
  setMetadataFor(Drawable, 'Drawable', classMeta);
  setMetadataFor(Geometry, 'Geometry', classMeta, Drawable);
  function commit$default(gl, uniformLocation, samplerIndex, $super) {
    samplerIndex = samplerIndex === VOID ? 0 : samplerIndex;
    var tmp;
    if ($super === VOID) {
      this.commit_6y6sig_k$(gl, uniformLocation, samplerIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.commit_6y6sig_k$.call(this, gl, uniformLocation, samplerIndex);
    }
    return tmp;
  }
  setMetadataFor(Uniform, 'Uniform', interfaceMeta);
  function getStorageSize() {
    return this.get_storage_twal4e_k$().length;
  }
  function set(other) {
    if (isInterface(other, UniformFloat)) {
      var inductionVariable = 0;
      var last = this.get_storage_twal4e_k$().length;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'org.khronos.webgl.set' call
          var this_0 = this.get_storage_twal4e_k$();
          var tmp;
          if (i < other.get_storage_twal4e_k$().length) {
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp = other.get_storage_twal4e_k$()[i];
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
  function set_0(firstTexture, moreTextures) {
    throw Error_init_$Create$('Cannot set a texture to a non-sampler uniform.');
  }
  setMetadataFor(UniformFloat, 'UniformFloat', interfaceMeta, VOID, [Uniform]);
  setMetadataFor(Mat4, 'Mat4', classMeta, VOID, [UniformFloat]);
  setMetadataFor(Mat4Array, 'Mat4Array', classMeta, VOID, [UniformFloat]);
  setMetadataFor(UniformDescriptor, 'UniformDescriptor', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ProgramReflection, 'ProgramReflection', classMeta, Drawable);
  function getStorageSize_0() {
    return this.get_storage_twal4e_k$().length;
  }
  function set_1(other) {
    if (isInterface(other, UniformSampler)) {
      var inductionVariable = 0;
      var last = this.get_storage_twal4e_k$().length;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'org.khronos.webgl.set' call
          var this_0 = this.get_storage_twal4e_k$();
          var tmp;
          if (i < other.get_storage_twal4e_k$().length) {
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp = other.get_storage_twal4e_k$()[i];
          } else {
            tmp = 0;
          }
          // Inline function 'kotlin.js.asDynamic' call
          this_0[i] = tmp;
          this.get_glTextures_nt253a_k$()[i] = getOrNull_0(other.get_glTextures_nt253a_k$(), i);
        }
         while (inductionVariable < last);
    } else {
      throw Error_init_$Create$('Cannot set a uniform of textures from a non-texture uniform.');
    }
    return this;
  }
  function set_2(firstTexture, moreTextures) {
    this.get_glTextures_nt253a_k$()[0] = firstTexture.get_glTexture_ofpr8z_k$();
    var inductionVariable = 0;
    var last = this.get_storage_twal4e_k$().length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.get_glTextures_nt253a_k$();
        var tmp_0 = i + 1 | 0;
        var tmp1_safe_receiver = getOrNull_0(moreTextures, i);
        tmp[tmp_0] = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_glTexture_ofpr8z_k$();
      }
       while (inductionVariable < last);
  }
  function set_3(values) {
    throw Error_init_$Create$('Cannot set float values to a texture uniform.');
  }
  setMetadataFor(UniformSampler, 'UniformSampler', interfaceMeta, VOID, [Uniform]);
  setMetadataFor(Sampler2D, 'Sampler2D', classMeta, VOID, [UniformSampler], Sampler2D);
  setMetadataFor(Sampler3D, 'Sampler3D', classMeta, VOID, [UniformSampler], Sampler3D);
  setMetadataFor(SamplerCube, 'SamplerCube', classMeta, VOID, [UniformSampler], SamplerCube);
  setMetadataFor(Texture, 'Texture', interfaceMeta);
  setMetadataFor(UniformProvider$using$1, VOID, classMeta, Drawable);
  setMetadataFor(UniformProvider, 'UniformProvider', classMeta, Drawable);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Vec1, 'Vec1', classMeta, VOID, [UniformFloat], Vec1_init_$Create$);
  setMetadataFor(Gif, 'Gif', interfaceMeta);
  setMetadataFor(VecArray, 'VecArray', classMeta, VOID, [UniformFloat, Gif]);
  setMetadataFor(Vec1Array, 'Vec1Array', classMeta, VecArray);
  setMetadataFor(Vec2Serializer, 'Vec2Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Vec2, 'Vec2', classMeta, VOID, [UniformFloat], Vec2_init_$Create$, VOID, {0: Vec2Serializer_getInstance});
  setMetadataFor(Vec2Array, 'Vec2Array', classMeta, VecArray);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Vec3, 'Vec3', classMeta, VOID, [UniformFloat], Vec3_init_$Create$);
  setMetadataFor(Vec3Array, 'Vec3Array', classMeta, VecArray);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Vec4, 'Vec4', classMeta, VOID, [UniformFloat], Vec4_init_$Create$);
  setMetadataFor(Vec4Array, 'Vec4Array', classMeta, VecArray);
  setMetadataFor(VecArray$plus$1, VOID, classMeta, VOID, [Gif]);
  setMetadataFor(VecArray$minus$1, VOID, classMeta, VOID, [Gif]);
  setMetadataFor(VecArray$times$1, VOID, classMeta, VOID, [Gif]);
  setMetadataFor(VecArray$div$1, VOID, classMeta, VOID, [Gif]);
  setMetadataFor(VecArray$times$2, VOID, classMeta, VOID, [Gif]);
  setMetadataFor(VecArray$div$2, VOID, classMeta, VOID, [Gif]);
  setMetadataFor(VecArray$expand$1, VOID, classMeta, VOID, [Gif]);
  //endregion
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('NetObject', this, 18);
    tmp0_serialDesc.addElement_5pzumi_k$('playerId', false);
    tmp0_serialDesc.addElement_5pzumi_k$('meshName', false);
    tmp0_serialDesc.addElement_5pzumi_k$('label', true);
    tmp0_serialDesc.addElement_5pzumi_k$('position', true);
    tmp0_serialDesc.addElement_5pzumi_k$('roll', true);
    tmp0_serialDesc.addElement_5pzumi_k$('velocity', true);
    tmp0_serialDesc.addElement_5pzumi_k$('angVelocity', true);
    tmp0_serialDesc.addElement_5pzumi_k$('aheadThrust', true);
    tmp0_serialDesc.addElement_5pzumi_k$('backThrust', true);
    tmp0_serialDesc.addElement_5pzumi_k$('rightThrust', true);
    tmp0_serialDesc.addElement_5pzumi_k$('leftThrust', true);
    tmp0_serialDesc.addElement_5pzumi_k$('ccwTorque', true);
    tmp0_serialDesc.addElement_5pzumi_k$('cwTorque', true);
    tmp0_serialDesc.addElement_5pzumi_k$('collisionRadius', true);
    tmp0_serialDesc.addElement_5pzumi_k$('cooldown', true);
    tmp0_serialDesc.addElement_5pzumi_k$('lifetime', true);
    tmp0_serialDesc.addElement_5pzumi_k$('armedTime', true);
    tmp0_serialDesc.addElement_5pzumi_k$('armed', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), Vec2Serializer_getInstance(), FloatSerializer_getInstance(), Vec2Serializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), FloatSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = 0.0;
    var tmp9_local5 = null;
    var tmp10_local6 = 0.0;
    var tmp11_local7 = 0.0;
    var tmp12_local8 = 0.0;
    var tmp13_local9 = 0.0;
    var tmp14_local10 = 0.0;
    var tmp15_local11 = 0.0;
    var tmp16_local12 = 0.0;
    var tmp17_local13 = 0.0;
    var tmp18_local14 = 0.0;
    var tmp19_local15 = 0.0;
    var tmp20_local16 = 0.0;
    var tmp21_local17 = false;
    var tmp22_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp22_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp22_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp22_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp22_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 3, Vec2Serializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp22_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 5, Vec2Serializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp22_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp22_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp22_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp22_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp22_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 3, Vec2Serializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp22_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 5, Vec2Serializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp22_input.decodeFloatElement_p2q55h_k$(tmp0_desc, 16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp22_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp22_input.endStructure_1xqz0n_k$(tmp0_desc);
    return NetObject_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, null);
  };
  protoOf($serializer).serialize_qklmjw_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 0, value.playerId_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.meshName_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.label_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.label_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !equals(value.position_1, Vec2_init_$Create$(128.0, 128.0 + value.playerId_1 * 2.2))) {
      tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 3, Vec2Serializer_getInstance(), value.position_1);
    }
    var tmp;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 4)) {
      tmp = true;
    } else {
      var tmp_0 = value.roll_1;
      // Inline function 'vision.gears.webglmath.Vec1.x' call
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_2();
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_2();
      var minVal = Vec1_init_$Create$(-3.14);
      var maxVal = Vec1_init_$Create$(3.14);
      var tmp_1 = Default_getInstance().nextFloat_jqti5l_k$();
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = maxVal.get_storage_twal4e_k$()[0];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = tmp_1 * (tmp_2 - minVal.get_storage_twal4e_k$()[0]);
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$5 = minVal.get_storage_twal4e_k$()[0];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$10 = Vec1_init_$Create$(tmp_3 + tmp$ret$5).get_storage_twal4e_k$()[0];
      tmp = !equals(tmp_0, tmp$ret$10);
    }
    if (tmp) {
      tmp1_output.encodeFloatElement_oe8hn_k$(tmp0_desc, 4, value.roll_1);
    }
    var tmp_4;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 5)) {
      tmp_4 = true;
    } else {
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_3();
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_3();
      var minVal_0 = Vec2_init_$Create$(-0.1, -0.1);
      var maxVal_0 = Vec2_init_$Create$(0.1, 0.1);
      var tmp_5 = Default_getInstance().nextFloat_jqti5l_k$();
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_6 = maxVal_0.get_storage_twal4e_k$()[0];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_7 = tmp_5 * (tmp_6 - minVal_0.get_storage_twal4e_k$()[0]);
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_8 = tmp_7 + minVal_0.get_storage_twal4e_k$()[0];
      var tmp_9 = Default_getInstance().nextFloat_jqti5l_k$();
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_10 = maxVal_0.get_storage_twal4e_k$()[1];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_11 = tmp_9 * (tmp_10 - minVal_0.get_storage_twal4e_k$()[1]);
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$22 = minVal_0.get_storage_twal4e_k$()[1];
      var tmp$ret$24 = Vec2_init_$Create$(tmp_8, tmp_11 + tmp$ret$22);
      tmp_4 = !equals(value.velocity_1, tmp$ret$24);
    }
    if (tmp_4) {
      tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 5, Vec2Serializer_getInstance(), value.velocity_1);
    }
    var tmp_12;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 6)) {
      tmp_12 = true;
    } else {
      var tmp_13 = value.angVelocity_1;
      // Inline function 'vision.gears.webglmath.Vec1.x' call
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_2();
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_2();
      var minVal_1 = Vec1_init_$Create$(-0.314);
      var maxVal_1 = Vec1_init_$Create$(0.314);
      var tmp_14 = Default_getInstance().nextFloat_jqti5l_k$();
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_15 = maxVal_1.get_storage_twal4e_k$()[0];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_16 = tmp_14 * (tmp_15 - minVal_1.get_storage_twal4e_k$()[0]);
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$30 = minVal_1.get_storage_twal4e_k$()[0];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$35 = Vec1_init_$Create$(tmp_16 + tmp$ret$30).get_storage_twal4e_k$()[0];
      tmp_12 = !equals(tmp_13, tmp$ret$35);
    }
    if (tmp_12) {
      tmp1_output.encodeFloatElement_oe8hn_k$(tmp0_desc, 6, value.angVelocity_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 7) ? true : !equals(value.aheadThrust_1, 0.0)) {
      tmp1_output.encodeFloatElement_oe8hn_k$(tmp0_desc, 7, value.aheadThrust_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 8) ? true : !equals(value.backThrust_1, 0.0)) {
      tmp1_output.encodeFloatElement_oe8hn_k$(tmp0_desc, 8, value.backThrust_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 9) ? true : !equals(value.rightThrust_1, 0.0)) {
      tmp1_output.encodeFloatElement_oe8hn_k$(tmp0_desc, 9, value.rightThrust_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 10) ? true : !equals(value.leftThrust_1, 0.0)) {
      tmp1_output.encodeFloatElement_oe8hn_k$(tmp0_desc, 10, value.leftThrust_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 11) ? true : !equals(value.ccwTorque_1, 0.0)) {
      tmp1_output.encodeFloatElement_oe8hn_k$(tmp0_desc, 11, value.ccwTorque_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 12) ? true : !equals(value.cwTorque_1, 0.0)) {
      tmp1_output.encodeFloatElement_oe8hn_k$(tmp0_desc, 12, value.cwTorque_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 13) ? true : !equals(value.collisionRadius_1, 1.0)) {
      tmp1_output.encodeFloatElement_oe8hn_k$(tmp0_desc, 13, value.collisionRadius_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 14) ? true : !equals(value.cooldown_1, 1.0)) {
      tmp1_output.encodeFloatElement_oe8hn_k$(tmp0_desc, 14, value.cooldown_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 15) ? true : !equals(value.lifetime_1, -1.0)) {
      tmp1_output.encodeFloatElement_oe8hn_k$(tmp0_desc, 15, value.lifetime_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 16) ? true : !equals(value.armedTime_1, -1.0)) {
      tmp1_output.encodeFloatElement_oe8hn_k$(tmp0_desc, 16, value.armedTime_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 17) ? true : !(value.armed_1 === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 17, value.armed_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_qklmjw_k$(encoder, value instanceof NetObject ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function NetObject_init_$Init$(seen1, playerId, meshName, label, position, roll, velocity, angVelocity, aheadThrust, backThrust, rightThrust, leftThrust, ccwTorque, cwTorque, collisionRadius, cooldown, lifetime, armedTime, armed, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance().descriptor_1);
    }
    $this.playerId_1 = playerId;
    $this.meshName_1 = meshName;
    if (0 === (seen1 & 4))
      $this.label_1 = null;
    else
      $this.label_1 = label;
    if (0 === (seen1 & 8))
      $this.position_1 = Vec2_init_$Create$(128.0, 128.0 + $this.playerId_1 * 2.2);
    else
      $this.position_1 = position;
    if (0 === (seen1 & 16)) {
      var tmp = $this;
      // Inline function 'vision.gears.webglmath.Vec1.x' call
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_2();
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_2();
      var minVal = Vec1_init_$Create$(-3.14);
      var maxVal = Vec1_init_$Create$(3.14);
      var tmp_0 = Default_getInstance().nextFloat_jqti5l_k$();
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = maxVal.get_storage_twal4e_k$()[0];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = tmp_0 * (tmp_1 - minVal.get_storage_twal4e_k$()[0]);
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$5 = minVal.get_storage_twal4e_k$()[0];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.roll_1 = Vec1_init_$Create$(tmp_2 + tmp$ret$5).get_storage_twal4e_k$()[0];
    } else
      $this.roll_1 = roll;
    if (0 === (seen1 & 32)) {
      var tmp_3 = $this;
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_3();
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_3();
      var minVal_0 = Vec2_init_$Create$(-0.1, -0.1);
      var maxVal_0 = Vec2_init_$Create$(0.1, 0.1);
      var tmp_4 = Default_getInstance().nextFloat_jqti5l_k$();
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_5 = maxVal_0.get_storage_twal4e_k$()[0];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_6 = tmp_4 * (tmp_5 - minVal_0.get_storage_twal4e_k$()[0]);
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_7 = tmp_6 + minVal_0.get_storage_twal4e_k$()[0];
      var tmp_8 = Default_getInstance().nextFloat_jqti5l_k$();
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_9 = maxVal_0.get_storage_twal4e_k$()[1];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_10 = tmp_8 * (tmp_9 - minVal_0.get_storage_twal4e_k$()[1]);
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$22 = minVal_0.get_storage_twal4e_k$()[1];
      tmp_3.velocity_1 = Vec2_init_$Create$(tmp_7, tmp_10 + tmp$ret$22);
    } else
      $this.velocity_1 = velocity;
    if (0 === (seen1 & 64)) {
      var tmp_11 = $this;
      // Inline function 'vision.gears.webglmath.Vec1.x' call
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_2();
      // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
      Companion_getInstance_2();
      var minVal_1 = Vec1_init_$Create$(-0.314);
      var maxVal_1 = Vec1_init_$Create$(0.314);
      var tmp_12 = Default_getInstance().nextFloat_jqti5l_k$();
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_13 = maxVal_1.get_storage_twal4e_k$()[0];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_14 = tmp_12 * (tmp_13 - minVal_1.get_storage_twal4e_k$()[0]);
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$30 = minVal_1.get_storage_twal4e_k$()[0];
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_11.angVelocity_1 = Vec1_init_$Create$(tmp_14 + tmp$ret$30).get_storage_twal4e_k$()[0];
    } else
      $this.angVelocity_1 = angVelocity;
    if (0 === (seen1 & 128))
      $this.aheadThrust_1 = 0.0;
    else
      $this.aheadThrust_1 = aheadThrust;
    if (0 === (seen1 & 256))
      $this.backThrust_1 = 0.0;
    else
      $this.backThrust_1 = backThrust;
    if (0 === (seen1 & 512))
      $this.rightThrust_1 = 0.0;
    else
      $this.rightThrust_1 = rightThrust;
    if (0 === (seen1 & 1024))
      $this.leftThrust_1 = 0.0;
    else
      $this.leftThrust_1 = leftThrust;
    if (0 === (seen1 & 2048))
      $this.ccwTorque_1 = 0.0;
    else
      $this.ccwTorque_1 = ccwTorque;
    if (0 === (seen1 & 4096))
      $this.cwTorque_1 = 0.0;
    else
      $this.cwTorque_1 = cwTorque;
    if (0 === (seen1 & 8192))
      $this.collisionRadius_1 = 1.0;
    else
      $this.collisionRadius_1 = collisionRadius;
    if (0 === (seen1 & 16384))
      $this.cooldown_1 = 1.0;
    else
      $this.cooldown_1 = cooldown;
    if (0 === (seen1 & 32768))
      $this.lifetime_1 = -1.0;
    else
      $this.lifetime_1 = lifetime;
    if (0 === (seen1 & 65536))
      $this.armedTime_1 = -1.0;
    else
      $this.armedTime_1 = armedTime;
    if (0 === (seen1 & 131072))
      $this.armed_1 = false;
    else
      $this.armed_1 = armed;
    return $this;
  }
  function NetObject_init_$Create$(seen1, playerId, meshName, label, position, roll, velocity, angVelocity, aheadThrust, backThrust, rightThrust, leftThrust, ccwTorque, cwTorque, collisionRadius, cooldown, lifetime, armedTime, armed, serializationConstructorMarker) {
    return NetObject_init_$Init$(seen1, playerId, meshName, label, position, roll, velocity, angVelocity, aheadThrust, backThrust, rightThrust, leftThrust, ccwTorque, cwTorque, collisionRadius, cooldown, lifetime, armedTime, armed, serializationConstructorMarker, objectCreate(protoOf(NetObject)));
  }
  function NetObject(playerId, meshName, label) {
    Companion_getInstance();
    label = label === VOID ? null : label;
    this.playerId_1 = playerId;
    this.meshName_1 = meshName;
    this.label_1 = label;
    this.position_1 = Vec2_init_$Create$(128.0, 128.0 + this.playerId_1 * 2.2);
    var tmp = this;
    // Inline function 'vision.gears.webglmath.Vec1.x' call
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_2();
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_2();
    var minVal = Vec1_init_$Create$(-3.14);
    var maxVal = Vec1_init_$Create$(3.14);
    var tmp_0 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = maxVal.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_0 * (tmp_1 - minVal.get_storage_twal4e_k$()[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = minVal.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.roll_1 = Vec1_init_$Create$(tmp_2 + tmp$ret$5).get_storage_twal4e_k$()[0];
    var tmp_3 = this;
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_3();
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_3();
    var minVal_0 = Vec2_init_$Create$(-0.1, -0.1);
    var maxVal_0 = Vec2_init_$Create$(0.1, 0.1);
    var tmp_4 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = maxVal_0.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = tmp_4 * (tmp_5 - minVal_0.get_storage_twal4e_k$()[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_7 = tmp_6 + minVal_0.get_storage_twal4e_k$()[0];
    var tmp_8 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = maxVal_0.get_storage_twal4e_k$()[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = tmp_8 * (tmp_9 - minVal_0.get_storage_twal4e_k$()[1]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$22 = minVal_0.get_storage_twal4e_k$()[1];
    tmp_3.velocity_1 = Vec2_init_$Create$(tmp_7, tmp_10 + tmp$ret$22);
    var tmp_11 = this;
    // Inline function 'vision.gears.webglmath.Vec1.x' call
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_2();
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_2();
    var minVal_1 = Vec1_init_$Create$(-0.314);
    var maxVal_1 = Vec1_init_$Create$(0.314);
    var tmp_12 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_13 = maxVal_1.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_14 = tmp_12 * (tmp_13 - minVal_1.get_storage_twal4e_k$()[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$30 = minVal_1.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_11.angVelocity_1 = Vec1_init_$Create$(tmp_14 + tmp$ret$30).get_storage_twal4e_k$()[0];
    this.aheadThrust_1 = 0.0;
    this.backThrust_1 = 0.0;
    this.rightThrust_1 = 0.0;
    this.leftThrust_1 = 0.0;
    this.ccwTorque_1 = 0.0;
    this.cwTorque_1 = 0.0;
    this.collisionRadius_1 = 1.0;
    this.cooldown_1 = 1.0;
    this.lifetime_1 = -1.0;
    this.armedTime_1 = -1.0;
    this.armed_1 = false;
  }
  protoOf(NetObject).get_playerId_q2dzv_k$ = function () {
    return this.playerId_1;
  };
  protoOf(NetObject).get_meshName_veo1r5_k$ = function () {
    return this.meshName_1;
  };
  protoOf(NetObject).set_label_ck9rls_k$ = function (_set____db54di) {
    this.label_1 = _set____db54di;
  };
  protoOf(NetObject).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(NetObject).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(NetObject).set_roll_imxicu_k$ = function (_set____db54di) {
    this.roll_1 = _set____db54di;
  };
  protoOf(NetObject).get_roll_wotsxy_k$ = function () {
    return this.roll_1;
  };
  protoOf(NetObject).get_velocity_3hqvmu_k$ = function () {
    return this.velocity_1;
  };
  protoOf(NetObject).set_angVelocity_vo3k7m_k$ = function (_set____db54di) {
    this.angVelocity_1 = _set____db54di;
  };
  protoOf(NetObject).get_angVelocity_i2e07m_k$ = function () {
    return this.angVelocity_1;
  };
  protoOf(NetObject).set_aheadThrust_8kfv1w_k$ = function (_set____db54di) {
    this.aheadThrust_1 = _set____db54di;
  };
  protoOf(NetObject).get_aheadThrust_30x69c_k$ = function () {
    return this.aheadThrust_1;
  };
  protoOf(NetObject).set_backThrust_sm0yrw_k$ = function (_set____db54di) {
    this.backThrust_1 = _set____db54di;
  };
  protoOf(NetObject).get_backThrust_joelk8_k$ = function () {
    return this.backThrust_1;
  };
  protoOf(NetObject).set_rightThrust_k1f30x_k$ = function (_set____db54di) {
    this.rightThrust_1 = _set____db54di;
  };
  protoOf(NetObject).get_rightThrust_7e7f3f_k$ = function () {
    return this.rightThrust_1;
  };
  protoOf(NetObject).set_leftThrust_mhf1m4_k$ = function (_set____db54di) {
    this.leftThrust_1 = _set____db54di;
  };
  protoOf(NetObject).get_leftThrust_f5arpk_k$ = function () {
    return this.leftThrust_1;
  };
  protoOf(NetObject).set_ccwTorque_i7pgsc_k$ = function (_set____db54di) {
    this.ccwTorque_1 = _set____db54di;
  };
  protoOf(NetObject).get_ccwTorque_dwbcmg_k$ = function () {
    return this.ccwTorque_1;
  };
  protoOf(NetObject).set_cwTorque_ymdh4d_k$ = function (_set____db54di) {
    this.cwTorque_1 = _set____db54di;
  };
  protoOf(NetObject).get_cwTorque_76bzbt_k$ = function () {
    return this.cwTorque_1;
  };
  protoOf(NetObject).set_collisionRadius_nu0if3_k$ = function (_set____db54di) {
    this.collisionRadius_1 = _set____db54di;
  };
  protoOf(NetObject).get_collisionRadius_530gor_k$ = function () {
    return this.collisionRadius_1;
  };
  protoOf(NetObject).set_cooldown_azy1og_k$ = function (_set____db54di) {
    this.cooldown_1 = _set____db54di;
  };
  protoOf(NetObject).get_cooldown_u71agk_k$ = function () {
    return this.cooldown_1;
  };
  protoOf(NetObject).set_lifetime_d4978i_k$ = function (_set____db54di) {
    this.lifetime_1 = _set____db54di;
  };
  protoOf(NetObject).get_lifetime_fx1dv2_k$ = function () {
    return this.lifetime_1;
  };
  protoOf(NetObject).set_armedTime_7houtf_k$ = function (_set____db54di) {
    this.armedTime_1 = _set____db54di;
  };
  protoOf(NetObject).get_armedTime_fu2ssh_k$ = function () {
    return this.armedTime_1;
  };
  protoOf(NetObject).set_armed_5p3lmx_k$ = function (_set____db54di) {
    this.armed_1 = _set____db54di;
  };
  protoOf(NetObject).get_armed_iosl3m_k$ = function () {
    return this.armed_1;
  };
  protoOf(NetObject).update_af0ow9_k$ = function (dt, t) {
    // Inline function 'kotlin.math.cos' call
    var x = this.roll_1;
    var tmp = Math.cos(x);
    // Inline function 'kotlin.math.sin' call
    var x_0 = this.roll_1;
    var tmp$ret$1 = Math.sin(x_0);
    var ahead = Vec2_init_$Create$(tmp, tmp$ret$1);
    // Inline function 'vision.gears.webglmath.Vec2.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = ahead.get_storage_twal4e_k$()[1];
    // Inline function 'vision.gears.webglmath.Vec2.x' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = ahead.get_storage_twal4e_k$()[0];
    var right = Vec2_init_$Create$(tmp_0, -tmp$ret$7);
    // Inline function 'vision.gears.webglmath.Vec2.plusAssign' call
    var this_0 = this.velocity_1;
    // Inline function 'vision.gears.webglmath.Vec2.times' call
    // Inline function 'vision.gears.webglmath.Vec2.plus' call
    // Inline function 'vision.gears.webglmath.Vec2.times' call
    var scalar = this.aheadThrust_1 - this.backThrust_1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = ahead.get_storage_twal4e_k$()[0] * scalar;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = ahead.get_storage_twal4e_k$()[1];
    var this_1 = Vec2_init_$Create$(tmp_1, tmp$ret$11 * scalar);
    // Inline function 'vision.gears.webglmath.Vec2.times' call
    var scalar_0 = this.rightThrust_1 - this.leftThrust_1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = right.get_storage_twal4e_k$()[0] * scalar_0;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$16 = right.get_storage_twal4e_k$()[1];
    var other = Vec2_init_$Create$(tmp_2, tmp$ret$16 * scalar_0);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this_1.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp_3 + other.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = this_1.get_storage_twal4e_k$()[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$25 = other.get_storage_twal4e_k$()[1];
    var this_2 = Vec2_init_$Create$(tmp_4, tmp_5 + tmp$ret$25);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = this_2.get_storage_twal4e_k$()[0] * dt;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$30 = this_2.get_storage_twal4e_k$()[1];
    var other_0 = Vec2_init_$Create$(tmp_6, tmp$ret$30 * dt);
    var tmp0_array = this_0.get_storage_twal4e_k$();
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_7 = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp_7 + other_0.get_storage_twal4e_k$()[0];
    var tmp2_array = this_0.get_storage_twal4e_k$();
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = tmp2_array[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp_8 + other_0.get_storage_twal4e_k$()[1];
    // Inline function 'vision.gears.webglmath.Vec2.plusAssign' call
    var this_3 = this.position_1;
    // Inline function 'vision.gears.webglmath.Vec2.times' call
    var this_4 = this.velocity_1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = this_4.get_storage_twal4e_k$()[0] * dt;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$45 = this_4.get_storage_twal4e_k$()[1];
    var other_1 = Vec2_init_$Create$(tmp_9, tmp$ret$45 * dt);
    var tmp0_array_0 = this_3.get_storage_twal4e_k$();
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = tmp0_array_0[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array_0[0] = tmp_10 + other_1.get_storage_twal4e_k$()[0];
    var tmp2_array_0 = this_3.get_storage_twal4e_k$();
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_11 = tmp2_array_0[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array_0[1] = tmp_11 + other_1.get_storage_twal4e_k$()[1];
    this.angVelocity_1 = this.angVelocity_1 + (-this.cwTorque_1 * dt + this.ccwTorque_1 * dt);
    this.roll_1 = this.roll_1 + this.angVelocity_1 * dt;
    // Inline function 'vision.gears.webglmath.Vec2.timesAssign' call
    var this_5 = this.velocity_1;
    // Inline function 'kotlin.math.exp' call
    var x_1 = -dt;
    var scalar_1 = Math.exp(x_1);
    var tmp0_array_1 = this_5.get_storage_twal4e_k$();
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array_1[0] = tmp0_array_1[0] * scalar_1;
    var tmp2_array_1 = this_5.get_storage_twal4e_k$();
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array_1[1] = tmp2_array_1[1] * scalar_1;
    var tmp_12 = this;
    var tmp_13 = this.angVelocity_1;
    // Inline function 'kotlin.math.exp' call
    var x_2 = -dt;
    tmp_12.angVelocity_1 = tmp_13 * Math.exp(x_2);
    this.cooldown_1 = this.cooldown_1 - dt;
    if (this.armed_1 === false) {
      if (this.armedTime_1 <= 0.0 ? !(this.armedTime_1 === -1.0) : false) {
        this.armed_1 = true;
      } else if (this.armedTime_1 > 0.0) {
        this.armedTime_1 = this.armedTime_1 - dt;
      }
    }
    if (this.lifetime_1 > 0.0) {
      this.lifetime_1 = this.lifetime_1 - dt;
    }
    return this.lifetime_1 > 0.0 ? true : this.lifetime_1 === -1.0;
  };
  function _get_$childSerializers__r2zwns($this) {
    return $this.$childSerializers_1;
  }
  function GridEntry(x, y, id) {
    this.x_1 = x;
    this.y_1 = y;
    this.id_1 = id;
  }
  protoOf(GridEntry).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(GridEntry).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(GridEntry).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(GridEntry).compareTo_428nid_k$ = function (other) {
    if (!((this.x_1 - other.x_1 | 0) === 0))
      return this.x_1 - other.x_1 | 0;
    if (!((this.y_1 - other.y_1 | 0) === 0))
      return this.y_1 - other.y_1 | 0;
    return this.id_1 - other.id_1 | 0;
  };
  protoOf(GridEntry).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_428nid_k$(other instanceof GridEntry ? other : THROW_CCE());
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [new HashMapSerializer(IntSerializer_getInstance(), IntSerializer_getInstance()), new HashMapSerializer(IntSerializer_getInstance(), $serializer_getInstance())];
  }
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
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
    tmp0_serialDesc.addElement_5pzumi_k$('perPlayerObjectCounts', true);
    tmp0_serialDesc.addElement_5pzumi_k$('objects', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_0).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_0().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], tmp0_cached[1]];
  };
  protoOf($serializer_0).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp7_cached = Companion_getInstance_0().$childSerializers_1;
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return GameState_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).serialize_vguomp_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().$childSerializers_1;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !value.perPlayerObjectCounts_1.equals(HashMap_init_$Create$())) {
      tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 0, tmp2_cached[0], value.perPlayerObjectCounts_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !value.objects_1.equals(HashMap_init_$Create$())) {
      tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 1, tmp2_cached[1], value.objects_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_0).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_vguomp_k$(encoder, value instanceof GameState ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function GameState_init_$Init$(seen1, perPlayerObjectCounts, objects, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_0().descriptor_1);
    }
    if (0 === (seen1 & 1))
      $this.perPlayerObjectCounts_1 = HashMap_init_$Create$();
    else
      $this.perPlayerObjectCounts_1 = perPlayerObjectCounts;
    if (0 === (seen1 & 2))
      $this.objects_1 = HashMap_init_$Create$();
    else
      $this.objects_1 = objects;
    return $this;
  }
  function GameState_init_$Create$(seen1, perPlayerObjectCounts, objects, serializationConstructorMarker) {
    return GameState_init_$Init$(seen1, perPlayerObjectCounts, objects, serializationConstructorMarker, objectCreate(protoOf(GameState)));
  }
  function GameState() {
    Companion_getInstance_0();
    this.perPlayerObjectCounts_1 = HashMap_init_$Create$();
    this.objects_1 = HashMap_init_$Create$();
  }
  protoOf(GameState).get_perPlayerObjectCounts_wwmdk_k$ = function () {
    return this.perPlayerObjectCounts_1;
  };
  protoOf(GameState).set_objects_b7crlz_k$ = function (_set____db54di) {
    this.objects_1 = _set____db54di;
  };
  protoOf(GameState).get_objects_q6k34l_k$ = function () {
    return this.objects_1;
  };
  protoOf(GameState).addObject_b1cesb_k$ = function (playerId, meshName, label) {
    var netObj = new NetObject(playerId, meshName, label);
    var tmp0_elvis_lhs = this.perPlayerObjectCounts_1.get_wei43m_k$(playerId);
    var perPlayerObjectId = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.perPlayerObjectCounts_1;
    var value = perPlayerObjectId + 1 | 0;
    this_0.put_4fpzoq_k$(playerId, value);
    var netObjectId = imul(perPlayerObjectId, 256) + playerId | 0;
    // Inline function 'kotlin.collections.set' call
    this.objects_1.put_4fpzoq_k$(netObjectId, netObj);
    return netObj;
  };
  protoOf(GameState).addObject$default_x0t4oc_k$ = function (playerId, meshName, label, $super) {
    label = label === VOID ? null : label;
    return $super === VOID ? this.addObject_b1cesb_k$(playerId, meshName, label) : $super.addObject_b1cesb_k$.call(this, playerId, meshName, label);
  };
  protoOf(GameState).dropPlayer_bkjcbs_k$ = function (playerId) {
    var tmp = this;
    // Inline function 'kotlin.collections.filterValues' call
    var this_0 = this.objects_1;
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var entry = tmp0_iterator.next_20eer_k$();
      // Inline function 'GameState.dropPlayer.<anonymous>' call
      if (!(entry.get_value_j01efc_k$().playerId_1 === playerId)) {
        result.put_4fpzoq_k$(entry.get_key_18j28a_k$(), entry.get_value_j01efc_k$());
      }
    }
    tmp.objects_1 = HashMap_init_$Create$_0(result);
  };
  protoOf(GameState).update_yc783r_k$ = function (dt, t) {
    var tmp = this;
    // Inline function 'kotlin.collections.filterValues' call
    var this_0 = this.objects_1;
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var entry = tmp0_iterator.next_20eer_k$();
      // Inline function 'GameState.update.<anonymous>' call
      if (entry.get_value_j01efc_k$().update_af0ow9_k$(dt, t)) {
        result.put_4fpzoq_k$(entry.get_key_18j28a_k$(), entry.get_value_j01efc_k$());
      }
    }
    tmp.objects_1 = HashMap_init_$Create$_0(result);
    // Inline function 'kotlin.collections.iterator' call
    var iObject = this.objects_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    if (!iObject.hasNext_bitz1p_k$()) {
      return Unit_getInstance();
    }
    var entry_0 = iObject.next_20eer_k$();
    var tmp_0 = 0;
    var tmp_1 = imul(this.objects_1.get_size_woubt6_k$(), 4);
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var netObj = entry_0.get_value_j01efc_k$();
      var index = entry_0.get_key_18j28a_k$();
      if ((tmp_3 % 4 | 0) === 3 ? iObject.hasNext_bitz1p_k$() : false) {
        entry_0 = iObject.next_20eer_k$();
      }
      // Inline function 'vision.gears.webglmath.Vec2.x' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$7 = netObj.position_1.get_storage_twal4e_k$()[0];
      var tmp_4 = (numberToInt(tmp$ret$7) / 2 | 0) - (tmp_3 % 2 | 0) | 0;
      // Inline function 'vision.gears.webglmath.Vec2.y' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$10 = netObj.position_1.get_storage_twal4e_k$()[1];
      tmp_2[tmp_3] = new GridEntry(tmp_4, (numberToInt(tmp$ret$10) / 2 | 0) - ((tmp_3 % 4 | 0) / 2 | 0) | 0, index);
      tmp_0 = tmp_0 + 1 | 0;
    }
    var linearGrid = tmp_2;
    sort(linearGrid);
    var candidates = HashSet_init_$Create$();
    var j = 0;
    while (j < linearGrid.length) {
      var k = j + 1 | 0;
      while ((k < linearGrid.length ? linearGrid[k].x_1 === linearGrid[j].x_1 : false) ? linearGrid[k].y_1 === linearGrid[j].y_1 : false) {
        candidates.add_utx5q5_k$(new Pair(linearGrid[j].id_1, linearGrid[k].id_1));
        k = k + 1 | 0;
      }
      j = j + 1 | 0;
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_1 = this.objects_1.get_values_ksazhn_k$();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'GameState.update.<anonymous>' call
      if (element.meshName_1 === 'mine') {
        destination.add_utx5q5_k$(element);
      }
    }
    var mines = destination;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = mines.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'GameState.update.<anonymous>' call
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_2 = this.objects_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var element_1 = tmp0_iterator_2.next_20eer_k$();
        // Inline function 'GameState.update.<anonymous>.<anonymous>' call
        if (element_1.meshName_1 === 'fighter' ? element_0.armed_1 : false) {
          // Inline function 'vision.gears.webglmath.Vec2.minus' call
          var this_2 = element_1.position_1;
          var other = element_0.position_1;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_5 = this_2.get_storage_twal4e_k$()[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_6 = tmp_5 - other.get_storage_twal4e_k$()[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_7 = this_2.get_storage_twal4e_k$()[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$22 = other.get_storage_twal4e_k$()[1];
          var diff = Vec2_init_$Create$(tmp_6, tmp_7 - tmp$ret$22);
          // Inline function 'vision.gears.webglmath.Vec2.dot' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_8 = diff.get_storage_twal4e_k$()[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_9 = tmp_8 * diff.get_storage_twal4e_k$()[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_10 = diff.get_storage_twal4e_k$()[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var distance2 = tmp_9 + tmp_10 * diff.get_storage_twal4e_k$()[1];
          if (distance2 < 16.0) {
            // Inline function 'vision.gears.webglmath.Vec2.normalize' call
            // Inline function 'vision.gears.webglmath.Vec2.length' call
            // Inline function 'kotlin.math.sqrt' call
            // Inline function 'vision.gears.webglmath.Vec2.lengthSquared' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_11 = diff.get_storage_twal4e_k$()[0];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_12 = tmp_11 * diff.get_storage_twal4e_k$()[0];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_13 = diff.get_storage_twal4e_k$()[1];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var x = tmp_12 + tmp_13 * diff.get_storage_twal4e_k$()[1];
            var l = Math.sqrt(x);
            var tmp0_array = diff.get_storage_twal4e_k$();
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp0_array[0] = tmp0_array[0] / l;
            var tmp2_array = diff.get_storage_twal4e_k$();
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp2_array[1] = tmp2_array[1] / l;
            var direction = diff;
            // Inline function 'vision.gears.webglmath.Vec2.plusAssign' call
            var this_3 = element_0.velocity_1;
            // Inline function 'vision.gears.webglmath.Vec2.times' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_14 = direction.get_storage_twal4e_k$()[0] * dt;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp$ret$54 = direction.get_storage_twal4e_k$()[1];
            var other_0 = Vec2_init_$Create$(tmp_14, tmp$ret$54 * dt);
            var tmp0_array_0 = this_3.get_storage_twal4e_k$();
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_15 = tmp0_array_0[0];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp0_array_0[0] = tmp_15 + other_0.get_storage_twal4e_k$()[0];
            var tmp2_array_0 = this_3.get_storage_twal4e_k$();
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_16 = tmp2_array_0[1];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp2_array_0[1] = tmp_16 + other_0.get_storage_twal4e_k$()[1];
          }
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_3 = candidates.iterator_jk1svi_k$();
    while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
      var element_2 = tmp0_iterator_3.next_20eer_k$();
      $l$block_3: {
        // Inline function 'GameState.update.<anonymous>' call
        var tmp0_elvis_lhs = this.objects_1.get_wei43m_k$(element_2.get_first_irdx8n_k$());
        var tmp_17;
        if (tmp0_elvis_lhs == null) {
          break $l$block_3;
        } else {
          tmp_17 = tmp0_elvis_lhs;
        }
        var i = tmp_17;
        var tmp1_elvis_lhs = this.objects_1.get_wei43m_k$(element_2.get_second_jf7fjx_k$());
        var tmp_18;
        if (tmp1_elvis_lhs == null) {
          break $l$block_3;
        } else {
          tmp_18 = tmp1_elvis_lhs;
        }
        var j_0 = tmp_18;
        if (i.meshName_1 === 'mine' ? !i.armed_1 : false) {
          break $l$block_3;
        }
        if (j_0.meshName_1 === 'mine' ? !j_0.armed_1 : false) {
          break $l$block_3;
        }
        if (i.meshName_1 === 'boom' ? true : j_0.meshName_1 === 'boom') {
          break $l$block_3;
        }
        // Inline function 'vision.gears.webglmath.Vec2.minus' call
        var this_4 = i.position_1;
        var other_1 = j_0.position_1;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_19 = this_4.get_storage_twal4e_k$()[0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_20 = tmp_19 - other_1.get_storage_twal4e_k$()[0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_21 = this_4.get_storage_twal4e_k$()[1];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$74 = other_1.get_storage_twal4e_k$()[1];
        var diff_0 = Vec2_init_$Create$(tmp_20, tmp_21 - tmp$ret$74);
        // Inline function 'vision.gears.webglmath.Vec2.dot' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_22 = diff_0.get_storage_twal4e_k$()[0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_23 = tmp_22 * diff_0.get_storage_twal4e_k$()[0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_24 = diff_0.get_storage_twal4e_k$()[1];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        if (tmp_23 + tmp_24 * diff_0.get_storage_twal4e_k$()[1] < i.collisionRadius_1 + j_0.collisionRadius_1) {
          // Inline function 'vision.gears.webglmath.Vec2.normalize' call
          // Inline function 'vision.gears.webglmath.Vec2.length' call
          // Inline function 'kotlin.math.sqrt' call
          // Inline function 'vision.gears.webglmath.Vec2.lengthSquared' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_25 = diff_0.get_storage_twal4e_k$()[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_26 = tmp_25 * diff_0.get_storage_twal4e_k$()[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_27 = diff_0.get_storage_twal4e_k$()[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var x_0 = tmp_26 + tmp_27 * diff_0.get_storage_twal4e_k$()[1];
          var l_0 = Math.sqrt(x_0);
          var tmp0_array_1 = diff_0.get_storage_twal4e_k$();
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp0_array_1[0] = tmp0_array_1[0] / l_0;
          var tmp2_array_1 = diff_0.get_storage_twal4e_k$();
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp2_array_1[1] = tmp2_array_1[1] / l_0;
          var collisionNormal = diff_0;
          // Inline function 'vision.gears.webglmath.Vec2.plusAssign' call
          var this_5 = i.position_1;
          // Inline function 'vision.gears.webglmath.Vec2.times' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_28 = collisionNormal.get_storage_twal4e_k$()[0] * 0.01;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$106 = collisionNormal.get_storage_twal4e_k$()[1];
          var other_2 = Vec2_init_$Create$(tmp_28, tmp$ret$106 * 0.01);
          var tmp0_array_2 = this_5.get_storage_twal4e_k$();
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_29 = tmp0_array_2[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp0_array_2[0] = tmp_29 + other_2.get_storage_twal4e_k$()[0];
          var tmp2_array_2 = this_5.get_storage_twal4e_k$();
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_30 = tmp2_array_2[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp2_array_2[1] = tmp_30 + other_2.get_storage_twal4e_k$()[1];
          // Inline function 'vision.gears.webglmath.Vec2.minusAssign' call
          var this_6 = j_0.position_1;
          // Inline function 'vision.gears.webglmath.Vec2.times' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_31 = collisionNormal.get_storage_twal4e_k$()[0] * 0.01;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$121 = collisionNormal.get_storage_twal4e_k$()[1];
          var other_3 = Vec2_init_$Create$(tmp_31, tmp$ret$121 * 0.01);
          var tmp0_array_3 = this_6.get_storage_twal4e_k$();
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_32 = tmp0_array_3[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp0_array_3[0] = tmp_32 - other_3.get_storage_twal4e_k$()[0];
          var tmp2_array_3 = this_6.get_storage_twal4e_k$();
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_33 = tmp2_array_3[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp2_array_3[1] = tmp_33 - other_3.get_storage_twal4e_k$()[1];
          // Inline function 'vision.gears.webglmath.Vec2.minus' call
          var this_7 = i.velocity_1;
          var other_4 = j_0.velocity_1;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_34 = this_7.get_storage_twal4e_k$()[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_35 = tmp_34 - other_4.get_storage_twal4e_k$()[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_36 = this_7.get_storage_twal4e_k$()[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$140 = other_4.get_storage_twal4e_k$()[1];
          var relativeVelocity = Vec2_init_$Create$(tmp_35, tmp_36 - tmp$ret$140);
          // Inline function 'vision.gears.webglmath.Vec2.dot' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_37 = relativeVelocity.get_storage_twal4e_k$()[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_38 = tmp_37 * collisionNormal.get_storage_twal4e_k$()[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_39 = relativeVelocity.get_storage_twal4e_k$()[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var relVelAlongNormal = tmp_38 + tmp_39 * collisionNormal.get_storage_twal4e_k$()[1];
          if (relVelAlongNormal < 0.0) {
            if (!(i.meshName_1 === 'fighter') ? true : !(j_0.meshName_1 === 'fighter')) {
              // Inline function 'vision.gears.webglmath.Vec2.times' call
              // Inline function 'vision.gears.webglmath.Vec2.plus' call
              var this_8 = i.position_1;
              var other_5 = j_0.position_1;
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_40 = this_8.get_storage_twal4e_k$()[0];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_41 = tmp_40 + other_5.get_storage_twal4e_k$()[0];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_42 = this_8.get_storage_twal4e_k$()[1];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp$ret$158 = other_5.get_storage_twal4e_k$()[1];
              var this_9 = Vec2_init_$Create$(tmp_41, tmp_42 + tmp$ret$158);
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_43 = this_9.get_storage_twal4e_k$()[0] * 0.5;
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp$ret$163 = this_9.get_storage_twal4e_k$()[1];
              var midpoint = Vec2_init_$Create$(tmp_43, tmp$ret$163 * 0.5);
              // Inline function 'kotlin.apply' call
              var this_10 = this.addObject$default_x0t4oc_k$(-1, 'boom');
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'GameState.update.<anonymous>.<anonymous>' call
              this_10.position_1.set_b6plua_k$(midpoint);
              this_10.lifetime_1 = 1.3;
            }
            if (i.meshName_1 === 'mine') {
              var impulseMagnitude = 10.0;
              // Inline function 'vision.gears.webglmath.Vec2.times' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_44 = collisionNormal.get_storage_twal4e_k$()[0] * impulseMagnitude;
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp$ret$169 = collisionNormal.get_storage_twal4e_k$()[1];
              var impulseVector = Vec2_init_$Create$(tmp_44, tmp$ret$169 * impulseMagnitude);
              // Inline function 'vision.gears.webglmath.Vec2.minusAssign' call
              var this_11 = j_0.velocity_1;
              var tmp0_array_4 = this_11.get_storage_twal4e_k$();
              // Inline function 'org.khronos.webgl.set' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_45 = tmp0_array_4[0];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp0_array_4[0] = tmp_45 - impulseVector.get_storage_twal4e_k$()[0];
              var tmp2_array_4 = this_11.get_storage_twal4e_k$();
              // Inline function 'org.khronos.webgl.set' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_46 = tmp2_array_4[1];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp2_array_4[1] = tmp_46 - impulseVector.get_storage_twal4e_k$()[1];
            } else if (j_0.meshName_1 === 'mine') {
              var impulseMagnitude_0 = 10.0;
              // Inline function 'vision.gears.webglmath.Vec2.times' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_47 = collisionNormal.get_storage_twal4e_k$()[0] * impulseMagnitude_0;
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp$ret$184 = collisionNormal.get_storage_twal4e_k$()[1];
              var impulseVector_0 = Vec2_init_$Create$(tmp_47, tmp$ret$184 * impulseMagnitude_0);
              // Inline function 'vision.gears.webglmath.Vec2.plusAssign' call
              var this_12 = i.velocity_1;
              var tmp0_array_5 = this_12.get_storage_twal4e_k$();
              // Inline function 'org.khronos.webgl.set' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_48 = tmp0_array_5[0];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp0_array_5[0] = tmp_48 + impulseVector_0.get_storage_twal4e_k$()[0];
              var tmp2_array_5 = this_12.get_storage_twal4e_k$();
              // Inline function 'org.khronos.webgl.set' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_49 = tmp2_array_5[1];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp2_array_5[1] = tmp_49 + impulseVector_0.get_storage_twal4e_k$()[1];
            } else {
              var e = 0.2;
              var impulse = -(1 + e) * relVelAlongNormal;
              // Inline function 'vision.gears.webglmath.Vec2.times' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_50 = collisionNormal.get_storage_twal4e_k$()[0] * impulse;
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp$ret$199 = collisionNormal.get_storage_twal4e_k$()[1];
              var impulseVector_1 = Vec2_init_$Create$(tmp_50, tmp$ret$199 * impulse);
              // Inline function 'vision.gears.webglmath.Vec2.plusAssign' call
              var this_13 = i.velocity_1;
              var tmp0_array_6 = this_13.get_storage_twal4e_k$();
              // Inline function 'org.khronos.webgl.set' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_51 = tmp0_array_6[0];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp0_array_6[0] = tmp_51 + impulseVector_1.get_storage_twal4e_k$()[0];
              var tmp2_array_6 = this_13.get_storage_twal4e_k$();
              // Inline function 'org.khronos.webgl.set' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_52 = tmp2_array_6[1];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp2_array_6[1] = tmp_52 + impulseVector_1.get_storage_twal4e_k$()[1];
              // Inline function 'vision.gears.webglmath.Vec2.minusAssign' call
              var this_14 = j_0.velocity_1;
              var tmp0_array_7 = this_14.get_storage_twal4e_k$();
              // Inline function 'org.khronos.webgl.set' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_53 = tmp0_array_7[0];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp0_array_7[0] = tmp_53 - impulseVector_1.get_storage_twal4e_k$()[0];
              var tmp2_array_7 = this_14.get_storage_twal4e_k$();
              // Inline function 'org.khronos.webgl.set' call
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp_54 = tmp2_array_7[1];
              // Inline function 'org.khronos.webgl.get' call
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp2_array_7[1] = tmp_54 - impulseVector_1.get_storage_twal4e_k$()[1];
            }
            if (i.meshName_1 === 'orb' ? true : i.meshName_1 === 'mine')
              i.lifetime_1 = 0.0;
            if (j_0.meshName_1 === 'orb' ? true : j_0.meshName_1 === 'mine')
              j_0.lifetime_1 = 0.0;
          }
        }
      }
    }
  };
  protoOf(GameState).onKeyDown_x500pg_k$ = function (playerId, key) {
    var tmp0_elvis_lhs = this.objects_1.get_wei43m_k$(playerId);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var obj = tmp;
    if (key === 'W') {
      obj.aheadThrust_1 = 5.0;
    }
    if (key === 'S') {
      obj.backThrust_1 = 5.0;
    }
    if (key === 'A') {
      obj.leftThrust_1 = 2.0;
    }
    if (key === 'D') {
      obj.rightThrust_1 = 2.0;
    }
    if (key === 'Q') {
      obj.ccwTorque_1 = 2.0;
    }
    if (key === 'E') {
      obj.cwTorque_1 = 2.0;
    }
    if (key === 'SPACE') {
      var tmp1_safe_receiver = this.objects_1.get_wei43m_k$(playerId);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp_0;
        if (tmp1_safe_receiver.cooldown_1 < 0.0) {
          // Inline function 'kotlin.math.cos' call
          var x = tmp1_safe_receiver.roll_1;
          var tmp_1 = Math.cos(x);
          // Inline function 'kotlin.math.sin' call
          var x_0 = tmp1_safe_receiver.roll_1;
          var tmp$ret$1 = Math.sin(x_0);
          var ahead = Vec2_init_$Create$(tmp_1, tmp$ret$1);
          // Inline function 'kotlin.apply' call
          var this_0 = this.addObject$default_x0t4oc_k$(playerId, 'orb');
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'GameState.onKeyDown.<anonymous>.<anonymous>' call
          // Inline function 'vision.gears.webglmath.Vec2.plus' call
          var this_1 = tmp1_safe_receiver.position_1;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_2 = this_1.get_storage_twal4e_k$()[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_3 = tmp_2 + ahead.get_storage_twal4e_k$()[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_4 = this_1.get_storage_twal4e_k$()[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$9 = ahead.get_storage_twal4e_k$()[1];
          var tmp$ret$10 = Vec2_init_$Create$(tmp_3, tmp_4 + tmp$ret$9);
          this_0.position_1.set_b6plua_k$(tmp$ret$10);
          // Inline function 'vision.gears.webglmath.Vec2.times' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_5 = ahead.get_storage_twal4e_k$()[0] * 15.0;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$14 = ahead.get_storage_twal4e_k$()[1];
          var tmp$ret$15 = Vec2_init_$Create$(tmp_5, tmp$ret$14 * 15.0);
          this_0.velocity_1.set_b6plua_k$(tmp$ret$15);
          this_0.lifetime_1 = 10.0;
          tmp1_safe_receiver.cooldown_1 = 1.0;
          tmp_0 = Unit_getInstance();
        }
      }
    }
    if (key === 'M') {
      var tmp2_safe_receiver = this.objects_1.get_wei43m_k$(playerId);
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp_6;
        if (tmp2_safe_receiver.cooldown_1 < 0.0) {
          // Inline function 'kotlin.math.cos' call
          var x_1 = tmp2_safe_receiver.roll_1;
          var tmp_7 = Math.cos(x_1);
          // Inline function 'kotlin.math.sin' call
          var x_2 = tmp2_safe_receiver.roll_1;
          var tmp$ret$19 = Math.sin(x_2);
          var ahead_0 = Vec2_init_$Create$(tmp_7, tmp$ret$19);
          // Inline function 'kotlin.apply' call
          var this_2 = this.addObject$default_x0t4oc_k$(playerId, 'mine');
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'GameState.onKeyDown.<anonymous>.<anonymous>' call
          // Inline function 'vision.gears.webglmath.Vec2.minus' call
          var this_3 = tmp2_safe_receiver.position_1;
          // Inline function 'vision.gears.webglmath.Vec2.times' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_8 = ahead_0.get_storage_twal4e_k$()[0] * 2.0;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$23 = ahead_0.get_storage_twal4e_k$()[1];
          var other = Vec2_init_$Create$(tmp_8, tmp$ret$23 * 2.0);
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_9 = this_3.get_storage_twal4e_k$()[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_10 = tmp_9 - other.get_storage_twal4e_k$()[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_11 = this_3.get_storage_twal4e_k$()[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$32 = other.get_storage_twal4e_k$()[1];
          var tmp$ret$33 = Vec2_init_$Create$(tmp_10, tmp_11 - tmp$ret$32);
          this_2.position_1.set_b6plua_k$(tmp$ret$33);
          this_2.velocity_1.set_k08diu_k$(new Float32Array([0.0, 0.0]));
          this_2.armedTime_1 = 3.0;
          this_2.collisionRadius_1 = 1.0;
          tmp2_safe_receiver.cooldown_1 = 1.0;
          tmp_6 = Unit_getInstance();
        }
      }
    }
  };
  protoOf(GameState).onKeyUp_mwcmgj_k$ = function (playerId, key) {
    var tmp0_elvis_lhs = this.objects_1.get_wei43m_k$(playerId);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var obj = tmp;
    if (key === 'W') {
      obj.aheadThrust_1 = 0.0;
    }
    if (key === 'S') {
      obj.backThrust_1 = 0.0;
    }
    if (key === 'A') {
      obj.leftThrust_1 = 0.0;
    }
    if (key === 'D') {
      obj.rightThrust_1 = 0.0;
    }
    if (key === 'Q') {
      obj.ccwTorque_1 = 0.0;
    }
    if (key === 'E') {
      obj.cwTorque_1 = 0.0;
    }
  };
  protoOf(GameState).applyServerState_4qrf8c_k$ = function (serverState) {
    this.objects_1 = serverState.objects_1;
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
      var tmp0_safe_receiver = $gameState.get_objects_q6k34l_k$().get_wei43m_k$($clientId);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = Unit_getInstance();
      } else {
        tmp0_safe_receiver.set_label_ck9rls_k$(name);
        tmp = Unit_getInstance();
      }
      return undefined;
    };
  }
  function main$lambda$lambda$lambda_0($clientId, $gameState) {
    return function () {
      console.log('User left, id: ' + $clientId);
      $gameState.dropPlayer_bkjcbs_k$($clientId);
      return undefined;
    };
  }
  function main$lambda$lambda$lambda_1($gameState, $clientId) {
    return function (key) {
      $gameState.onKeyDown_x500pg_k$($clientId, key);
      return undefined;
    };
  }
  function main$lambda$lambda$lambda_2($gameState, $clientId) {
    return function (key) {
      $gameState.onKeyUp_mwcmgj_k$($clientId, key);
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
      $gameState.addObject_b1cesb_k$(clientId, 'fighter', 'Player ' + clientId);
      return client.emit('welcome', clientId);
    };
  }
  function main$lambda$lambda_0($this$Json) {
    $this$Json.set_ignoreUnknownKeys_pzvtne_k$(true);
    return Unit_getInstance();
  }
  function main$lambda$lambda_1($timeAtLastFrame, $timeAtFirstFrame, $gameState, $json, $io) {
    return function (it) {
      var timeAtThisFrame = (new Date()).getTime();
      var dt = (timeAtThisFrame - $timeAtLastFrame._v) / 1000.0;
      var t = (timeAtThisFrame - $timeAtFirstFrame) / 1000.0;
      $timeAtLastFrame._v = timeAtThisFrame;
      $gameState.update_yc783r_k$(dt, t);
      var serializedGameState = $json.encodeToString_k0apqx_k$(Companion_getInstance_0().serializer_9w0wvi_k$(), $gameState);
      $io.emit('syncState', serializedGameState);
      return Unit_getInstance();
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
      return Unit_getInstance();
    };
  }
  function Drawable() {
  }
  protoOf(Drawable).gatherUniforms_nn33po_k$ = function (target) {
  };
  protoOf(Drawable).drawWithOverrides_pbiluj_k$ = function (overrides, uniformProviders) {
    this.draw_66n5ep_k$(uniformProviders.slice());
  };
  function Geometry() {
    Drawable.call(this);
  }
  protoOf(Geometry).draw_66n5ep_k$ = function (uniformProviders) {
    this.draw_ppja18_k$();
  };
  protoOf(Geometry).drawWithOverrides_pbiluj_k$ = function (overrides, uniformProviders) {
    this.draw_66n5ep_k$(uniformProviders.slice());
  };
  protoOf(Geometry).gatherUniforms_nn33po_k$ = function (target) {
  };
  function Mat4_init_$Init$(elements, $this) {
    Mat4.call($this, null, 0);
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(16), null);
    while (tmp < 16) {
      var tmp_1 = tmp;
      var tmp0_elvis_lhs = getOrNull(elements, imul(tmp_1 % 4 | 0, 4) + (tmp_1 / 4 | 0) | 0);
      tmp_0[tmp_1] = tmp0_elvis_lhs == null ? (tmp_1 % 5 | 0) === 0 ? 1.0 : 0.0 : tmp0_elvis_lhs;
      tmp = tmp + 1 | 0;
    }
    var allElements = tmp_0;
    $this.storage_1.set(allElements);
    return $this;
  }
  function Mat4_init_$Create$(elements) {
    return Mat4_init_$Init$(elements, objectCreate(protoOf(Mat4)));
  }
  function Mat4_init_$Init$_0(other, $this) {
    Mat4.call($this, null, 0);
    $this.storage_1.set(other.storage_1);
    return $this;
  }
  function Mat4_init_$Create$_0(other) {
    return Mat4_init_$Init$_0(other, objectCreate(protoOf(Mat4)));
  }
  function Mat4(backingStorage, offset) {
    offset = offset === VOID ? 0 : offset;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(offset, offset + 16 | 0);
    tmp.storage_1 = tmp1_elvis_lhs == null ? new Float32Array(16) : tmp1_elvis_lhs;
  }
  protoOf(Mat4).get_storage_twal4e_k$ = function () {
    return this.storage_1;
  };
  protoOf(Mat4).clone_1keycd_k$ = function () {
    return Mat4_init_$Create$_0(this);
  };
  protoOf(Mat4).set_k08diu_k$ = function (values) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(16), null);
    while (tmp < 16) {
      var tmp_1 = tmp;
      var tmp0_elvis_lhs = getOrNull(values, imul(tmp_1 % 4 | 0, 4) + (tmp_1 / 4 | 0) | 0);
      tmp_0[tmp_1] = tmp0_elvis_lhs == null ? (tmp_1 % 5 | 0) === 0 ? 1.0 : 0.0 : tmp0_elvis_lhs;
      tmp = tmp + 1 | 0;
    }
    var allElements = tmp_0;
    this.storage_1.set(allElements);
    return this;
  };
  protoOf(Mat4).set_b6plua_k$ = function (other) {
    if (other instanceof Mat4) {
      this.storage_1.set(other.storage_1);
    } else {
      throw Error_init_$Create$('A Mat4 cannot be set from a Uniform of another type.');
    }
    return this;
  };
  protoOf(Mat4).fromQuaternion_irvixk_k$ = function (x, y, z, w) {
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[0] = 2.0 * (w * w + x * x) - 1.0;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[1] = 2.0 * (x * y - w * z);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[2] = 2.0 * (x * z + w * y);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[3] = 0.0;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[4] = 2.0 * (x * y + w * z);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[5] = 2.0 * (w * w + y * y) - 1.0;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[6] = 2.0 * (y * z - w * x);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[7] = 0.0;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[8] = 2.0 * (x * z - w * y);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[9] = 2.0 * (y * z + w * x);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[10] = 2.0 * (w * w + z * z) - 1.0;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[11] = 0.0;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[12] = 0.0;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[13] = 0.0;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[14] = 0.0;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[15] = 1.0;
  };
  protoOf(Mat4).premul_dp76gq_k$ = function (m) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n00 = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n01 = this.storage_1[4];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n02 = this.storage_1[8];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n03 = this.storage_1[12];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n10 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n11 = this.storage_1[5];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n12 = this.storage_1[9];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n13 = this.storage_1[13];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n20 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n21 = this.storage_1[6];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n22 = this.storage_1[10];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n23 = this.storage_1[14];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n30 = this.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n31 = this.storage_1[7];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n32 = this.storage_1[11];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n33 = this.storage_1[15];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m00 = m.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m01 = m.storage_1[4];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m02 = m.storage_1[8];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m03 = m.storage_1[12];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m10 = m.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m11 = m.storage_1[5];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m12 = m.storage_1[9];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m13 = m.storage_1[13];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m20 = m.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m21 = m.storage_1[6];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m22 = m.storage_1[10];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m23 = m.storage_1[14];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m30 = m.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m31 = m.storage_1[7];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m32 = m.storage_1[11];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m33 = m.storage_1[15];
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[0] = m00 * n00 + m01 * n10 + m02 * n20 + m03 * n30;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[1] = m10 * n00 + m11 * n10 + m12 * n20 + m13 * n30;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[2] = m20 * n00 + m21 * n10 + m22 * n20 + m23 * n30;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[3] = m30 * n00 + m31 * n10 + m32 * n20 + m33 * n30;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[4] = m00 * n01 + m01 * n11 + m02 * n21 + m03 * n31;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[5] = m10 * n01 + m11 * n11 + m12 * n21 + m13 * n31;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[6] = m20 * n01 + m21 * n11 + m22 * n21 + m23 * n31;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[7] = m30 * n01 + m31 * n11 + m32 * n21 + m33 * n31;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[8] = m00 * n02 + m01 * n12 + m02 * n22 + m03 * n32;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[9] = m10 * n02 + m11 * n12 + m12 * n22 + m13 * n32;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[10] = m20 * n02 + m21 * n12 + m22 * n22 + m23 * n32;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[11] = m30 * n02 + m31 * n12 + m32 * n22 + m33 * n32;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[12] = m00 * n03 + m01 * n13 + m02 * n23 + m03 * n33;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[13] = m10 * n03 + m11 * n13 + m12 * n23 + m13 * n33;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[14] = m20 * n03 + m21 * n13 + m22 * n23 + m23 * n33;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[15] = m30 * n03 + m31 * n13 + m32 * n23 + m33 * n33;
    return this;
  };
  protoOf(Mat4).timesAssign_vrzt1e_k$ = function (m) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m00 = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m01 = this.storage_1[4];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m02 = this.storage_1[8];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m03 = this.storage_1[12];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m10 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m11 = this.storage_1[5];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m12 = this.storage_1[9];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m13 = this.storage_1[13];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m20 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m21 = this.storage_1[6];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m22 = this.storage_1[10];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m23 = this.storage_1[14];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m30 = this.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m31 = this.storage_1[7];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m32 = this.storage_1[11];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m33 = this.storage_1[15];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n00 = m.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n01 = m.storage_1[4];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n02 = m.storage_1[8];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n03 = m.storage_1[12];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n10 = m.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n11 = m.storage_1[5];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n12 = m.storage_1[9];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n13 = m.storage_1[13];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n20 = m.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n21 = m.storage_1[6];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n22 = m.storage_1[10];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n23 = m.storage_1[14];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n30 = m.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n31 = m.storage_1[7];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n32 = m.storage_1[11];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var n33 = m.storage_1[15];
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[0] = m00 * n00 + m01 * n10 + m02 * n20 + m03 * n30;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[1] = m10 * n00 + m11 * n10 + m12 * n20 + m13 * n30;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[2] = m20 * n00 + m21 * n10 + m22 * n20 + m23 * n30;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[3] = m30 * n00 + m31 * n10 + m32 * n20 + m33 * n30;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[4] = m00 * n01 + m01 * n11 + m02 * n21 + m03 * n31;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[5] = m10 * n01 + m11 * n11 + m12 * n21 + m13 * n31;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[6] = m20 * n01 + m21 * n11 + m22 * n21 + m23 * n31;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[7] = m30 * n01 + m31 * n11 + m32 * n21 + m33 * n31;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[8] = m00 * n02 + m01 * n12 + m02 * n22 + m03 * n32;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[9] = m10 * n02 + m11 * n12 + m12 * n22 + m13 * n32;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[10] = m20 * n02 + m21 * n12 + m22 * n22 + m23 * n32;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[11] = m30 * n02 + m31 * n12 + m32 * n22 + m33 * n32;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[12] = m00 * n03 + m01 * n13 + m02 * n23 + m03 * n33;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[13] = m10 * n03 + m11 * n13 + m12 * n23 + m13 * n33;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[14] = m20 * n03 + m21 * n13 + m22 * n23 + m23 * n33;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[15] = m30 * n03 + m31 * n13 + m32 * n23 + m33 * n33;
  };
  protoOf(Mat4).times_93xthb_k$ = function (m) {
    var res = Mat4_init_$Create$_0(this);
    res.timesAssign_vrzt1e_k$(m);
    return res;
  };
  protoOf(Mat4).timesAssign_9pohfx_k$ = function (s) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp0_array[0] * s;
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp2_array[1] * s;
    var tmp4_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp4_array[2] * s;
    var tmp6_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp6_array[3] = tmp6_array[3] * s;
    var tmp8_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp8_array[4] = tmp8_array[4] * s;
    var tmp10_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp10_array[5] = tmp10_array[5] * s;
    var tmp12_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp12_array[6] = tmp12_array[6] * s;
    var tmp14_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp14_array[7] = tmp14_array[7] * s;
    var tmp16_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp16_array[8] = tmp16_array[8] * s;
    var tmp18_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp18_array[9] = tmp18_array[9] * s;
    var tmp20_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp20_array[10] = tmp20_array[10] * s;
    var tmp22_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp22_array[12] = tmp22_array[12] * s;
    var tmp24_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp24_array[13] = tmp24_array[13] * s;
    var tmp26_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp26_array[14] = tmp26_array[14] * s;
    var tmp28_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp28_array[15] = tmp28_array[15] * s;
  };
  protoOf(Mat4).times_422v76_k$ = function (s) {
    var res = Mat4_init_$Create$_0(this);
    res.timesAssign_9pohfx_k$(s);
    return res;
  };
  protoOf(Mat4).times_9bhs1h_k$ = function (v) {
    var vp = Vec4_init_$Create$();
    // Inline function 'org.khronos.webgl.set' call
    var this_0 = vp.get_storage_twal4e_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * v.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_0 + tmp_1 * v.get_storage_twal4e_k$()[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp_2 + tmp_3 * v.get_storage_twal4e_k$()[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = this.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0[0] = tmp_4 + tmp_5 * v.get_storage_twal4e_k$()[3];
    // Inline function 'org.khronos.webgl.set' call
    var this_1 = vp.get_storage_twal4e_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = this.storage_1[4];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_7 = tmp_6 * v.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = this.storage_1[5];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = tmp_7 + tmp_8 * v.get_storage_twal4e_k$()[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = this.storage_1[6];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_11 = tmp_9 + tmp_10 * v.get_storage_twal4e_k$()[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_12 = this.storage_1[7];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this_1[1] = tmp_11 + tmp_12 * v.get_storage_twal4e_k$()[3];
    // Inline function 'org.khronos.webgl.set' call
    var this_2 = vp.get_storage_twal4e_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_13 = this.storage_1[8];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_14 = tmp_13 * v.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_15 = this.storage_1[9];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_16 = tmp_14 + tmp_15 * v.get_storage_twal4e_k$()[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_17 = this.storage_1[10];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_18 = tmp_16 + tmp_17 * v.get_storage_twal4e_k$()[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_19 = this.storage_1[11];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this_2[2] = tmp_18 + tmp_19 * v.get_storage_twal4e_k$()[3];
    // Inline function 'org.khronos.webgl.set' call
    var this_3 = vp.get_storage_twal4e_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_20 = this.storage_1[12];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_21 = tmp_20 * v.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_22 = this.storage_1[13];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_23 = tmp_21 + tmp_22 * v.get_storage_twal4e_k$()[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_24 = this.storage_1[14];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_25 = tmp_23 + tmp_24 * v.get_storage_twal4e_k$()[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_26 = this.storage_1[15];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this_3[3] = tmp_25 + tmp_26 * v.get_storage_twal4e_k$()[3];
    return vp;
  };
  protoOf(Mat4).scale_wgbp3h_k$ = function (s) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = s.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = s.get_storage_twal4e_k$()[1];
    return this.scale_3dlwnm_k$(tmp, tmp$ret$3, 1.0);
  };
  protoOf(Mat4).scale_x4gbzm_k$ = function (s) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = s.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = s.get_storage_twal4e_k$()[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = s.get_storage_twal4e_k$()[2];
    return this.scale_3dlwnm_k$(tmp, tmp_0, tmp$ret$5);
  };
  protoOf(Mat4).scale_3dlwnm_k$ = function (sx, sy, sz) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp0_array[0] * sx;
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp2_array[1] * sx;
    var tmp4_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp4_array[2] * sx;
    var tmp6_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp6_array[3] = tmp6_array[3] * sx;
    var tmp8_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp8_array[4] = tmp8_array[4] * sy;
    var tmp10_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp10_array[5] = tmp10_array[5] * sy;
    var tmp12_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp12_array[6] = tmp12_array[6] * sy;
    var tmp14_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp14_array[7] = tmp14_array[7] * sy;
    var tmp16_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp16_array[8] = tmp16_array[8] * sz;
    var tmp18_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp18_array[9] = tmp18_array[9] * sz;
    var tmp20_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp20_array[10] = tmp20_array[10] * sz;
    var tmp22_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp22_array[11] = tmp22_array[11] * sz;
    return this;
  };
  protoOf(Mat4).scale$default_2z8h2q_k$ = function (sx, sy, sz, $super) {
    sx = sx === VOID ? 1.0 : sx;
    sy = sy === VOID ? 1.0 : sy;
    sz = sz === VOID ? 1.0 : sz;
    return $super === VOID ? this.scale_3dlwnm_k$(sx, sy, sz) : $super.scale_3dlwnm_k$.call(this, sx, sy, sz);
  };
  protoOf(Mat4).rotate_n1s81r_k$ = function (angle, axis) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = axis.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = axis.get_storage_twal4e_k$()[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = axis.get_storage_twal4e_k$()[2];
    return this.rotate_4h2yp1_k$(angle, tmp, tmp_0, tmp$ret$5);
  };
  protoOf(Mat4).rotate_4h2yp1_k$ = function (angle, axisX, axisY, axisZ) {
    var x = axisX;
    var y = axisY;
    var z = axisZ;
    var axisLength2 = x * x + y * y + z * z;
    if (axisLength2 < 1.0E-4) {
      x = 0.0;
      y = 0.0;
      z = 1.0;
    } else if (axisLength2 < 0.999 ? true : axisLength2 > 1.001) {
      // Inline function 'kotlin.math.sqrt' call
      var axisLength = Math.sqrt(axisLength2);
      x = x / axisLength;
      y = y / axisLength;
      z = z / axisLength;
    }
    // Inline function 'kotlin.math.cos' call
    var cosa = Math.cos(angle);
    // Inline function 'kotlin.math.sin' call
    var sina = Math.sin(angle);
    var C = 1.0 - cosa;
    var m11 = x * x * C + cosa;
    var m21 = x * y * C - z * sina;
    var m31 = x * z * C + y * sina;
    var m12 = y * x * C + z * sina;
    var m22 = y * y * C + cosa;
    var m32 = y * z * C - x * sina;
    var m13 = z * x * C - y * sina;
    var m23 = z * y * C + x * sina;
    var m33 = z * z * C + cosa;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0] * m11;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp + this.storage_1[4] * m21;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t0 = tmp_0 + this.storage_1[8] * m31;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[0] * m12;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 + this.storage_1[4] * m22;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t4 = tmp_2 + this.storage_1[8] * m32;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[0] * m13;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp_3 + this.storage_1[4] * m23;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t8 = tmp_4 + this.storage_1[8] * m33;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = this.storage_1[1] * m11;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = tmp_5 + this.storage_1[5] * m21;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t1 = tmp_6 + this.storage_1[9] * m31;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_7 = this.storage_1[1] * m12;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = tmp_7 + this.storage_1[5] * m22;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t5 = tmp_8 + this.storage_1[9] * m32;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = this.storage_1[1] * m13;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = tmp_9 + this.storage_1[5] * m23;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t9 = tmp_10 + this.storage_1[9] * m33;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_11 = this.storage_1[2] * m11;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_12 = tmp_11 + this.storage_1[6] * m21;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t2 = tmp_12 + this.storage_1[10] * m31;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_13 = this.storage_1[2] * m12;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_14 = tmp_13 + this.storage_1[6] * m22;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t6 = tmp_14 + this.storage_1[10] * m32;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_15 = this.storage_1[2] * m13;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_16 = tmp_15 + this.storage_1[6] * m23;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t10 = tmp_16 + this.storage_1[10] * m33;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_17 = this.storage_1[3] * m11;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_18 = tmp_17 + this.storage_1[7] * m21;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t3 = tmp_18 + this.storage_1[11] * m31;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_19 = this.storage_1[3] * m12;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_20 = tmp_19 + this.storage_1[7] * m22;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t7 = tmp_20 + this.storage_1[11] * m32;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_21 = this.storage_1[3] * m13;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_22 = tmp_21 + this.storage_1[7] * m23;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t11 = tmp_22 + this.storage_1[11] * m33;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[0] = t0;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[4] = t4;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[8] = t8;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[1] = t1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[5] = t5;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[9] = t9;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[2] = t2;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[6] = t6;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[10] = t10;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[3] = t3;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[7] = t7;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[11] = t11;
    return this;
  };
  protoOf(Mat4).rotate$default_nvgy92_k$ = function (angle, axisX, axisY, axisZ, $super) {
    angle = angle === VOID ? 0.0 : angle;
    axisX = axisX === VOID ? 0.0 : axisX;
    axisY = axisY === VOID ? 0.0 : axisY;
    axisZ = axisZ === VOID ? 0.0 : axisZ;
    return $super === VOID ? this.rotate_4h2yp1_k$(angle, axisX, axisY, axisZ) : $super.rotate_4h2yp1_k$.call(this, angle, axisX, axisY, axisZ);
  };
  protoOf(Mat4).translate_9gvdd_k$ = function (t) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = t.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = t.get_storage_twal4e_k$()[1];
    return this.translate$default_tzkw0i_k$(tmp, tmp$ret$3);
  };
  protoOf(Mat4).translate_5psw9e_k$ = function (t) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = t.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = t.get_storage_twal4e_k$()[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = t.get_storage_twal4e_k$()[2];
    return this.translate_7qn1t6_k$(tmp, tmp_0, tmp$ret$5);
  };
  protoOf(Mat4).translate_7qn1t6_k$ = function (x, y, z) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp + this.storage_1[12] * x;
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_array[4];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[4] = tmp_0 + this.storage_1[12] * y;
    var tmp4_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp4_array[8];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[8] = tmp_1 + this.storage_1[12] * z;
    var tmp6_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp6_array[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp6_array[1] = tmp_2 + this.storage_1[13] * x;
    var tmp8_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = tmp8_array[5];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp8_array[5] = tmp_3 + this.storage_1[13] * y;
    var tmp10_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp10_array[9];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp10_array[9] = tmp_4 + this.storage_1[13] * z;
    var tmp12_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = tmp12_array[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp12_array[2] = tmp_5 + this.storage_1[14] * x;
    var tmp14_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = tmp14_array[6];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp14_array[6] = tmp_6 + this.storage_1[14] * y;
    var tmp16_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_7 = tmp16_array[10];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp16_array[10] = tmp_7 + this.storage_1[14] * z;
    var tmp18_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = tmp18_array[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp18_array[3] = tmp_8 + this.storage_1[15] * x;
    var tmp20_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = tmp20_array[7];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp20_array[7] = tmp_9 + this.storage_1[15] * y;
    var tmp22_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = tmp22_array[11];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp22_array[11] = tmp_10 + this.storage_1[15] * z;
    return this;
  };
  protoOf(Mat4).translate$default_tzkw0i_k$ = function (x, y, z, $super) {
    x = x === VOID ? 0.0 : x;
    y = y === VOID ? 0.0 : y;
    z = z === VOID ? 0.0 : z;
    return $super === VOID ? this.translate_7qn1t6_k$(x, y, z) : $super.translate_7qn1t6_k$.call(this, x, y, z);
  };
  protoOf(Mat4).transpose_hewoqh_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var temp = this.storage_1[4];
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[4] = this.storage_1[1];
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[1] = temp;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    temp = this.storage_1[8];
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[8] = this.storage_1[2];
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[2] = temp;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    temp = this.storage_1[12];
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[12] = this.storage_1[3];
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[3] = temp;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    temp = this.storage_1[9];
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[9] = this.storage_1[6];
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[6] = temp;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    temp = this.storage_1[13];
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[13] = this.storage_1[7];
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[7] = temp;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    temp = this.storage_1[14];
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[14] = this.storage_1[11];
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[11] = temp;
    return this;
  };
  protoOf(Mat4).invert_jkqv56_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var a00 = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var a01 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var a02 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var a03 = this.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m000 = this.storage_1[4];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m001 = this.storage_1[5];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m002 = this.storage_1[6];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m003 = this.storage_1[7];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m100 = this.storage_1[8];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m101 = this.storage_1[9];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m102 = this.storage_1[10];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m103 = this.storage_1[11];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m200 = this.storage_1[12];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m201 = this.storage_1[13];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m202 = this.storage_1[14];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m203 = this.storage_1[15];
    var b00 = a00 * m001 - a01 * m000;
    var b01 = a00 * m002 - a02 * m000;
    var b02 = a00 * m003 - a03 * m000;
    var b03 = a01 * m002 - a02 * m001;
    var b04 = a01 * m003 - a03 * m001;
    var b05 = a02 * m003 - a03 * m002;
    var b06 = m100 * m201 - m101 * m200;
    var b07 = m100 * m202 - m102 * m200;
    var b08 = m100 * m203 - m103 * m200;
    var b09 = m101 * m202 - m102 * m201;
    var m010 = m101 * m203 - m103 * m201;
    var m011 = m102 * m203 - m103 * m202;
    var det = b00 * m011 - b01 * m010 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (det === 0.0) {
      return this;
    }
    var invDet = 1.0 / det;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[0] = (m001 * m011 - m002 * m010 + m003 * b09) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[1] = (-a01 * m011 + a02 * m010 - a03 * b09) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[2] = (m201 * b05 - m202 * b04 + m203 * b03) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[3] = (-m101 * b05 + m102 * b04 - m103 * b03) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[4] = (-m000 * m011 + m002 * b08 - m003 * b07) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[5] = (a00 * m011 - a02 * b08 + a03 * b07) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[6] = (-m200 * b05 + m202 * b02 - m203 * b01) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[7] = (m100 * b05 - m102 * b02 + m103 * b01) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[8] = (m000 * m010 - m001 * b08 + m003 * b06) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[9] = (-a00 * m010 + a01 * b08 - a03 * b06) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[10] = (m200 * b04 - m201 * b02 + m203 * b00) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[11] = (-m100 * b04 + m101 * b02 - m103 * b00) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[12] = (-m000 * b09 + m001 * b07 - m002 * b06) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[13] = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[14] = (-m200 * b03 + m201 * b01 - m202 * b00) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[15] = (m100 * b03 - m101 * b01 + m102 * b00) * invDet;
    return this;
  };
  protoOf(Mat4).provideDelegate_i9or2y_k$ = function (provider, property) {
    provider.register_elwjfb_k$(property.callableName, this);
    return this;
  };
  protoOf(Mat4).getValue_npgje7_k$ = function (provider, property) {
    return this;
  };
  protoOf(Mat4).setValue_64u1ja_k$ = function (provider, property, value) {
    this.set_b6plua_k$(value);
  };
  protoOf(Mat4).commit_6y6sig_k$ = function (gl, uniformLocation, samplerIndex) {
    gl.uniformMatrix4fv(uniformLocation, false, this.storage_1);
  };
  protoOf(Mat4).get_glType_du95mw_k$ = function () {
    return WebGLRenderingContext.FLOAT_MAT4;
  };
  function Mat4Array_init_$Init$(size, $this) {
    Mat4Array.call($this, null, size, size);
    return $this;
  }
  function Mat4Array_init_$Create$(size) {
    return Mat4Array_init_$Init$(size, objectCreate(protoOf(Mat4Array)));
  }
  function Mat4Array(backingStorage, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? 0 : endIndex;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(imul(startIndex, 16), imul(endIndex, 16));
    tmp.storage_1 = tmp1_elvis_lhs == null ? new Float32Array(imul(startIndex, 16)) : tmp1_elvis_lhs;
  }
  protoOf(Mat4Array).get_storage_twal4e_k$ = function () {
    return this.storage_1;
  };
  protoOf(Mat4Array).set_k08diu_k$ = function (values) {
    var inductionVariable = 0;
    var last = this.storage_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        var tmp1_elvis_lhs = getOrNull(values, i % 16 | 0);
        // Inline function 'kotlin.js.asDynamic' call
        this_0[i] = tmp1_elvis_lhs == null ? ((i % 16 | 0) % 5 | 0) === 0 ? 1.0 : 0.0 : tmp1_elvis_lhs;
      }
       while (inductionVariable < last);
    return this;
  };
  protoOf(Mat4Array).get_c1px32_k$ = function (i) {
    return new Mat4(this.storage_1, imul(i, 16));
  };
  protoOf(Mat4Array).provideDelegate_i9or2y_k$ = function (provider, property) {
    provider.register_elwjfb_k$(property.callableName + '[0]', this);
    return this;
  };
  protoOf(Mat4Array).getValue_npgje7_k$ = function (provider, property) {
    return this;
  };
  protoOf(Mat4Array).setValue_ll0ijp_k$ = function (provider, property, value) {
    this.set_b6plua_k$(value);
  };
  protoOf(Mat4Array).subarray_pw2d2f_k$ = function (begin, end) {
    return new Mat4Array(this.storage_1, begin, end);
  };
  protoOf(Mat4Array).fill_o3vhf0_k$ = function (value) {
    var inductionVariable = 0;
    var last = this.storage_1.length / 16 | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.get_c1px32_k$(i).set_b6plua_k$(value);
      }
       while (inductionVariable < last);
  };
  protoOf(Mat4Array).commit_6y6sig_k$ = function (gl, uniformLocation, samplerIndex) {
    gl.uniformMatrix4fv(uniformLocation, false, this.storage_1);
  };
  protoOf(Mat4Array).get_glType_du95mw_k$ = function () {
    return WebGLRenderingContext.FLOAT_MAT4;
  };
  function UniformDescriptor(name, type, size, location) {
    this.name_1 = name;
    this.type_1 = type;
    this.size_1 = size;
    this.location_1 = location;
  }
  protoOf(UniformDescriptor).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(UniformDescriptor).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(UniformDescriptor).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(UniformDescriptor).get_location_d3s02_k$ = function () {
    return this.location_1;
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).makeVar_qi2tg9_k$ = function (type, arraySize) {
    if (arraySize === 1) {
      if (type === WebGLRenderingContext.FLOAT)
        return Vec1_init_$Create$();
      else if (type === WebGLRenderingContext.FLOAT_VEC2)
        return Vec2_init_$Create$();
      else if (type === WebGLRenderingContext.FLOAT_VEC3)
        return Vec3_init_$Create$();
      else if (type === WebGLRenderingContext.FLOAT_VEC4)
        return Vec4_init_$Create$();
      else if (type === WebGLRenderingContext.FLOAT_MAT4)
        return Mat4_init_$Create$(new Float32Array([]));
      else if (type === get_UNSIGNED_INT_SAMPLER_2D(WebGLRenderingContext) ? true : type === WebGLRenderingContext.SAMPLER_2D)
        return new Sampler2D();
      else if (type === WebGLRenderingContext.SAMPLER_CUBE)
        return new SamplerCube();
      else if (type === get_SAMPLER_3D(WebGLRenderingContext))
        return new Sampler3D();
    } else {
      if (type === WebGLRenderingContext.FLOAT)
        return Vec1Array_init_$Create$(arraySize);
      else if (type === WebGLRenderingContext.FLOAT_VEC2)
        return Vec2Array_init_$Create$(arraySize);
      else if (type === WebGLRenderingContext.FLOAT_VEC3)
        return Vec3Array_init_$Create$(arraySize);
      else if (type === WebGLRenderingContext.FLOAT_VEC4)
        return Vec4Array_init_$Create$(arraySize);
      else if (type === WebGLRenderingContext.FLOAT_MAT4)
        return Mat4Array_init_$Create$(arraySize);
    }
    throw Error_init_$Create$('Unhandled uniform variable of type ID ' + type + '.');
  };
  protoOf(Companion_1).isSampler_suya6y_k$ = function (type) {
    return (((((((((((((type === WebGLRenderingContext.SAMPLER_2D ? true : type === get_SAMPLER_3D(WebGLRenderingContext)) ? true : type === WebGLRenderingContext.SAMPLER_CUBE) ? true : type === get_SAMPLER_2D_SHADOW(WebGLRenderingContext)) ? true : type === get_SAMPLER_2D_ARRAY(WebGLRenderingContext)) ? true : type === get_SAMPLER_2D_ARRAY_SHADOW(WebGLRenderingContext)) ? true : type === get_SAMPLER_CUBE_SHADOW(WebGLRenderingContext)) ? true : type === get_INT_SAMPLER_2D(WebGLRenderingContext)) ? true : type === get_INT_SAMPLER_3D(WebGLRenderingContext)) ? true : type === get_INT_SAMPLER_CUBE(WebGLRenderingContext)) ? true : type === get_INT_SAMPLER_2D_ARRAY(WebGLRenderingContext)) ? true : type === get_UNSIGNED_INT_SAMPLER_2D(WebGLRenderingContext)) ? true : type === get_UNSIGNED_INT_SAMPLER_3D(WebGLRenderingContext)) ? true : type === get_UNSIGNED_INT_SAMPLER_CUBE(WebGLRenderingContext)) ? true : type === get_UNSIGNED_INT_SAMPLER_2D_ARRAY(WebGLRenderingContext);
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ProgramReflection(gl, glProgram) {
    Companion_getInstance_1();
    Drawable.call(this);
    this.gl_1 = gl;
    this.glProgram_1 = glProgram;
    this.uniformDescriptors_1 = HashMap_init_$Create$();
    var tmp = this.gl_1.getProgramParameter(this.glProgram_1, WebGLRenderingContext.ACTIVE_UNIFORMS);
    var nUniforms = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var inductionVariable = 0;
    if (inductionVariable < nUniforms)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var glUniform = ensureNotNull(this.gl_1.getActiveUniform(this.glProgram_1, i));
        var nameParts = split(glUniform.name, ['.']);
        var tmp1_elvis_lhs = lastOrNull(nameParts);
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var uniformName = tmp_0;
        var tmp2_elvis_lhs = lastOrNull(dropLast(nameParts, 1));
        var tmp_1;
        if (tmp2_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_1 = tmp2_elvis_lhs;
        }
        var structName = tmp_1;
        // Inline function 'kotlin.collections.set' call
        var this_0 = this.uniformDescriptors_1;
        var tmp3_elvis_lhs = this.uniformDescriptors_1.get_wei43m_k$(structName);
        var value = tmp3_elvis_lhs == null ? ArrayList_init_$Create$() : tmp3_elvis_lhs;
        this_0.put_4fpzoq_k$(structName, value);
        ensureNotNull(this.uniformDescriptors_1.get_wei43m_k$(structName)).add_utx5q5_k$(new UniformDescriptor(uniformName, glUniform.type, glUniform.size, ensureNotNull(this.gl_1.getUniformLocation(this.glProgram_1, glUniform.name))));
      }
       while (inductionVariable < nUniforms);
  }
  protoOf(ProgramReflection).get_gl_kntnyq_k$ = function () {
    return this.gl_1;
  };
  protoOf(ProgramReflection).get_glProgram_63s9u2_k$ = function () {
    return this.glProgram_1;
  };
  protoOf(ProgramReflection).get_uniformDescriptors_s6uprb_k$ = function () {
    return this.uniformDescriptors_1;
  };
  protoOf(ProgramReflection).gatherUniforms_nn33po_k$ = function (target) {
    var indexedObject = target.get_glslStructNames_7iy4do_k$();
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var structName = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_elvis_lhs = this.uniformDescriptors_1.get_wei43m_k$(structName);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var descList = tmp;
      var tmp2_iterator = descList.iterator_jk1svi_k$();
      while (tmp2_iterator.hasNext_bitz1p_k$()) {
        var uniformDesc = tmp2_iterator.next_20eer_k$();
        var reflectionVariable = Companion_getInstance_1().makeVar_qi2tg9_k$(uniformDesc.type_1, uniformDesc.size_1);
        if (target.get_uniforms_y6pqfc_k$().containsKey_aw81wo_k$(uniformDesc.name_1)) {
          var tmp3_elvis_lhs = target.get_uniforms_y6pqfc_k$().get_wei43m_k$(uniformDesc.name_1);
          var tmp_0;
          if (tmp3_elvis_lhs == null) {
            throw Error_init_$Create$('Uniform is null.');
          } else {
            tmp_0 = tmp3_elvis_lhs;
          }
          var existingVariable = tmp_0;
          if (!(existingVariable.get_glType_du95mw_k$() === reflectionVariable.get_glType_du95mw_k$()) ? true : !(existingVariable.getStorageSize_ja4r2y_k$() === reflectionVariable.getStorageSize_ja4r2y_k$())) {
            throw Error_init_$Create$('Trying to reflect uniform ' + uniformDesc.name_1 + ' as a ' + getKClassFromExpression(reflectionVariable).get_simpleName_r6f8py_k$() + ' with element count ' + reflectionVariable.getStorageSize_ja4r2y_k$() + ', but it already exists in the target object as a ' + getKClassFromExpression(existingVariable).get_simpleName_r6f8py_k$() + ' with element count ' + existingVariable.getStorageSize_ja4r2y_k$() + '.');
          }
        } else {
          // Inline function 'kotlin.collections.set' call
          var this_0 = target.get_uniforms_y6pqfc_k$();
          var key = uniformDesc.name_1;
          this_0.put_4fpzoq_k$(key, reflectionVariable);
        }
      }
    }
  };
  protoOf(ProgramReflection).draw_66n5ep_k$ = function (uniformProviders) {
    this.gl_1.useProgram(this.glProgram_1);
    var textureUnitCount = 0;
    var inductionVariable = 0;
    var last = uniformProviders.length;
    while (inductionVariable < last) {
      var provider = uniformProviders[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var indexedObject = provider.get_glslStructNames_7iy4do_k$();
      var inductionVariable_0 = 0;
      var last_0 = indexedObject.length;
      $l$loop: while (inductionVariable_0 < last_0) {
        var structName = indexedObject[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp2_elvis_lhs = this.uniformDescriptors_1.get_wei43m_k$(structName);
        var tmp;
        if (tmp2_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp2_elvis_lhs;
        }
        var descList = tmp;
        var tmp3_iterator = descList.iterator_jk1svi_k$();
        while (tmp3_iterator.hasNext_bitz1p_k$()) {
          var uniformDesc = tmp3_iterator.next_20eer_k$();
          ensureNotNull(provider.get_6bo4tg_k$(uniformDesc.name_1)).commit_6y6sig_k$(this.gl_1, uniformDesc.location_1, textureUnitCount);
          if (Companion_getInstance_1().isSampler_suya6y_k$(uniformDesc.type_1)) {
            textureUnitCount = textureUnitCount + uniformDesc.size_1 | 0;
          }
        }
      }
    }
  };
  function Sampler2D() {
    this.storage_1 = new Int32Array(1);
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(1), null);
    while (tmp_0 < 1) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.glTextures_1 = tmp_1;
  }
  protoOf(Sampler2D).get_storage_twal4e_k$ = function () {
    return this.storage_1;
  };
  protoOf(Sampler2D).get_glTextures_nt253a_k$ = function () {
    return this.glTextures_1;
  };
  protoOf(Sampler2D).provideDelegate_i9or2y_k$ = function (provider, property) {
    provider.register_elwjfb_k$(property.callableName, this);
    return this;
  };
  protoOf(Sampler2D).getValue_npgje7_k$ = function (provider, property) {
    return this;
  };
  protoOf(Sampler2D).setValue_nub6ws_k$ = function (provider, property, value) {
    this.set_b6plua_k$(value);
  };
  protoOf(Sampler2D).commit_6y6sig_k$ = function (gl, uniformLocation, samplerIndex) {
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[0] = samplerIndex;
    if (!(this.glTextures_1[0] == null)) {
      gl.uniform1iv(uniformLocation, this.storage_1);
      gl.activeTexture(WebGLRenderingContext.TEXTURE0 + samplerIndex | 0);
      gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.glTextures_1[0]);
    } else {
      throw Error_init_$Create$('No texture bound to Sampler2D uniform.');
    }
  };
  protoOf(Sampler2D).get_glType_du95mw_k$ = function () {
    return WebGLRenderingContext.SAMPLER_2D;
  };
  function Sampler3D() {
    this.storage_1 = new Int32Array(1);
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(1), null);
    while (tmp_0 < 1) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.glTextures_1 = tmp_1;
  }
  protoOf(Sampler3D).get_storage_twal4e_k$ = function () {
    return this.storage_1;
  };
  protoOf(Sampler3D).get_glTextures_nt253a_k$ = function () {
    return this.glTextures_1;
  };
  protoOf(Sampler3D).provideDelegate_i9or2y_k$ = function (provider, property) {
    provider.register_elwjfb_k$(property.callableName, this);
    return this;
  };
  protoOf(Sampler3D).getValue_npgje7_k$ = function (provider, property) {
    return this;
  };
  protoOf(Sampler3D).setValue_o6f3bv_k$ = function (provider, property, value) {
    this.set_b6plua_k$(value);
  };
  protoOf(Sampler3D).commit_6y6sig_k$ = function (gl, uniformLocation, samplerIndex) {
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[0] = samplerIndex;
    if (!(this.glTextures_1[0] == null)) {
      gl.uniform1iv(uniformLocation, this.storage_1);
      gl.activeTexture(WebGLRenderingContext.TEXTURE0 + samplerIndex | 0);
      gl.bindTexture(get_TEXTURE_3D(WebGLRenderingContext), this.glTextures_1[0]);
    } else {
      throw Error_init_$Create$('No texture bound to Sampler3D uniform.');
    }
  };
  protoOf(Sampler3D).get_glType_du95mw_k$ = function () {
    return get_SAMPLER_3D(WebGLRenderingContext);
  };
  function SamplerCube() {
    this.storage_1 = new Int32Array(1);
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(1), null);
    while (tmp_0 < 1) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.glTextures_1 = tmp_1;
  }
  protoOf(SamplerCube).get_storage_twal4e_k$ = function () {
    return this.storage_1;
  };
  protoOf(SamplerCube).get_glTextures_nt253a_k$ = function () {
    return this.glTextures_1;
  };
  protoOf(SamplerCube).provideDelegate_i9or2y_k$ = function (provider, property) {
    provider.register_elwjfb_k$(property.callableName, this);
    return this;
  };
  protoOf(SamplerCube).getValue_npgje7_k$ = function (provider, property) {
    return this;
  };
  protoOf(SamplerCube).setValue_3j1vy9_k$ = function (provider, property, value) {
    this.set_b6plua_k$(value);
  };
  protoOf(SamplerCube).commit_6y6sig_k$ = function (gl, uniformLocation, samplerIndex) {
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[0] = samplerIndex;
    if (!(this.glTextures_1[0] == null)) {
      gl.uniform1iv(uniformLocation, this.storage_1);
      gl.activeTexture(WebGLRenderingContext.TEXTURE0 + samplerIndex | 0);
      gl.bindTexture(WebGLRenderingContext.TEXTURE_CUBE_MAP, this.glTextures_1[0]);
    } else {
      throw Error_init_$Create$('No texture bound to SamplerCube uniform.');
    }
  };
  protoOf(SamplerCube).get_glType_du95mw_k$ = function () {
    return WebGLRenderingContext.SAMPLER_CUBE;
  };
  function Texture() {
  }
  function get_UNSIGNED_INT_SAMPLER_2D(_this__u8e3s4) {
    return 36306;
  }
  function get_INT_SAMPLER_2D(_this__u8e3s4) {
    return 36298;
  }
  function get_SAMPLER_2D_SHADOW(_this__u8e3s4) {
    return 35682;
  }
  function get_UNSIGNED_INT_SAMPLER_CUBE(_this__u8e3s4) {
    return 36308;
  }
  function get_INT_SAMPLER_CUBE(_this__u8e3s4) {
    return 36300;
  }
  function get_SAMPLER_CUBE_SHADOW(_this__u8e3s4) {
    return 36293;
  }
  function get_UNSIGNED_INT_SAMPLER_3D(_this__u8e3s4) {
    return 36307;
  }
  function get_INT_SAMPLER_3D(_this__u8e3s4) {
    return 36299;
  }
  function get_SAMPLER_3D(_this__u8e3s4) {
    return 35679;
  }
  function get_UNSIGNED_INT_SAMPLER_2D_ARRAY(_this__u8e3s4) {
    return 36311;
  }
  function get_INT_SAMPLER_2D_ARRAY(_this__u8e3s4) {
    return 36303;
  }
  function get_SAMPLER_2D_ARRAY_SHADOW(_this__u8e3s4) {
    return 36292;
  }
  function get_SAMPLER_2D_ARRAY(_this__u8e3s4) {
    return 36289;
  }
  function get_TEXTURE_3D(_this__u8e3s4) {
    return 32879;
  }
  function Uniform() {
  }
  function UniformFloat() {
  }
  function UniformProvider$using$1(this$0, $overrideMap) {
    this.this$0__1 = this$0;
    this.$overrideMap_1 = $overrideMap;
    Drawable.call(this);
  }
  protoOf(UniformProvider$using$1).draw_66n5ep_k$ = function (uniformProviders) {
    this.this$0__1.drawWithOverrides_pbiluj_k$(this.$overrideMap_1, uniformProviders.slice());
  };
  protoOf(UniformProvider$using$1).drawWithOverrides_pbiluj_k$ = function (overrides, uniformProviders) {
    var allOverrides = toMutableMap(this.$overrideMap_1);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = overrides.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'vision.gears.webglmath.<no name provided>.drawWithOverrides.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = element.get_value_j01efc_k$();
      // Inline function 'kotlin.collections.set' call
      allOverrides.put_4fpzoq_k$(key, value);
    }
    this.this$0__1.drawWithOverrides_pbiluj_k$(allOverrides, uniformProviders.slice());
  };
  function UniformProvider(glslStructNames) {
    Drawable.call(this);
    this.glslStructNames_1 = glslStructNames;
    this.uniforms_1 = HashMap_init_$Create$();
    this.components_1 = ArrayList_init_$Create$();
  }
  protoOf(UniformProvider).get_glslStructNames_7iy4do_k$ = function () {
    return this.glslStructNames_1;
  };
  protoOf(UniformProvider).get_uniforms_y6pqfc_k$ = function () {
    return this.uniforms_1;
  };
  protoOf(UniformProvider).register_elwjfb_k$ = function (uniformName, uniform) {
    // Inline function 'kotlin.collections.set' call
    this.uniforms_1.put_4fpzoq_k$(uniformName, uniform);
  };
  protoOf(UniformProvider).get_6bo4tg_k$ = function (name) {
    if (!this.uniforms_1.containsKey_aw81wo_k$(name)) {
      console.error("WARNING: Attempt to access unknown or non-active uniform '" + name + "'.");
    }
    return this.uniforms_1.get_wei43m_k$(name);
  };
  protoOf(UniformProvider).set_ubq0vs_k$ = function (name, uniform) {
    var tmp0_elvis_lhs = this.uniforms_1.get_wei43m_k$(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.set_b6plua_k$(uniform);
  };
  protoOf(UniformProvider).set_xxlbu8_k$ = function (name, value) {
    var tmp0_elvis_lhs = this.uniforms_1.get_wei43m_k$(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.set_k08diu_k$(new Float32Array([value]));
  };
  protoOf(UniformProvider).get_components_rknech_k$ = function () {
    return this.components_1;
  };
  protoOf(UniformProvider).addComponentsAndGatherUniforms_28bdii_k$ = function (children) {
    addAll(this.components_1, children);
    this.gatherUniforms_nn33po_k$(this);
  };
  protoOf(UniformProvider).gatherUniforms_nn33po_k$ = function (target) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.components_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'vision.gears.webglmath.UniformProvider.gatherUniforms.<anonymous>' call
      element.gatherUniforms_nn33po_k$(target);
    }
  };
  protoOf(UniformProvider).draw_66n5ep_k$ = function (uniformProviders) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.components_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'vision.gears.webglmath.UniformProvider.draw.<anonymous>' call
      element.draw_66n5ep_k$(arrayConcat([[this], uniformProviders]));
    }
  };
  protoOf(UniformProvider).drawWithOverrides_pbiluj_k$ = function (overrides, uniformProviders) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.components_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'vision.gears.webglmath.UniformProvider.drawWithOverrides.<anonymous>' call
      // Inline function 'kotlin.collections.get' call
      var key = getKClassFromExpression(element).get_simpleName_r6f8py_k$();
      var tmp0_elvis_lhs = (isInterface(overrides, Map) ? overrides : THROW_CCE()).get_wei43m_k$(key);
      (tmp0_elvis_lhs == null ? element : tmp0_elvis_lhs).drawWithOverrides_pbiluj_k$(overrides, arrayConcat([[this], uniformProviders]));
    }
  };
  protoOf(UniformProvider).using_jqb8kx_k$ = function (overriders) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(overriders.length);
    var inductionVariable = 0;
    var last = overriders.length;
    while (inductionVariable < last) {
      var item = overriders[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'vision.gears.webglmath.UniformProvider.using.<anonymous>' call
      var tmp0_elvis_lhs = getKClassFromExpression(item).get_simpleName_r6f8py_k$();
      var tmp$ret$0 = to(tmp0_elvis_lhs == null ? '<no class name>' : tmp0_elvis_lhs, item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var overrideMap = toMap(destination);
    return new UniformProvider$using$1(this, overrideMap);
  };
  function UniformSampler() {
  }
  function Vec1_init_$Init$(u, $this) {
    u = u === VOID ? 0.0 : u;
    Vec1.call($this, null, 0);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.storage_1[0] = u;
    return $this;
  }
  function Vec1_init_$Create$(u) {
    return Vec1_init_$Init$(u, objectCreate(protoOf(Vec1)));
  }
  function Vec1_init_$Init$_0(other, $this) {
    Vec1.call($this, null, 0);
    $this.storage_1.set(other.storage_1);
    return $this;
  }
  function Vec1_init_$Create$_0(other) {
    return Vec1_init_$Init$_0(other, objectCreate(protoOf(Vec1)));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.zeros_1 = Vec1_init_$Create$();
    this.ones_1 = Vec1_init_$Create$(1.0);
  }
  protoOf(Companion_2).get_zeros_j2b92a_k$ = function () {
    return this.zeros_1;
  };
  protoOf(Companion_2).get_ones_worv2u_k$ = function () {
    return this.ones_1;
  };
  protoOf(Companion_2).makeRandom_95ejzf_k$ = function (minVal, maxVal) {
    var tmp = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = maxVal.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp * (tmp_0 - minVal.storage_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = minVal.storage_1[0];
    return Vec1_init_$Create$(tmp_1 + tmp$ret$5);
  };
  protoOf(Companion_2).makeRandom_1ie7bl_k$ = function (minVal, maxVal) {
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_2();
    var minVal_0 = Vec1_init_$Create$(minVal);
    var maxVal_0 = Vec1_init_$Create$(maxVal);
    var tmp = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = maxVal_0.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp * (tmp_0 - minVal_0.storage_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = minVal_0.storage_1[0];
    return Vec1_init_$Create$(tmp_1 + tmp$ret$5);
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Vec1(backingStorage, offset) {
    Companion_getInstance_2();
    offset = offset === VOID ? 0 : offset;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(offset, offset + 1 | 0);
    tmp.storage_1 = tmp1_elvis_lhs == null ? new Float32Array(1) : tmp1_elvis_lhs;
  }
  protoOf(Vec1).get_storage_twal4e_k$ = function () {
    return this.storage_1;
  };
  protoOf(Vec1).set_x_t61dkd_k$ = function (value) {
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[0] = value;
  };
  protoOf(Vec1).get_x_1mhr67_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.storage_1[0];
  };
  protoOf(Vec1).get_xx_kntnjr_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = this.storage_1[0];
    return Vec2_init_$Create$(tmp, tmp$ret$3);
  };
  protoOf(Vec1).get_xxx_18is4x_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = this.storage_1[0];
    return Vec3_init_$Create$(tmp, tmp_0, tmp$ret$5);
  };
  protoOf(Vec1).get_xxxx_woxtu1_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = this.storage_1[0];
    return Vec4_init_$Create$(tmp, tmp_0, tmp_1, tmp$ret$7);
  };
  protoOf(Vec1).clone_1keycd_k$ = function () {
    return Vec1_init_$Create$_0(this);
  };
  protoOf(Vec1).set_k08diu_k$ = function (values) {
    // Inline function 'org.khronos.webgl.set' call
    var this_0 = this.storage_1;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp;
    if (0 >= 0 ? 0 <= get_lastIndex(values) : false) {
      tmp = values[0];
    } else {
      // Inline function 'vision.gears.webglmath.Vec1.set.<anonymous>' call
      tmp = 0.0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    this_0[0] = tmp;
    return this;
  };
  protoOf(Vec1).randomize_my12qj_k$ = function (minVal, maxVal) {
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_2();
    var tmp = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = maxVal.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp * (tmp_0 - minVal.storage_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = minVal.storage_1[0];
    var tmp$ret$6 = Vec1_init_$Create$(tmp_1 + tmp$ret$5);
    this.set_b6plua_k$(tmp$ret$6);
  };
  protoOf(Vec1).randomize_6iscv5_k$ = function (minVal, maxVal) {
    // Inline function 'vision.gears.webglmath.Vec1.randomize' call
    var minVal_0 = Vec1_init_$Create$(minVal);
    var maxVal_0 = Vec1_init_$Create$(maxVal);
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_2();
    var tmp = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = maxVal_0.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp * (tmp_0 - minVal_0.storage_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = minVal_0.storage_1[0];
    var tmp$ret$6 = Vec1_init_$Create$(tmp_1 + tmp$ret$5);
    this.set_b6plua_k$(tmp$ret$6);
  };
  protoOf(Vec1).clamp_dp25rz_k$ = function (minVal, maxVal) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp < minVal.storage_1[0]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[0] = minVal.storage_1[0];
    }
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp_0 > maxVal.storage_1[0]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[0] = maxVal.storage_1[0];
    }
    return this;
  };
  protoOf(Vec1).unaryPlus_g9fn1l_k$ = function () {
    return this;
  };
  protoOf(Vec1).unaryMinus_6uz0qp_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.storage_1[0];
    return Vec1_init_$Create$(-tmp$ret$1);
  };
  protoOf(Vec1).times_422v76_k$ = function (scalar) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.storage_1[0];
    return Vec1_init_$Create$(tmp$ret$1 * scalar);
  };
  protoOf(Vec1).div_nq5qk9_k$ = function (scalar) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.storage_1[0];
    return Vec1_init_$Create$(tmp$ret$1 / scalar);
  };
  protoOf(Vec1).timesAssign_9pohfx_k$ = function (scalar) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp0_array[0] * scalar;
  };
  protoOf(Vec1).divAssign_yyq0xk_k$ = function (scalar) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp0_array[0] / scalar;
  };
  protoOf(Vec1).plusAssign_cfvzc5_k$ = function (other) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp + other.storage_1[0];
  };
  protoOf(Vec1).plus_om413w_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = other.storage_1[0];
    return Vec1_init_$Create$(tmp + tmp$ret$3);
  };
  protoOf(Vec1).minusAssign_yw1dip_k$ = function (other) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp - other.storage_1[0];
  };
  protoOf(Vec1).minus_x18ej2_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = other.storage_1[0];
    return Vec1_init_$Create$(tmp - tmp$ret$3);
  };
  protoOf(Vec1).timesAssign_ahpybd_k$ = function (other) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp * other.storage_1[0];
  };
  protoOf(Vec1).times_pohupk_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = other.storage_1[0];
    return Vec1_init_$Create$(tmp * tmp$ret$3);
  };
  protoOf(Vec1).divAssign_hiq31q_k$ = function (other) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp / other.storage_1[0];
  };
  protoOf(Vec1).div_1sb4od_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = other.storage_1[0];
    return Vec1_init_$Create$(tmp / tmp$ret$3);
  };
  protoOf(Vec1).lengthSquared_guwgf5_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return tmp * this.storage_1[0];
  };
  protoOf(Vec1).length_iap7oa_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.storage_1[0];
  };
  protoOf(Vec1).provideDelegate_i9or2y_k$ = function (provider, property) {
    provider.register_elwjfb_k$(property.callableName, this);
    return this;
  };
  protoOf(Vec1).getValue_npgje7_k$ = function (provider, property) {
    return this;
  };
  protoOf(Vec1).setValue_rf3w9b_k$ = function (provider, property, value) {
    this.set_b6plua_k$(value);
  };
  protoOf(Vec1).commit_6y6sig_k$ = function (gl, uniformLocation, samplerIndex) {
    gl.uniform1fv(uniformLocation, this.storage_1);
  };
  protoOf(Vec1).get_glType_du95mw_k$ = function () {
    return WebGLRenderingContext.FLOAT_VEC4;
  };
  function times(_this__u8e3s4, v) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = v.storage_1[0];
    return Vec1_init_$Create$(_this__u8e3s4 * tmp$ret$1);
  }
  function div(_this__u8e3s4, v) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = v.storage_1[0];
    return Vec1_init_$Create$(_this__u8e3s4 / tmp$ret$1);
  }
  function Vec1Array_init_$Init$(size, $this) {
    Vec1Array.call($this, null, size, size);
    return $this;
  }
  function Vec1Array_init_$Create$(size) {
    return Vec1Array_init_$Init$(size, objectCreate(protoOf(Vec1Array)));
  }
  function Vec1Array(backingStorage, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? 0 : endIndex;
    VecArray.call(this);
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(startIndex, endIndex);
    tmp.storage_1 = tmp1_elvis_lhs == null ? new Float32Array(startIndex) : tmp1_elvis_lhs;
  }
  protoOf(Vec1Array).get_storage_twal4e_k$ = function () {
    return this.storage_1;
  };
  protoOf(Vec1Array).set_k08diu_k$ = function (values) {
    var inductionVariable = 0;
    var last = this.storage_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        var tmp1_elvis_lhs = getOrNull(values, i);
        // Inline function 'kotlin.js.asDynamic' call
        this_0[i] = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
      }
       while (inductionVariable < last);
    return this;
  };
  protoOf(Vec1Array).get_c1px32_k$ = function (i) {
    return new Vec1(this.storage_1, i);
  };
  protoOf(Vec1Array).subarray_pw2d2f_k$ = function (begin, end) {
    return new Vec1Array(this.storage_1, begin, end);
  };
  protoOf(Vec1Array).setDot_4obzxl_k$ = function (b, c) {
    var inductionVariable = 0;
    var last = this.storage_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = b.get_storage_twal4e_k$()[imul(i, 2)];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * c.get_storage_twal4e_k$()[imul(i, 2)];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = b.get_storage_twal4e_k$()[imul(i, 2) + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_0[i] = tmp_0 + tmp_1 * c.get_storage_twal4e_k$()[imul(i, 2) + 1 | 0];
      }
       while (inductionVariable < last);
  };
  protoOf(Vec1Array).setDot_818mvd_k$ = function (b, c) {
    var inductionVariable = 0;
    var last = this.storage_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = b.get_storage_twal4e_k$()[imul(i, 3)];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * c.get_storage_twal4e_k$()[imul(i, 3)];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = b.get_storage_twal4e_k$()[imul(i, 3) + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = tmp_0 + tmp_1 * c.get_storage_twal4e_k$()[imul(i, 3) + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = b.get_storage_twal4e_k$()[imul(i, 3) + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_0[i] = tmp_2 + tmp_3 * c.get_storage_twal4e_k$()[imul(i, 3) + 2 | 0];
      }
       while (inductionVariable < last);
  };
  protoOf(Vec1Array).setDot_be59t5_k$ = function (b, c) {
    var inductionVariable = 0;
    var last = this.storage_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = b.get_storage_twal4e_k$()[imul(i, 4)];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * c.get_storage_twal4e_k$()[imul(i, 4)];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = b.get_storage_twal4e_k$()[imul(i, 4) + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = tmp_0 + tmp_1 * c.get_storage_twal4e_k$()[imul(i, 4) + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = b.get_storage_twal4e_k$()[imul(i, 4) + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = tmp_2 + tmp_3 * c.get_storage_twal4e_k$()[imul(i, 4) + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_5 = b.get_storage_twal4e_k$()[imul(i, 4) + 3 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_0[i] = tmp_4 + tmp_5 * c.get_storage_twal4e_k$()[imul(i, 4) + 3 | 0];
      }
       while (inductionVariable < last);
  };
  protoOf(Vec1Array).setDot_m59vzt_k$ = function (b, c) {
    var inductionVariable = 0;
    var last = this.storage_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = b.get_storage_twal4e_k$()[imul(i, 2)];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * c.get_storage_twal4e_k$()[0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = b.get_storage_twal4e_k$()[imul(i, 2) + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_0[i] = tmp_0 + tmp_1 * c.get_storage_twal4e_k$()[1];
      }
       while (inductionVariable < last);
  };
  protoOf(Vec1Array).setDot_xpm1p5_k$ = function (b, c) {
    var inductionVariable = 0;
    var last = this.storage_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = b.get_storage_twal4e_k$()[imul(i, 3)];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * c.get_storage_twal4e_k$()[0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = b.get_storage_twal4e_k$()[imul(i, 3) + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = tmp_0 + tmp_1 * c.get_storage_twal4e_k$()[1];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = b.get_storage_twal4e_k$()[imul(i, 3) + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_0[i] = tmp_2 + tmp_3 * c.get_storage_twal4e_k$()[2];
      }
       while (inductionVariable < last);
  };
  protoOf(Vec1Array).setDot_pr5ukn_k$ = function (b, c) {
    var inductionVariable = 0;
    var last = this.storage_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = b.get_storage_twal4e_k$()[imul(i, 4)];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * c.get_storage_twal4e_k$()[0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = b.get_storage_twal4e_k$()[imul(i, 4) + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = tmp_0 + tmp_1 * c.get_storage_twal4e_k$()[1];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = b.get_storage_twal4e_k$()[imul(i, 4) + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = tmp_2 + tmp_3 * c.get_storage_twal4e_k$()[2];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_5 = b.get_storage_twal4e_k$()[imul(i, 4) + 3 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_0[i] = tmp_4 + tmp_5 * c.get_storage_twal4e_k$()[3];
      }
       while (inductionVariable < last);
  };
  protoOf(Vec1Array).setLength_8kwuf7_k$ = function (b) {
    var inductionVariable = 0;
    var last = this.storage_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        // Inline function 'kotlin.math.sqrt' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = b.get_storage_twal4e_k$()[imul(i, 2)];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * b.get_storage_twal4e_k$()[imul(i, 2)];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = b.get_storage_twal4e_k$()[imul(i, 2) + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var x = tmp_0 + tmp_1 * b.get_storage_twal4e_k$()[imul(i, 2) + 1 | 0];
        // Inline function 'kotlin.js.asDynamic' call
        this_0[i] = Math.sqrt(x);
      }
       while (inductionVariable < last);
  };
  protoOf(Vec1Array).setLength_ftowpu_k$ = function (b) {
    var inductionVariable = 0;
    var last = this.storage_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        // Inline function 'kotlin.math.sqrt' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = b.get_storage_twal4e_k$()[imul(i, 3)];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * b.get_storage_twal4e_k$()[imul(i, 3)];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = b.get_storage_twal4e_k$()[imul(i, 3) + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = tmp_0 + tmp_1 * b.get_storage_twal4e_k$()[imul(i, 3) + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = b.get_storage_twal4e_k$()[imul(i, 3) + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var x = tmp_2 + tmp_3 * b.get_storage_twal4e_k$()[imul(i, 3) + 2 | 0];
        // Inline function 'kotlin.js.asDynamic' call
        this_0[i] = Math.sqrt(x);
      }
       while (inductionVariable < last);
  };
  protoOf(Vec1Array).setLength_n2gz0h_k$ = function (b) {
    var inductionVariable = 0;
    var last = this.storage_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        // Inline function 'kotlin.math.sqrt' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = b.get_storage_twal4e_k$()[imul(i, 4)];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * b.get_storage_twal4e_k$()[imul(i, 4)];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = b.get_storage_twal4e_k$()[imul(i, 4) + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = tmp_0 + tmp_1 * b.get_storage_twal4e_k$()[imul(i, 4) + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = b.get_storage_twal4e_k$()[imul(i, 4) + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = tmp_2 + tmp_3 * b.get_storage_twal4e_k$()[imul(i, 4) + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_5 = b.get_storage_twal4e_k$()[imul(i, 4) + 3 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var x = tmp_4 + tmp_5 * b.get_storage_twal4e_k$()[imul(i, 4) + 3 | 0];
        // Inline function 'kotlin.js.asDynamic' call
        this_0[i] = Math.sqrt(x);
      }
       while (inductionVariable < last);
  };
  protoOf(Vec1Array).provideDelegate_i9or2y_k$ = function (provider, property) {
    provider.register_elwjfb_k$(property.callableName + '[0]', this);
    return this;
  };
  protoOf(Vec1Array).getValue_npgje7_k$ = function (provider, property) {
    return this;
  };
  protoOf(Vec1Array).setValue_usxvjl_k$ = function (provider, property, value) {
    this.set_b6plua_k$(value);
  };
  protoOf(Vec1Array).commit_6y6sig_k$ = function (gl, uniformLocation, samplerIndex) {
    gl.uniform1fv(uniformLocation, this.storage_1);
  };
  protoOf(Vec1Array).get_glType_du95mw_k$ = function () {
    return WebGLRenderingContext.FLOAT;
  };
  function Vec2Serializer() {
    Vec2Serializer_instance = this;
    this.descriptor_1 = buildSerialDescriptor('vision.gears.Vec2', LIST_getInstance(), []);
  }
  protoOf(Vec2Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(Vec2Serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_elvis_lhs = isInterface(decoder, JsonDecoder) ? decoder : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw SerializationException_init_$Create$('Expected Json Input');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var input = tmp;
    var tmp_0 = input.decodeJsonElement_6lz9ye_k$();
    var tmp1_elvis_lhs = tmp_0 instanceof JsonArray ? tmp_0 : null;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      throw SerializationException_init_$Create$('Expected JsonArray');
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var array = tmp_1;
    var tmp_2 = array.get_c1px32_k$(0);
    var tmp2_safe_receiver = tmp_2 instanceof JsonPrimitive ? tmp_2 : null;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : get_float(tmp2_safe_receiver);
    var tmp_3 = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
    var tmp_4 = array.get_c1px32_k$(1);
    var tmp4_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : get_float(tmp4_safe_receiver);
    return Vec2_init_$Create$(tmp_3, tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs);
  };
  protoOf(Vec2Serializer).serialize_9up4xs_k$ = function (encoder, value) {
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
    var tmp$ret$2 = value.storage_1[0];
    add(builder, tmp$ret$2);
    // Inline function 'vision.gears.webglmath.Vec2.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = value.storage_1[1];
    add(builder, tmp$ret$5);
    var array = builder.build_1k0s4u_k$();
    output.encodeJsonElement_7ygdou_k$(array);
  };
  protoOf(Vec2Serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_9up4xs_k$(encoder, value instanceof Vec2 ? value : THROW_CCE());
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
    $this.storage_1[0] = u;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.storage_1[1] = v;
    return $this;
  }
  function Vec2_init_$Create$(u, v) {
    return Vec2_init_$Init$(u, v, objectCreate(protoOf(Vec2)));
  }
  function Vec2_init_$Init$_0(other, v, $this) {
    v = v === VOID ? 0.0 : v;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = other.get_storage_twal4e_k$()[0];
    Vec2_init_$Init$(tmp$ret$1, v, $this);
    return $this;
  }
  function Vec2_init_$Create$_0(other, v) {
    return Vec2_init_$Init$_0(other, v, objectCreate(protoOf(Vec2)));
  }
  function Vec2_init_$Init$_1(other, $this) {
    Vec2.call($this, null, 0);
    $this.storage_1.set(other.storage_1);
    return $this;
  }
  function Vec2_init_$Create$_1(other) {
    return Vec2_init_$Init$_1(other, objectCreate(protoOf(Vec2)));
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.zeros_1 = Vec2_init_$Create$();
    this.ones_1 = Vec2_init_$Create$(1.0, 1.0);
  }
  protoOf(Companion_3).get_zeros_j2b92a_k$ = function () {
    return this.zeros_1;
  };
  protoOf(Companion_3).get_ones_worv2u_k$ = function () {
    return this.ones_1;
  };
  protoOf(Companion_3).makeRandom_l0d74n_k$ = function (minVal, maxVal) {
    var tmp = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = maxVal.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp * (tmp_0 - minVal.storage_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 + minVal.storage_1[0];
    var tmp_3 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = maxVal.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = tmp_3 * (tmp_4 - minVal.storage_1[1]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = minVal.storage_1[1];
    return Vec2_init_$Create$(tmp_2, tmp_5 + tmp$ret$11);
  };
  protoOf(Companion_3).makeRandom_1ie7bl_k$ = function (minVal, maxVal) {
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_3();
    var minVal_0 = Vec2_init_$Create$(minVal, minVal);
    var maxVal_0 = Vec2_init_$Create$(maxVal, maxVal);
    var tmp = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = maxVal_0.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp * (tmp_0 - minVal_0.storage_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 + minVal_0.storage_1[0];
    var tmp_3 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = maxVal_0.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = tmp_3 * (tmp_4 - minVal_0.storage_1[1]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = minVal_0.storage_1[1];
    return Vec2_init_$Create$(tmp_2, tmp_5 + tmp$ret$11);
  };
  protoOf(Companion_3).serializer_9w0wvi_k$ = function () {
    return Vec2Serializer_getInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Vec2(backingStorage, offset) {
    Companion_getInstance_3();
    offset = offset === VOID ? 0 : offset;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(offset, offset + 2 | 0);
    tmp.storage_1 = tmp1_elvis_lhs == null ? new Float32Array(2) : tmp1_elvis_lhs;
  }
  protoOf(Vec2).get_storage_twal4e_k$ = function () {
    return this.storage_1;
  };
  protoOf(Vec2).set_x_t61dkd_k$ = function (value) {
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[0] = value;
  };
  protoOf(Vec2).get_x_1mhr67_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.storage_1[0];
  };
  protoOf(Vec2).set_y_niwx4k_k$ = function (value) {
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[1] = value;
  };
  protoOf(Vec2).get_y_1mhr68_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.storage_1[1];
  };
  protoOf(Vec2).get_xy0_18is62_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = this.storage_1[1];
    return Vec3_init_$Create$(tmp, tmp$ret$3, 0.0);
  };
  protoOf(Vec2).get_xy00_woxssq_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = this.storage_1[1];
    return Vec4_init_$Create$(tmp, tmp$ret$3, 0.0, 0.0);
  };
  protoOf(Vec2).get_xy01_woxssr_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = this.storage_1[1];
    return Vec4_init_$Create$(tmp, tmp$ret$3, 0.0, 1.0);
  };
  protoOf(Vec2).clone_1keycd_k$ = function () {
    return Vec2_init_$Create$_1(this);
  };
  protoOf(Vec2).set_k08diu_k$ = function (values) {
    // Inline function 'org.khronos.webgl.set' call
    var this_0 = this.storage_1;
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
    var this_1 = this.storage_1;
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
  protoOf(Vec2).randomize_xii5nd_k$ = function (minVal, maxVal) {
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_3();
    var tmp = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = maxVal.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp * (tmp_0 - minVal.storage_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 + minVal.storage_1[0];
    var tmp_3 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = maxVal.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = tmp_3 * (tmp_4 - minVal.storage_1[1]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = minVal.storage_1[1];
    var tmp$ret$12 = Vec2_init_$Create$(tmp_2, tmp_5 + tmp$ret$11);
    this.set_b6plua_k$(tmp$ret$12);
  };
  protoOf(Vec2).randomize_6iscv5_k$ = function (minVal, maxVal) {
    // Inline function 'vision.gears.webglmath.Vec2.randomize' call
    var minVal_0 = Vec2_init_$Create$(minVal, minVal);
    var maxVal_0 = Vec2_init_$Create$(maxVal, maxVal);
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_3();
    var tmp = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = maxVal_0.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp * (tmp_0 - minVal_0.storage_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 + minVal_0.storage_1[0];
    var tmp_3 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = maxVal_0.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = tmp_3 * (tmp_4 - minVal_0.storage_1[1]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = minVal_0.storage_1[1];
    var tmp$ret$12 = Vec2_init_$Create$(tmp_2, tmp_5 + tmp$ret$11);
    this.set_b6plua_k$(tmp$ret$12);
  };
  protoOf(Vec2).clamp_r6a533_k$ = function (minVal, maxVal) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp < minVal.storage_1[0]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[0] = minVal.storage_1[0];
    }
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp_0 < minVal.storage_1[1]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[1] = minVal.storage_1[1];
    }
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp_1 > maxVal.storage_1[0]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[0] = maxVal.storage_1[0];
    }
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp_2 > maxVal.storage_1[1]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[1] = maxVal.storage_1[1];
    }
    return this;
  };
  protoOf(Vec2).unaryPlus_g9fn1l_k$ = function () {
    return this;
  };
  protoOf(Vec2).unaryMinus_6uz0qp_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = -this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = this.storage_1[1];
    return Vec2_init_$Create$(tmp, -tmp$ret$3);
  };
  protoOf(Vec2).times_422v76_k$ = function (scalar) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0] * scalar;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = this.storage_1[1];
    return Vec2_init_$Create$(tmp, tmp$ret$3 * scalar);
  };
  protoOf(Vec2).div_nq5qk9_k$ = function (scalar) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0] / scalar;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = this.storage_1[1];
    return Vec2_init_$Create$(tmp, tmp$ret$3 / scalar);
  };
  protoOf(Vec2).timesAssign_9pohfx_k$ = function (scalar) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp0_array[0] * scalar;
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp2_array[1] * scalar;
  };
  protoOf(Vec2).divAssign_yyq0xk_k$ = function (scalar) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp0_array[0] / scalar;
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp2_array[1] / scalar;
  };
  protoOf(Vec2).plusAssign_qqt7mk_k$ = function (other) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp + other.storage_1[0];
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_array[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp_0 + other.storage_1[1];
  };
  protoOf(Vec2).plus_u2g1zx_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp + other.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = other.storage_1[1];
    return Vec2_init_$Create$(tmp_0, tmp_1 + tmp$ret$7);
  };
  protoOf(Vec2).minusAssign_31miia_k$ = function (other) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp - other.storage_1[0];
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_array[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp_0 - other.storage_1[1];
  };
  protoOf(Vec2).minus_rkwdn1_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp - other.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = other.storage_1[1];
    return Vec2_init_$Create$(tmp_0, tmp_1 - tmp$ret$7);
  };
  protoOf(Vec2).timesAssign_soz8nc_k$ = function (other) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp * other.storage_1[0];
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_array[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp_0 * other.storage_1[1];
  };
  protoOf(Vec2).times_k85ttj_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * other.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = other.storage_1[1];
    return Vec2_init_$Create$(tmp_0, tmp_1 * tmp$ret$7);
  };
  protoOf(Vec2).divAssign_lnz3wz_k$ = function (other) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp / other.storage_1[0];
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_array[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp_0 / other.storage_1[1];
  };
  protoOf(Vec2).div_3o0w7o_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp / other.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = other.storage_1[1];
    return Vec2_init_$Create$(tmp_0, tmp_1 / tmp$ret$7);
  };
  protoOf(Vec2).lengthSquared_guwgf5_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return tmp_0 + tmp_1 * this.storage_1[1];
  };
  protoOf(Vec2).length_iap7oa_k$ = function () {
    // Inline function 'kotlin.math.sqrt' call
    // Inline function 'vision.gears.webglmath.Vec2.lengthSquared' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var x = tmp_0 + tmp_1 * this.storage_1[1];
    return Math.sqrt(x);
  };
  protoOf(Vec2).normalize_3wvcwd_k$ = function () {
    // Inline function 'vision.gears.webglmath.Vec2.length' call
    // Inline function 'kotlin.math.sqrt' call
    // Inline function 'vision.gears.webglmath.Vec2.lengthSquared' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var x = tmp_0 + tmp_1 * this.storage_1[1];
    var l = Math.sqrt(x);
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp0_array[0] / l;
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp2_array[1] / l;
    return this;
  };
  protoOf(Vec2).dot_4rg850_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * other.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return tmp_0 + tmp_1 * other.storage_1[1];
  };
  protoOf(Vec2).provideDelegate_i9or2y_k$ = function (provider, property) {
    provider.register_elwjfb_k$(property.callableName, this);
    return this;
  };
  protoOf(Vec2).getValue_npgje7_k$ = function (provider, property) {
    return this;
  };
  protoOf(Vec2).setValue_4fayr4_k$ = function (provider, property, value) {
    this.set_b6plua_k$(value);
  };
  protoOf(Vec2).commit_6y6sig_k$ = function (gl, uniformLocation, samplerIndex) {
    gl.uniform2fv(uniformLocation, this.storage_1);
  };
  protoOf(Vec2).get_glType_du95mw_k$ = function () {
    return WebGLRenderingContext.FLOAT_VEC2;
  };
  function times_0(_this__u8e3s4, v) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = _this__u8e3s4 * v.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = v.storage_1[1];
    return Vec2_init_$Create$(tmp, _this__u8e3s4 * tmp$ret$3);
  }
  function div_0(_this__u8e3s4, v) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = _this__u8e3s4 / v.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = v.storage_1[1];
    return Vec2_init_$Create$(tmp, _this__u8e3s4 / tmp$ret$3);
  }
  function Vec2Array_init_$Init$(size, $this) {
    Vec2Array.call($this, null, size, size);
    return $this;
  }
  function Vec2Array_init_$Create$(size) {
    return Vec2Array_init_$Init$(size, objectCreate(protoOf(Vec2Array)));
  }
  function Vec2Array(backingStorage, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? 0 : endIndex;
    VecArray.call(this);
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(imul(startIndex, 2), imul(endIndex, 2));
    tmp.storage_1 = tmp1_elvis_lhs == null ? new Float32Array(imul(startIndex, 2)) : tmp1_elvis_lhs;
  }
  protoOf(Vec2Array).get_storage_twal4e_k$ = function () {
    return this.storage_1;
  };
  protoOf(Vec2Array).set_k08diu_k$ = function (values) {
    var inductionVariable = 0;
    var last = this.storage_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        var tmp1_elvis_lhs = getOrNull(values, i % 2 | 0);
        // Inline function 'kotlin.js.asDynamic' call
        this_0[i] = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
      }
       while (inductionVariable < last);
    return this;
  };
  protoOf(Vec2Array).get_c1px32_k$ = function (i) {
    return new Vec2(this.storage_1, imul(i, 2));
  };
  protoOf(Vec2Array).subarray_pw2d2f_k$ = function (begin, end) {
    return new Vec2Array(this.storage_1, imul(begin, 2), imul(end, 2));
  };
  protoOf(Vec2Array).setNormalized_zg4vla_k$ = function (b) {
    var progression = step(until(0, this.storage_1.length), 2);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    var step_0 = progression.get_step_woujh1_k$();
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = b.storage_1[i];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * b.storage_1[i];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = b.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var l2 = tmp_0 + tmp_1 * b.storage_1[i + 1 | 0];
        // Inline function 'kotlin.math.sqrt' call
        var linv = 1 / Math.sqrt(l2);
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this.storage_1[i] = b.storage_1[i] * linv;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this.storage_1[i + 1 | 0] = b.storage_1[i + 1 | 0] * linv;
      }
       while (!(i === last));
  };
  protoOf(Vec2Array).setAffineTransformed_26lu9y_k$ = function (v, m) {
    var progression = step(until(0, this.storage_1.length), 2);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    var step_0 = progression.get_step_woujh1_k$();
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        var index = i + 0 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = v.storage_1[i + 0 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * m.get_storage_twal4e_k$()[0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = v.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = tmp_0 + tmp_1 * m.get_storage_twal4e_k$()[1];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_0[index] = tmp_2 + m.get_storage_twal4e_k$()[3];
        // Inline function 'org.khronos.webgl.set' call
        var this_1 = this.storage_1;
        var index_0 = i + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = v.storage_1[i + 0 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = tmp_3 * m.get_storage_twal4e_k$()[4];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_5 = v.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_6 = tmp_4 + tmp_5 * m.get_storage_twal4e_k$()[5];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_1[index_0] = tmp_6 + m.get_storage_twal4e_k$()[7];
      }
       while (!(i === last));
  };
  protoOf(Vec2Array).setAffineNormalTransformed_vg2td_k$ = function (v, m) {
    var progression = step(until(0, this.storage_1.length), 2);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    var step_0 = progression.get_step_woujh1_k$();
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        var index = i + 0 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = v.storage_1[i + 0 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * m.get_storage_twal4e_k$()[0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = v.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_0[index] = tmp_0 + tmp_1 * m.get_storage_twal4e_k$()[1];
        // Inline function 'org.khronos.webgl.set' call
        var this_1 = this.storage_1;
        var index_0 = i + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = v.storage_1[i + 0 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = tmp_2 * m.get_storage_twal4e_k$()[4];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = v.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_1[index_0] = tmp_3 + tmp_4 * m.get_storage_twal4e_k$()[5];
      }
       while (!(i === last));
  };
  protoOf(Vec2Array).setCosSin_k0gftz_k$ = function (alphas) {
    var progression = step(until(0, this.storage_1.length), 2);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    var step_0 = progression.get_step_woujh1_k$();
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        var index = i + 0 | 0;
        // Inline function 'kotlin.math.cos' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var x = alphas.get_storage_twal4e_k$()[i / 2 | 0];
        // Inline function 'kotlin.js.asDynamic' call
        this_0[index] = Math.cos(x);
        // Inline function 'org.khronos.webgl.set' call
        var this_1 = this.storage_1;
        var index_0 = i + 1 | 0;
        // Inline function 'kotlin.math.sin' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var x_0 = alphas.get_storage_twal4e_k$()[i / 2 | 0];
        // Inline function 'kotlin.js.asDynamic' call
        this_1[index_0] = Math.sin(x_0);
      }
       while (!(i === last));
  };
  protoOf(Vec2Array).provideDelegate_i9or2y_k$ = function (provider, property) {
    provider.register_elwjfb_k$(property.callableName + '[0]', this);
    return this;
  };
  protoOf(Vec2Array).getValue_npgje7_k$ = function (provider, property) {
    return this;
  };
  protoOf(Vec2Array).setValue_nk5t8y_k$ = function (provider, property, value) {
    this.set_b6plua_k$(value);
  };
  protoOf(Vec2Array).commit_6y6sig_k$ = function (gl, uniformLocation, samplerIndex) {
    gl.uniform2fv(uniformLocation, this.storage_1);
  };
  protoOf(Vec2Array).get_glType_du95mw_k$ = function () {
    return WebGLRenderingContext.FLOAT_VEC2;
  };
  function Vec3_init_$Init$(u, v, s, $this) {
    u = u === VOID ? 0.0 : u;
    v = v === VOID ? 0.0 : v;
    s = s === VOID ? 0.0 : s;
    Vec3.call($this, null, 0);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.storage_1[0] = u;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.storage_1[1] = v;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.storage_1[2] = s;
    return $this;
  }
  function Vec3_init_$Create$(u, v, s) {
    return Vec3_init_$Init$(u, v, s, objectCreate(protoOf(Vec3)));
  }
  function Vec3_init_$Init$_0(other, v, s, $this) {
    v = v === VOID ? 0.0 : v;
    s = s === VOID ? 0.0 : s;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = other.get_storage_twal4e_k$()[0];
    Vec3_init_$Init$(tmp$ret$1, v, s, $this);
    return $this;
  }
  function Vec3_init_$Create$_0(other, v, s) {
    return Vec3_init_$Init$_0(other, v, s, objectCreate(protoOf(Vec3)));
  }
  function Vec3_init_$Init$_1(other, s, $this) {
    s = s === VOID ? 0.0 : s;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = other.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = other.get_storage_twal4e_k$()[1];
    Vec3_init_$Init$(tmp, tmp$ret$3, s, $this);
    return $this;
  }
  function Vec3_init_$Create$_1(other, s) {
    return Vec3_init_$Init$_1(other, s, objectCreate(protoOf(Vec3)));
  }
  function Vec3_init_$Init$_2(other, $this) {
    Vec3.call($this, null, 0);
    $this.storage_1.set(other.storage_1);
    return $this;
  }
  function Vec3_init_$Create$_2(other) {
    return Vec3_init_$Init$_2(other, objectCreate(protoOf(Vec3)));
  }
  function Vec3_init_$Init$_3(other, $this) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = other.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp / other.get_storage_twal4e_k$()[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = other.get_storage_twal4e_k$()[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 / other.get_storage_twal4e_k$()[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = other.get_storage_twal4e_k$()[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = other.get_storage_twal4e_k$()[3];
    Vec3_init_$Init$(tmp_0, tmp_2, tmp_3 / tmp$ret$11, $this);
    return $this;
  }
  function Vec3_init_$Create$_3(other) {
    return Vec3_init_$Init$_3(other, objectCreate(protoOf(Vec3)));
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.zeros_1 = Vec3_init_$Create$();
    this.ones_1 = Vec3_init_$Create$(1.0, 1.0, 1.0);
  }
  protoOf(Companion_4).get_zeros_j2b92a_k$ = function () {
    return this.zeros_1;
  };
  protoOf(Companion_4).get_ones_worv2u_k$ = function () {
    return this.ones_1;
  };
  protoOf(Companion_4).makeRandom_juz3qf_k$ = function (minVal, maxVal) {
    var tmp = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = maxVal.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp * (tmp_0 - minVal.storage_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 + minVal.storage_1[0];
    var tmp_3 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = maxVal.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = tmp_3 * (tmp_4 - minVal.storage_1[1]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = tmp_5 + minVal.storage_1[1];
    var tmp_7 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = maxVal.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = tmp_7 * (tmp_8 - minVal.storage_1[2]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$17 = minVal.storage_1[2];
    return Vec3_init_$Create$(tmp_2, tmp_6, tmp_9 + tmp$ret$17);
  };
  protoOf(Companion_4).makeRandom_1ie7bl_k$ = function (minVal, maxVal) {
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_4();
    var minVal_0 = Vec3_init_$Create$(minVal, minVal, minVal);
    var maxVal_0 = Vec3_init_$Create$(maxVal, maxVal, maxVal);
    var tmp = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = maxVal_0.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp * (tmp_0 - minVal_0.storage_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 + minVal_0.storage_1[0];
    var tmp_3 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = maxVal_0.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = tmp_3 * (tmp_4 - minVal_0.storage_1[1]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = tmp_5 + minVal_0.storage_1[1];
    var tmp_7 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = maxVal_0.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = tmp_7 * (tmp_8 - minVal_0.storage_1[2]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$17 = minVal_0.storage_1[2];
    return Vec3_init_$Create$(tmp_2, tmp_6, tmp_9 + tmp$ret$17);
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Vec3(backingStorage, offset) {
    Companion_getInstance_4();
    offset = offset === VOID ? 0 : offset;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(offset, offset + 3 | 0);
    tmp.storage_1 = tmp1_elvis_lhs == null ? new Float32Array(3) : tmp1_elvis_lhs;
  }
  protoOf(Vec3).get_storage_twal4e_k$ = function () {
    return this.storage_1;
  };
  protoOf(Vec3).set_x_t61dkd_k$ = function (value) {
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[0] = value;
  };
  protoOf(Vec3).get_x_1mhr67_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.storage_1[0];
  };
  protoOf(Vec3).set_y_niwx4k_k$ = function (value) {
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[1] = value;
  };
  protoOf(Vec3).get_y_1mhr68_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.storage_1[1];
  };
  protoOf(Vec3).set_z_56r5ud_k$ = function (value) {
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[2] = value;
  };
  protoOf(Vec3).get_z_1mhr69_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.storage_1[2];
  };
  protoOf(Vec3).set_xy_15high_k$ = function (value) {
    (new Vec2(this.storage_1)).set_b6plua_k$(value);
  };
  protoOf(Vec3).get_xy_kntnjq_k$ = function () {
    return new Vec2(this.storage_1);
  };
  protoOf(Vec3).get_xyz0_woxukg_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = this.storage_1[2];
    return Vec4_init_$Create$(tmp, tmp_0, tmp$ret$5, 0.0);
  };
  protoOf(Vec3).get_xyz1_woxukh_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = this.storage_1[2];
    return Vec4_init_$Create$(tmp, tmp_0, tmp$ret$5, 1.0);
  };
  protoOf(Vec3).clone_1keycd_k$ = function () {
    return Vec3_init_$Create$_2(this);
  };
  protoOf(Vec3).set_k08diu_k$ = function (values) {
    // Inline function 'org.khronos.webgl.set' call
    var this_0 = this.storage_1;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp;
    if (0 >= 0 ? 0 <= get_lastIndex(values) : false) {
      tmp = values[0];
    } else {
      // Inline function 'vision.gears.webglmath.Vec3.set.<anonymous>' call
      tmp = 0.0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    this_0[0] = tmp;
    // Inline function 'org.khronos.webgl.set' call
    var this_1 = this.storage_1;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp_0;
    if (1 >= 0 ? 1 <= get_lastIndex(values) : false) {
      tmp_0 = values[1];
    } else {
      // Inline function 'vision.gears.webglmath.Vec3.set.<anonymous>' call
      tmp_0 = 0.0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    this_1[1] = tmp_0;
    // Inline function 'org.khronos.webgl.set' call
    var this_2 = this.storage_1;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp_1;
    if (2 >= 0 ? 2 <= get_lastIndex(values) : false) {
      tmp_1 = values[2];
    } else {
      // Inline function 'vision.gears.webglmath.Vec3.set.<anonymous>' call
      tmp_1 = 0.0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    this_2[2] = tmp_1;
    return this;
  };
  protoOf(Vec3).randomize_qy4tex_k$ = function (minVal, maxVal) {
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_4();
    var tmp = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = maxVal.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp * (tmp_0 - minVal.storage_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 + minVal.storage_1[0];
    var tmp_3 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = maxVal.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = tmp_3 * (tmp_4 - minVal.storage_1[1]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = tmp_5 + minVal.storage_1[1];
    var tmp_7 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = maxVal.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = tmp_7 * (tmp_8 - minVal.storage_1[2]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$17 = minVal.storage_1[2];
    var tmp$ret$18 = Vec3_init_$Create$(tmp_2, tmp_6, tmp_9 + tmp$ret$17);
    this.set_b6plua_k$(tmp$ret$18);
  };
  protoOf(Vec3).randomize_6iscv5_k$ = function (minVal, maxVal) {
    // Inline function 'vision.gears.webglmath.Vec3.randomize' call
    var minVal_0 = Vec3_init_$Create$(minVal, minVal, minVal);
    var maxVal_0 = Vec3_init_$Create$(maxVal, maxVal, maxVal);
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_4();
    var tmp = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = maxVal_0.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp * (tmp_0 - minVal_0.storage_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 + minVal_0.storage_1[0];
    var tmp_3 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = maxVal_0.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = tmp_3 * (tmp_4 - minVal_0.storage_1[1]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = tmp_5 + minVal_0.storage_1[1];
    var tmp_7 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = maxVal_0.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = tmp_7 * (tmp_8 - minVal_0.storage_1[2]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$17 = minVal_0.storage_1[2];
    var tmp$ret$18 = Vec3_init_$Create$(tmp_2, tmp_6, tmp_9 + tmp$ret$17);
    this.set_b6plua_k$(tmp$ret$18);
  };
  protoOf(Vec3).clamp_2zhm0z_k$ = function (minVal, maxVal) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp < minVal.storage_1[0]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[0] = minVal.storage_1[0];
    }
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp_0 < minVal.storage_1[1]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[1] = minVal.storage_1[1];
    }
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp_1 < minVal.storage_1[2]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[2] = minVal.storage_1[2];
    }
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp_2 > maxVal.storage_1[0]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[0] = maxVal.storage_1[0];
    }
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp_3 > maxVal.storage_1[1]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[1] = maxVal.storage_1[1];
    }
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp_4 > maxVal.storage_1[2]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[2] = maxVal.storage_1[2];
    }
    return this;
  };
  protoOf(Vec3).unaryPlus_g9fn1l_k$ = function () {
    return this;
  };
  protoOf(Vec3).unaryMinus_6uz0qp_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = -this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = -this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = this.storage_1[2];
    return Vec3_init_$Create$(tmp, tmp_0, -tmp$ret$5);
  };
  protoOf(Vec3).times_422v76_k$ = function (scalar) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0] * scalar;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this.storage_1[1] * scalar;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = this.storage_1[2];
    return Vec3_init_$Create$(tmp, tmp_0, tmp$ret$5 * scalar);
  };
  protoOf(Vec3).div_nq5qk9_k$ = function (scalar) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0] / scalar;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this.storage_1[1] / scalar;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = this.storage_1[2];
    return Vec3_init_$Create$(tmp, tmp_0, tmp$ret$5 / scalar);
  };
  protoOf(Vec3).timesAssign_9pohfx_k$ = function (scalar) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp0_array[0] * scalar;
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp2_array[1] * scalar;
    var tmp4_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp4_array[2] * scalar;
  };
  protoOf(Vec3).divAssign_yyq0xk_k$ = function (scalar) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp0_array[0] / scalar;
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp2_array[1] / scalar;
    var tmp4_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp4_array[2] / scalar;
  };
  protoOf(Vec3).plusAssign_53lndv_k$ = function (other) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp + other.storage_1[0];
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_array[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp_0 + other.storage_1[1];
    var tmp4_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp4_array[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp_1 + other.storage_1[2];
  };
  protoOf(Vec3).plus_zibz36_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp + other.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 + other.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = other.storage_1[2];
    return Vec3_init_$Create$(tmp_0, tmp_2, tmp_3 + tmp$ret$11);
  };
  protoOf(Vec3).minusAssign_sssci5_k$ = function (other) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp - other.storage_1[0];
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_array[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp_0 - other.storage_1[1];
    var tmp4_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp4_array[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp_1 - other.storage_1[2];
  };
  protoOf(Vec3).minus_m4kcr0_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp - other.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 - other.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = other.storage_1[2];
    return Vec3_init_$Create$(tmp_0, tmp_2, tmp_3 - tmp$ret$11);
  };
  protoOf(Vec3).timesAssign_35fmd3_k$ = function (other) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp * other.storage_1[0];
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_array[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp_0 * other.storage_1[1];
    var tmp4_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp4_array[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp_1 * other.storage_1[2];
  };
  protoOf(Vec3).times_ertsxi_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * other.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 * other.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = other.storage_1[2];
    return Vec3_init_$Create$(tmp_0, tmp_2, tmp_3 * tmp$ret$11);
  };
  protoOf(Vec3).divAssign_a6fr3g_k$ = function (other) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp / other.storage_1[0];
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_array[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp_0 / other.storage_1[1];
    var tmp4_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp4_array[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp_1 / other.storage_1[2];
  };
  protoOf(Vec3).div_94cx3p_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp / other.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 / other.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = other.storage_1[2];
    return Vec3_init_$Create$(tmp_0, tmp_2, tmp_3 / tmp$ret$11);
  };
  protoOf(Vec3).lengthSquared_guwgf5_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_0 + tmp_1 * this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return tmp_2 + tmp_3 * this.storage_1[2];
  };
  protoOf(Vec3).length_iap7oa_k$ = function () {
    // Inline function 'kotlin.math.sqrt' call
    // Inline function 'vision.gears.webglmath.Vec3.lengthSquared' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_0 + tmp_1 * this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var x = tmp_2 + tmp_3 * this.storage_1[2];
    return Math.sqrt(x);
  };
  protoOf(Vec3).normalize_3wvcwd_k$ = function () {
    // Inline function 'vision.gears.webglmath.Vec3.length' call
    // Inline function 'kotlin.math.sqrt' call
    // Inline function 'vision.gears.webglmath.Vec3.lengthSquared' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_0 + tmp_1 * this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var x = tmp_2 + tmp_3 * this.storage_1[2];
    var l = Math.sqrt(x);
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp0_array[0] / l;
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp2_array[1] / l;
    var tmp4_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp4_array[2] / l;
    return this;
  };
  protoOf(Vec3).dot_ovsr1_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * other.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_0 + tmp_1 * other.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return tmp_2 + tmp_3 * other.storage_1[2];
  };
  protoOf(Vec3).cross_ew7gzg_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * other.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_0 - tmp_1 * other.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp_3 * other.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = tmp_4 - tmp_5 * other.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_7 = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = tmp_7 * other.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$23 = other.storage_1[0];
    return Vec3_init_$Create$(tmp_2, tmp_6, tmp_8 - tmp_9 * tmp$ret$23);
  };
  protoOf(Vec3).provideDelegate_i9or2y_k$ = function (provider, property) {
    provider.register_elwjfb_k$(property.callableName, this);
    return this;
  };
  protoOf(Vec3).getValue_npgje7_k$ = function (provider, property) {
    return this;
  };
  protoOf(Vec3).setValue_yre87l_k$ = function (provider, property, value) {
    this.set_b6plua_k$(value);
  };
  protoOf(Vec3).commit_6y6sig_k$ = function (gl, uniformLocation, samplerIndex) {
    gl.uniform3fv(uniformLocation, this.storage_1);
  };
  protoOf(Vec3).get_glType_du95mw_k$ = function () {
    return WebGLRenderingContext.FLOAT_VEC3;
  };
  function times_1(_this__u8e3s4, v) {
    // Inline function 'vision.gears.webglmath.Vec3.x' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = v.storage_1[0] * _this__u8e3s4;
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = v.storage_1[1] * _this__u8e3s4;
    // Inline function 'vision.gears.webglmath.Vec3.z' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = v.storage_1[2];
    return Vec3_init_$Create$(tmp, tmp_0, tmp$ret$8 * _this__u8e3s4);
  }
  function div_1(_this__u8e3s4, v) {
    // Inline function 'vision.gears.webglmath.Vec3.x' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = _this__u8e3s4 / v.storage_1[0];
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = _this__u8e3s4 / v.storage_1[1];
    // Inline function 'vision.gears.webglmath.Vec3.z' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = v.storage_1[2];
    return Vec3_init_$Create$(tmp, tmp_0, _this__u8e3s4 / tmp$ret$8);
  }
  function Vec3Array_init_$Init$(size, $this) {
    Vec3Array.call($this, null, size, size);
    return $this;
  }
  function Vec3Array_init_$Create$(size) {
    return Vec3Array_init_$Init$(size, objectCreate(protoOf(Vec3Array)));
  }
  function Vec3Array(backingStorage, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? 0 : endIndex;
    VecArray.call(this);
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(imul(startIndex, 3), imul(endIndex, 3));
    tmp.storage_1 = tmp1_elvis_lhs == null ? new Float32Array(imul(startIndex, 3)) : tmp1_elvis_lhs;
  }
  protoOf(Vec3Array).get_storage_twal4e_k$ = function () {
    return this.storage_1;
  };
  protoOf(Vec3Array).set_k08diu_k$ = function (values) {
    var inductionVariable = 0;
    var last = this.storage_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        var tmp1_elvis_lhs = getOrNull(values, i % 3 | 0);
        // Inline function 'kotlin.js.asDynamic' call
        this_0[i] = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
      }
       while (inductionVariable < last);
    return this;
  };
  protoOf(Vec3Array).get_c1px32_k$ = function (i) {
    return new Vec3(this.storage_1, imul(i, 3));
  };
  protoOf(Vec3Array).subarray_pw2d2f_k$ = function (begin, end) {
    return new Vec3Array(this.storage_1, imul(begin, 3), imul(end, 3));
  };
  protoOf(Vec3Array).setNormalized_s7ctan_k$ = function (b) {
    var progression = step(until(0, this.storage_1.length), 3);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    var step_0 = progression.get_step_woujh1_k$();
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = b.storage_1[i];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * b.storage_1[i];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = b.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = tmp_0 + tmp_1 * b.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = b.storage_1[i + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var l2 = tmp_2 + tmp_3 * b.storage_1[i + 2 | 0];
        // Inline function 'kotlin.math.sqrt' call
        var linv = 1 / Math.sqrt(l2);
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this.storage_1[i] = b.storage_1[i] * linv;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this.storage_1[i + 1 | 0] = b.storage_1[i + 1 | 0] * linv;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this.storage_1[i + 2 | 0] = b.storage_1[i + 2 | 0] * linv;
      }
       while (!(i === last));
  };
  protoOf(Vec3Array).setCrossed_rw7hhp_k$ = function (b, c) {
    var j = 0;
    var progression = step(until(0, this.storage_1.length), 3);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    var step_0 = progression.get_step_woujh1_k$();
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var b0 = b.storage_1[j];
        // Inline function 'org.khronos.webgl.get' call
        var tmp1 = j;
        j = tmp1 + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var c0 = c.storage_1[tmp1];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var b1 = b.storage_1[j];
        // Inline function 'org.khronos.webgl.get' call
        var tmp2 = j;
        j = tmp2 + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var c1 = c.storage_1[tmp2];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var b2 = b.storage_1[j];
        // Inline function 'org.khronos.webgl.get' call
        var tmp3 = j;
        j = tmp3 + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var c2 = c.storage_1[tmp3];
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.storage_1[i] = b1 * c2 - b2 * c1;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.storage_1[i + 1 | 0] = b2 * c0 - b0 * c2;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.storage_1[i + 2 | 0] = b0 * c1 - b1 * c0;
      }
       while (!(i === last));
  };
  protoOf(Vec3Array).setAffineTransformed_i3gv15_k$ = function (v, m) {
    var progression = step(until(0, this.storage_1.length), 3);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    var step_0 = progression.get_step_woujh1_k$();
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        var index = i + 0 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = v.storage_1[i + 0 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * m.get_storage_twal4e_k$()[0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = v.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = tmp_0 + tmp_1 * m.get_storage_twal4e_k$()[1];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = v.storage_1[i + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = tmp_2 + tmp_3 * m.get_storage_twal4e_k$()[2];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_0[index] = tmp_4 + m.get_storage_twal4e_k$()[3];
        // Inline function 'org.khronos.webgl.set' call
        var this_1 = this.storage_1;
        var index_0 = i + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_5 = v.storage_1[i + 0 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_6 = tmp_5 * m.get_storage_twal4e_k$()[4];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_7 = v.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_8 = tmp_6 + tmp_7 * m.get_storage_twal4e_k$()[5];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_9 = v.storage_1[i + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_10 = tmp_8 + tmp_9 * m.get_storage_twal4e_k$()[6];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_1[index_0] = tmp_10 + m.get_storage_twal4e_k$()[7];
        // Inline function 'org.khronos.webgl.set' call
        var this_2 = this.storage_1;
        var index_1 = i + 2 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_11 = v.storage_1[i + 0 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_12 = tmp_11 * m.get_storage_twal4e_k$()[8];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_13 = v.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_14 = tmp_12 + tmp_13 * m.get_storage_twal4e_k$()[9];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_15 = v.storage_1[i + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_16 = tmp_14 + tmp_15 * m.get_storage_twal4e_k$()[10];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_2[index_1] = tmp_16 + m.get_storage_twal4e_k$()[11];
      }
       while (!(i === last));
  };
  protoOf(Vec3Array).setAffineNormalTransformed_l5is4g_k$ = function (v, m) {
    var progression = step(until(0, this.storage_1.length), 3);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    var step_0 = progression.get_step_woujh1_k$();
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        var index = i + 0 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = v.storage_1[i + 0 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * m.get_storage_twal4e_k$()[0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = v.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = tmp_0 + tmp_1 * m.get_storage_twal4e_k$()[1];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = v.storage_1[i + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_0[index] = tmp_2 + tmp_3 * m.get_storage_twal4e_k$()[2];
        // Inline function 'org.khronos.webgl.set' call
        var this_1 = this.storage_1;
        var index_0 = i + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = v.storage_1[i + 0 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_5 = tmp_4 * m.get_storage_twal4e_k$()[4];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_6 = v.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_7 = tmp_5 + tmp_6 * m.get_storage_twal4e_k$()[5];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_8 = v.storage_1[i + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_1[index_0] = tmp_7 + tmp_8 * m.get_storage_twal4e_k$()[6];
        // Inline function 'org.khronos.webgl.set' call
        var this_2 = this.storage_1;
        var index_1 = i + 2 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_9 = v.storage_1[i + 0 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_10 = tmp_9 * m.get_storage_twal4e_k$()[8];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_11 = v.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_12 = tmp_10 + tmp_11 * m.get_storage_twal4e_k$()[9];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_13 = v.storage_1[i + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_2[index_1] = tmp_12 + tmp_13 * m.get_storage_twal4e_k$()[10];
      }
       while (!(i === last));
  };
  protoOf(Vec3Array).provideDelegate_i9or2y_k$ = function (provider, property) {
    provider.register_elwjfb_k$(property.callableName + '[0]', this);
    return this;
  };
  protoOf(Vec3Array).getValue_npgje7_k$ = function (provider, property) {
    return this;
  };
  protoOf(Vec3Array).setValue_gbdqyb_k$ = function (provider, property, value) {
    this.set_b6plua_k$(value);
  };
  protoOf(Vec3Array).commit_6y6sig_k$ = function (gl, uniformLocation, samplerIndex) {
    gl.uniform3fv(uniformLocation, this.storage_1);
  };
  protoOf(Vec3Array).get_glType_du95mw_k$ = function () {
    return WebGLRenderingContext.FLOAT_VEC3;
  };
  function Vec4_init_$Init$(u, v, s, t, $this) {
    u = u === VOID ? 0.0 : u;
    v = v === VOID ? 0.0 : v;
    s = s === VOID ? 0.0 : s;
    t = t === VOID ? 1.0 : t;
    Vec4.call($this, null, 0);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.storage_1[0] = u;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.storage_1[1] = v;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.storage_1[2] = s;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.storage_1[3] = t;
    return $this;
  }
  function Vec4_init_$Create$(u, v, s, t) {
    return Vec4_init_$Init$(u, v, s, t, objectCreate(protoOf(Vec4)));
  }
  function Vec4_init_$Init$_0(other, v, s, w, $this) {
    v = v === VOID ? 0.0 : v;
    s = s === VOID ? 0.0 : s;
    w = w === VOID ? 1.0 : w;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = other.get_storage_twal4e_k$()[0];
    Vec4_init_$Init$(tmp$ret$1, v, s, w, $this);
    return $this;
  }
  function Vec4_init_$Create$_0(other, v, s, w) {
    return Vec4_init_$Init$_0(other, v, s, w, objectCreate(protoOf(Vec4)));
  }
  function Vec4_init_$Init$_1(other, s, w, $this) {
    s = s === VOID ? 0.0 : s;
    w = w === VOID ? 1.0 : w;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = other.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = other.get_storage_twal4e_k$()[1];
    Vec4_init_$Init$(tmp, tmp$ret$3, s, w, $this);
    return $this;
  }
  function Vec4_init_$Create$_1(other, s, w) {
    return Vec4_init_$Init$_1(other, s, w, objectCreate(protoOf(Vec4)));
  }
  function Vec4_init_$Init$_2(other, w, $this) {
    w = w === VOID ? 1.0 : w;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = other.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = other.get_storage_twal4e_k$()[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = other.get_storage_twal4e_k$()[2];
    Vec4_init_$Init$(tmp, tmp_0, tmp$ret$5, w, $this);
    return $this;
  }
  function Vec4_init_$Create$_2(other, w) {
    return Vec4_init_$Init$_2(other, w, objectCreate(protoOf(Vec4)));
  }
  function Vec4_init_$Init$_3(other, $this) {
    Vec4.call($this, null, 0);
    $this.storage_1.set(other.storage_1);
    return $this;
  }
  function Vec4_init_$Create$_3(other) {
    return Vec4_init_$Init$_3(other, objectCreate(protoOf(Vec4)));
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.zeros_1 = Vec4_init_$Create$(0.0, 0.0, 0.0, 0.0);
    this.ones_1 = Vec4_init_$Create$(1.0, 1.0, 1.0, 1.0);
  }
  protoOf(Companion_5).get_zeros_j2b92a_k$ = function () {
    return this.zeros_1;
  };
  protoOf(Companion_5).get_ones_worv2u_k$ = function () {
    return this.ones_1;
  };
  protoOf(Companion_5).makeRandom_aasndn_k$ = function (minVal, maxVal) {
    var tmp = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = maxVal.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp * (tmp_0 - minVal.storage_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 + minVal.storage_1[0];
    var tmp_3 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = maxVal.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = tmp_3 * (tmp_4 - minVal.storage_1[1]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = tmp_5 + minVal.storage_1[1];
    var tmp_7 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = maxVal.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = tmp_7 * (tmp_8 - minVal.storage_1[2]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = tmp_9 + minVal.storage_1[2];
    var tmp_11 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_12 = maxVal.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_13 = tmp_11 * (tmp_12 - minVal.storage_1[3]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$23 = minVal.storage_1[3];
    return Vec4_init_$Create$(tmp_2, tmp_6, tmp_10, tmp_13 + tmp$ret$23);
  };
  protoOf(Companion_5).makeRandom_1ie7bl_k$ = function (minVal, maxVal) {
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_5();
    var minVal_0 = Vec4_init_$Create$(minVal, minVal, minVal, minVal);
    var maxVal_0 = Vec4_init_$Create$(maxVal, maxVal, maxVal, maxVal);
    var tmp = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = maxVal_0.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp * (tmp_0 - minVal_0.storage_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 + minVal_0.storage_1[0];
    var tmp_3 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = maxVal_0.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = tmp_3 * (tmp_4 - minVal_0.storage_1[1]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = tmp_5 + minVal_0.storage_1[1];
    var tmp_7 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = maxVal_0.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = tmp_7 * (tmp_8 - minVal_0.storage_1[2]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = tmp_9 + minVal_0.storage_1[2];
    var tmp_11 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_12 = maxVal_0.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_13 = tmp_11 * (tmp_12 - minVal_0.storage_1[3]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$23 = minVal_0.storage_1[3];
    return Vec4_init_$Create$(tmp_2, tmp_6, tmp_10, tmp_13 + tmp$ret$23);
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Vec4(backingStorage, offset) {
    Companion_getInstance_5();
    offset = offset === VOID ? 0 : offset;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(offset, offset + 4 | 0);
    tmp.storage_1 = tmp1_elvis_lhs == null ? new Float32Array(4) : tmp1_elvis_lhs;
  }
  protoOf(Vec4).get_storage_twal4e_k$ = function () {
    return this.storage_1;
  };
  protoOf(Vec4).set_x_t61dkd_k$ = function (value) {
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[0] = value;
  };
  protoOf(Vec4).get_x_1mhr67_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.storage_1[0];
  };
  protoOf(Vec4).set_y_niwx4k_k$ = function (value) {
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[1] = value;
  };
  protoOf(Vec4).get_y_1mhr68_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.storage_1[1];
  };
  protoOf(Vec4).set_z_56r5ud_k$ = function (value) {
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[2] = value;
  };
  protoOf(Vec4).get_z_1mhr69_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.storage_1[2];
  };
  protoOf(Vec4).set_w_atvma6_k$ = function (value) {
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.storage_1[3] = value;
  };
  protoOf(Vec4).get_w_1mhr66_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.storage_1[3];
  };
  protoOf(Vec4).set_xy_15high_k$ = function (value) {
    (new Vec2(this.storage_1)).set_b6plua_k$(value);
  };
  protoOf(Vec4).get_xy_kntnjq_k$ = function () {
    return new Vec2(this.storage_1);
  };
  protoOf(Vec4).set_xyz_lj2lqo_k$ = function (value) {
    (new Vec3(this.storage_1)).set_b6plua_k$(value);
  };
  protoOf(Vec4).get_xyz_18is40_k$ = function () {
    return new Vec3(this.storage_1);
  };
  protoOf(Vec4).clone_1keycd_k$ = function () {
    return Vec4_init_$Create$_3(this);
  };
  protoOf(Vec4).set_k08diu_k$ = function (values) {
    // Inline function 'org.khronos.webgl.set' call
    var this_0 = this.storage_1;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp;
    if (0 >= 0 ? 0 <= get_lastIndex(values) : false) {
      tmp = values[0];
    } else {
      // Inline function 'vision.gears.webglmath.Vec4.set.<anonymous>' call
      tmp = 0.0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    this_0[0] = tmp;
    // Inline function 'org.khronos.webgl.set' call
    var this_1 = this.storage_1;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp_0;
    if (1 >= 0 ? 1 <= get_lastIndex(values) : false) {
      tmp_0 = values[1];
    } else {
      // Inline function 'vision.gears.webglmath.Vec4.set.<anonymous>' call
      tmp_0 = 0.0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    this_1[1] = tmp_0;
    // Inline function 'org.khronos.webgl.set' call
    var this_2 = this.storage_1;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp_1;
    if (2 >= 0 ? 2 <= get_lastIndex(values) : false) {
      tmp_1 = values[2];
    } else {
      // Inline function 'vision.gears.webglmath.Vec4.set.<anonymous>' call
      tmp_1 = 0.0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    this_2[2] = tmp_1;
    // Inline function 'org.khronos.webgl.set' call
    var this_3 = this.storage_1;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp_2;
    if (3 >= 0 ? 3 <= get_lastIndex(values) : false) {
      tmp_2 = values[3];
    } else {
      // Inline function 'vision.gears.webglmath.Vec4.set.<anonymous>' call
      tmp_2 = 1.0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    this_3[3] = tmp_2;
    return this;
  };
  protoOf(Vec4).setRandom_ufzvup_k$ = function (minVal, maxVal) {
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_5();
    var tmp = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = maxVal.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp * (tmp_0 - minVal.storage_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 + minVal.storage_1[0];
    var tmp_3 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = maxVal.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = tmp_3 * (tmp_4 - minVal.storage_1[1]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = tmp_5 + minVal.storage_1[1];
    var tmp_7 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = maxVal.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = tmp_7 * (tmp_8 - minVal.storage_1[2]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = tmp_9 + minVal.storage_1[2];
    var tmp_11 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_12 = maxVal.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_13 = tmp_11 * (tmp_12 - minVal.storage_1[3]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$23 = minVal.storage_1[3];
    var tmp$ret$24 = Vec4_init_$Create$(tmp_2, tmp_6, tmp_10, tmp_13 + tmp$ret$23);
    this.set_b6plua_k$(tmp$ret$24);
  };
  protoOf(Vec4).setRandom_dagj4b_k$ = function (minVal, maxVal) {
    // Inline function 'vision.gears.webglmath.Vec4.setRandom' call
    var minVal_0 = Vec4_init_$Create$(minVal, minVal, minVal, minVal);
    var maxVal_0 = Vec4_init_$Create$(maxVal, maxVal, maxVal, minVal);
    // Inline function 'vision.gears.webglmath.Companion.makeRandom' call
    Companion_getInstance_5();
    var tmp = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = maxVal_0.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp * (tmp_0 - minVal_0.storage_1[0]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 + minVal_0.storage_1[0];
    var tmp_3 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = maxVal_0.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = tmp_3 * (tmp_4 - minVal_0.storage_1[1]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = tmp_5 + minVal_0.storage_1[1];
    var tmp_7 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = maxVal_0.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = tmp_7 * (tmp_8 - minVal_0.storage_1[2]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = tmp_9 + minVal_0.storage_1[2];
    var tmp_11 = Default_getInstance().nextFloat_jqti5l_k$();
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_12 = maxVal_0.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_13 = tmp_11 * (tmp_12 - minVal_0.storage_1[3]);
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$23 = minVal_0.storage_1[3];
    var tmp$ret$24 = Vec4_init_$Create$(tmp_2, tmp_6, tmp_10, tmp_13 + tmp$ret$23);
    this.set_b6plua_k$(tmp$ret$24);
  };
  protoOf(Vec4).clamp_x59d51_k$ = function (minVal, maxVal) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp < minVal.storage_1[0]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[0] = minVal.storage_1[0];
    }
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp_0 < minVal.storage_1[1]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[1] = minVal.storage_1[1];
    }
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp_1 < minVal.storage_1[2]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[2] = minVal.storage_1[2];
    }
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = this.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp_2 < minVal.storage_1[3]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[3] = minVal.storage_1[3];
    }
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp_3 > maxVal.storage_1[0]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[0] = maxVal.storage_1[0];
    }
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp_4 > maxVal.storage_1[1]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[1] = maxVal.storage_1[1];
    }
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp_5 > maxVal.storage_1[2]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[2] = maxVal.storage_1[2];
    }
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = this.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (tmp_6 > maxVal.storage_1[3]) {
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this.storage_1[3] = maxVal.storage_1[3];
    }
    return this;
  };
  protoOf(Vec4).unaryPlus_g9fn1l_k$ = function () {
    return this;
  };
  protoOf(Vec4).unaryMinus_6uz0qp_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = -this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = -this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = -this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = this.storage_1[3];
    return Vec4_init_$Create$(tmp, tmp_0, tmp_1, -tmp$ret$7);
  };
  protoOf(Vec4).times_422v76_k$ = function (scalar) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0] * scalar;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this.storage_1[1] * scalar;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[2] * scalar;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = this.storage_1[3];
    return Vec4_init_$Create$(tmp, tmp_0, tmp_1, tmp$ret$7 * scalar);
  };
  protoOf(Vec4).div_nq5qk9_k$ = function (scalar) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0] / scalar;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this.storage_1[1] / scalar;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[2] / scalar;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = this.storage_1[3];
    return Vec4_init_$Create$(tmp, tmp_0, tmp_1, tmp$ret$7 / scalar);
  };
  protoOf(Vec4).timesAssign_9pohfx_k$ = function (scalar) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp0_array[0] * scalar;
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp2_array[1] * scalar;
    var tmp4_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp4_array[2] * scalar;
    var tmp6_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp6_array[3] = tmp6_array[3] * scalar;
  };
  protoOf(Vec4).divAssign_yyq0xk_k$ = function (scalar) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp0_array[0] / scalar;
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp2_array[1] / scalar;
    var tmp4_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp4_array[2] / scalar;
    var tmp6_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp6_array[3] = tmp6_array[3] / scalar;
  };
  protoOf(Vec4).plusAssign_y33jku_k$ = function (other) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp + other.storage_1[0];
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_array[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp_0 + other.storage_1[1];
    var tmp4_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp4_array[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp_1 + other.storage_1[2];
    var tmp6_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp6_array[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp6_array[3] = tmp_2 + other.storage_1[3];
  };
  protoOf(Vec4).plus_u1zy75_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp + other.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 + other.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp_3 + other.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = this.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$15 = other.storage_1[3];
    return Vec4_init_$Create$(tmp_0, tmp_2, tmp_4, tmp_5 + tmp$ret$15);
  };
  protoOf(Vec4).minusAssign_adwugk_k$ = function (other) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp - other.storage_1[0];
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_array[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp_0 - other.storage_1[1];
    var tmp4_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp4_array[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp_1 - other.storage_1[2];
    var tmp6_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp6_array[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp6_array[3] = tmp_2 - other.storage_1[3];
  };
  protoOf(Vec4).minus_go8buz_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp - other.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 - other.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp_3 - other.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = this.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$15 = other.storage_1[3];
    return Vec4_init_$Create$(tmp_0, tmp_2, tmp_4, tmp_5 - tmp$ret$15);
  };
  protoOf(Vec4).timesAssign_yzuhdi_k$ = function (other) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp * other.storage_1[0];
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_array[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp_0 * other.storage_1[1];
    var tmp4_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp4_array[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp_1 * other.storage_1[2];
    var tmp6_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp6_array[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp6_array[3] = tmp_2 * other.storage_1[3];
  };
  protoOf(Vec4).times_9bhs1h_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * other.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 * other.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp_3 * other.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = this.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$15 = other.storage_1[3];
    return Vec4_init_$Create$(tmp_0, tmp_2, tmp_4, tmp_5 * tmp$ret$15);
  };
  protoOf(Vec4).divAssign_t09fv9_k$ = function (other) {
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp / other.storage_1[0];
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_array[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp_0 / other.storage_1[1];
    var tmp4_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp4_array[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp_1 / other.storage_1[2];
    var tmp6_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp6_array[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp6_array[3] = tmp_2 / other.storage_1[3];
  };
  protoOf(Vec4).div_ekoxzq_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp / other.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 / other.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp_3 / other.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = this.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$15 = other.storage_1[3];
    return Vec4_init_$Create$(tmp_0, tmp_2, tmp_4, tmp_5 / tmp$ret$15);
  };
  protoOf(Vec4).lengthSquared_guwgf5_k$ = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_0 + tmp_1 * this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp_2 + tmp_3 * this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = this.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return tmp_4 + tmp_5 * this.storage_1[3];
  };
  protoOf(Vec4).length_iap7oa_k$ = function () {
    // Inline function 'kotlin.math.sqrt' call
    // Inline function 'vision.gears.webglmath.Vec4.lengthSquared' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_0 + tmp_1 * this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp_2 + tmp_3 * this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = this.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var x = tmp_4 + tmp_5 * this.storage_1[3];
    return Math.sqrt(x);
  };
  protoOf(Vec4).normalize_3wvcwd_k$ = function () {
    // Inline function 'vision.gears.webglmath.Vec4.length' call
    // Inline function 'kotlin.math.sqrt' call
    // Inline function 'vision.gears.webglmath.Vec4.lengthSquared' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_0 + tmp_1 * this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp_2 + tmp_3 * this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = this.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var x = tmp_4 + tmp_5 * this.storage_1[3];
    var l = Math.sqrt(x);
    var tmp0_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp0_array[0] / l;
    var tmp2_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp2_array[1] / l;
    var tmp4_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp4_array[2] / l;
    var tmp6_array = this.storage_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp6_array[3] = tmp6_array[3] / l;
    return this;
  };
  protoOf(Vec4).dot_657tn2_k$ = function (other) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * other.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_0 + tmp_1 * other.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp_2 + tmp_3 * other.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = this.storage_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return tmp_4 + tmp_5 * other.storage_1[3];
  };
  protoOf(Vec4).timesAssign_vrzt1e_k$ = function (m) {
    var t = new Float32Array(this.storage_1);
    // Inline function 'org.khronos.webgl.set' call
    var this_0 = this.storage_1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = m.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * t[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = m.get_storage_twal4e_k$()[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_0 + tmp_1 * t[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = m.get_storage_twal4e_k$()[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp_2 + tmp_3 * t[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = m.get_storage_twal4e_k$()[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0[0] = tmp_4 + tmp_5 * t[3];
    // Inline function 'org.khronos.webgl.set' call
    var this_1 = this.storage_1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = m.get_storage_twal4e_k$()[4];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_7 = tmp_6 * t[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = m.get_storage_twal4e_k$()[5];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = tmp_7 + tmp_8 * t[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = m.get_storage_twal4e_k$()[6];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_11 = tmp_9 + tmp_10 * t[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_12 = m.get_storage_twal4e_k$()[7];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this_1[1] = tmp_11 + tmp_12 * t[3];
    // Inline function 'org.khronos.webgl.set' call
    var this_2 = this.storage_1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_13 = m.get_storage_twal4e_k$()[8];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_14 = tmp_13 * t[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_15 = m.get_storage_twal4e_k$()[9];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_16 = tmp_14 + tmp_15 * t[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_17 = m.get_storage_twal4e_k$()[10];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_18 = tmp_16 + tmp_17 * t[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_19 = m.get_storage_twal4e_k$()[11];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this_2[2] = tmp_18 + tmp_19 * t[3];
    // Inline function 'org.khronos.webgl.set' call
    var this_3 = this.storage_1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_20 = m.get_storage_twal4e_k$()[12];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_21 = tmp_20 * t[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_22 = m.get_storage_twal4e_k$()[13];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_23 = tmp_21 + tmp_22 * t[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_24 = m.get_storage_twal4e_k$()[14];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_25 = tmp_23 + tmp_24 * t[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_26 = m.get_storage_twal4e_k$()[15];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this_3[3] = tmp_25 + tmp_26 * t[3];
  };
  protoOf(Vec4).times_93xthb_k$ = function (m) {
    var vp = Vec4_init_$Create$_3(this);
    // Inline function 'org.khronos.webgl.set' call
    var this_0 = vp.storage_1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = m.get_storage_twal4e_k$()[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp * this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = m.get_storage_twal4e_k$()[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_0 + tmp_1 * this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = m.get_storage_twal4e_k$()[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp_2 + tmp_3 * this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = m.get_storage_twal4e_k$()[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0[0] = tmp_4 + tmp_5 * this.storage_1[3];
    // Inline function 'org.khronos.webgl.set' call
    var this_1 = vp.storage_1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = m.get_storage_twal4e_k$()[4];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_7 = tmp_6 * this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = m.get_storage_twal4e_k$()[5];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = tmp_7 + tmp_8 * this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = m.get_storage_twal4e_k$()[6];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_11 = tmp_9 + tmp_10 * this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_12 = m.get_storage_twal4e_k$()[7];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this_1[1] = tmp_11 + tmp_12 * this.storage_1[3];
    // Inline function 'org.khronos.webgl.set' call
    var this_2 = vp.storage_1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_13 = m.get_storage_twal4e_k$()[8];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_14 = tmp_13 * this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_15 = m.get_storage_twal4e_k$()[9];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_16 = tmp_14 + tmp_15 * this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_17 = m.get_storage_twal4e_k$()[10];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_18 = tmp_16 + tmp_17 * this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_19 = m.get_storage_twal4e_k$()[11];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this_2[2] = tmp_18 + tmp_19 * this.storage_1[3];
    // Inline function 'org.khronos.webgl.set' call
    var this_3 = vp.storage_1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_20 = m.get_storage_twal4e_k$()[12];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_21 = tmp_20 * this.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_22 = m.get_storage_twal4e_k$()[13];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_23 = tmp_21 + tmp_22 * this.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_24 = m.get_storage_twal4e_k$()[14];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_25 = tmp_23 + tmp_24 * this.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_26 = m.get_storage_twal4e_k$()[15];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this_3[3] = tmp_25 + tmp_26 * this.storage_1[3];
    return vp;
  };
  protoOf(Vec4).provideDelegate_i9or2y_k$ = function (provider, property) {
    provider.register_elwjfb_k$(property.callableName, this);
    return this;
  };
  protoOf(Vec4).getValue_npgje7_k$ = function (provider, property) {
    return this;
  };
  protoOf(Vec4).setValue_2wzd76_k$ = function (provider, property, value) {
    this.set_b6plua_k$(value);
  };
  protoOf(Vec4).commit_6y6sig_k$ = function (gl, uniformLocation, samplerIndex) {
    gl.uniform4fv(uniformLocation, this.storage_1);
  };
  protoOf(Vec4).get_glType_du95mw_k$ = function () {
    return WebGLRenderingContext.FLOAT_VEC4;
  };
  function times_2(_this__u8e3s4, v) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = _this__u8e3s4 * v.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = _this__u8e3s4 * v.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = _this__u8e3s4 * v.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = v.storage_1[3];
    return Vec4_init_$Create$(tmp, tmp_0, tmp_1, _this__u8e3s4 * tmp$ret$7);
  }
  function div_2(_this__u8e3s4, v) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = _this__u8e3s4 / v.storage_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = _this__u8e3s4 / v.storage_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = _this__u8e3s4 / v.storage_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = v.storage_1[3];
    return Vec4_init_$Create$(tmp, tmp_0, tmp_1, _this__u8e3s4 / tmp$ret$7);
  }
  function Vec4Array_init_$Init$(size, $this) {
    Vec4Array.call($this, null, size, size);
    return $this;
  }
  function Vec4Array_init_$Create$(size) {
    return Vec4Array_init_$Init$(size, objectCreate(protoOf(Vec4Array)));
  }
  function Vec4Array(backingStorage, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? 0 : endIndex;
    VecArray.call(this);
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(imul(startIndex, 4), imul(endIndex, 4));
    tmp.storage_1 = tmp1_elvis_lhs == null ? new Float32Array(imul(startIndex, 4)) : tmp1_elvis_lhs;
  }
  protoOf(Vec4Array).get_storage_twal4e_k$ = function () {
    return this.storage_1;
  };
  protoOf(Vec4Array).set_k08diu_k$ = function (values) {
    var inductionVariable = 0;
    var last = this.storage_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        var tmp1_elvis_lhs = getOrNull(values, i % 4 | 0);
        // Inline function 'kotlin.js.asDynamic' call
        this_0[i] = tmp1_elvis_lhs == null ? (i % 4 | 0) === 3 ? 1.0 : 0.0 : tmp1_elvis_lhs;
      }
       while (inductionVariable < last);
    return this;
  };
  protoOf(Vec4Array).get_c1px32_k$ = function (i) {
    return new Vec4(this.storage_1, imul(i, 4));
  };
  protoOf(Vec4Array).subarray_pw2d2f_k$ = function (begin, end) {
    return new Vec4Array(this.storage_1, imul(begin, 4), imul(end, 4));
  };
  protoOf(Vec4Array).setNormalized_kykr00_k$ = function (b) {
    var progression = step(until(0, this.storage_1.length), 4);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    var step_0 = progression.get_step_woujh1_k$();
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = b.storage_1[i];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * b.storage_1[i];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = b.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = tmp_0 + tmp_1 * b.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = b.storage_1[i + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = tmp_2 + tmp_3 * b.storage_1[i + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_5 = b.storage_1[i + 3 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var l2 = tmp_4 + tmp_5 * b.storage_1[i + 3 | 0];
        // Inline function 'kotlin.math.sqrt' call
        var linv = 1 / Math.sqrt(l2);
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this.storage_1[i] = b.storage_1[i] * linv;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this.storage_1[i + 1 | 0] = b.storage_1[i + 1 | 0] * linv;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this.storage_1[i + 2 | 0] = b.storage_1[i + 2 | 0] * linv;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this.storage_1[i + 3 | 0] = b.storage_1[i + 3 | 0] * linv;
      }
       while (!(i === last));
  };
  protoOf(Vec4Array).setTransformed_pm1zqx_k$ = function (v, m) {
    var progression = step(until(0, this.storage_1.length), 4);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    var step_0 = progression.get_step_woujh1_k$();
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        var index = i + 0 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = v.storage_1[i + 0 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * m.get_storage_twal4e_k$()[0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = v.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = tmp_0 + tmp_1 * m.get_storage_twal4e_k$()[1];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = v.storage_1[i + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = tmp_2 + tmp_3 * m.get_storage_twal4e_k$()[2];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_5 = v.storage_1[i + 3 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_0[index] = tmp_4 + tmp_5 * m.get_storage_twal4e_k$()[3];
        // Inline function 'org.khronos.webgl.set' call
        var this_1 = this.storage_1;
        var index_0 = i + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_6 = v.storage_1[i + 0 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_7 = tmp_6 * m.get_storage_twal4e_k$()[4];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_8 = v.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_9 = tmp_7 + tmp_8 * m.get_storage_twal4e_k$()[5];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_10 = v.storage_1[i + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_11 = tmp_9 + tmp_10 * m.get_storage_twal4e_k$()[6];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_12 = v.storage_1[i + 3 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_1[index_0] = tmp_11 + tmp_12 * m.get_storage_twal4e_k$()[7];
        // Inline function 'org.khronos.webgl.set' call
        var this_2 = this.storage_1;
        var index_1 = i + 2 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_13 = v.storage_1[i + 0 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_14 = tmp_13 * m.get_storage_twal4e_k$()[8];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_15 = v.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_16 = tmp_14 + tmp_15 * m.get_storage_twal4e_k$()[9];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_17 = v.storage_1[i + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_18 = tmp_16 + tmp_17 * m.get_storage_twal4e_k$()[10];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_19 = v.storage_1[i + 3 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_2[index_1] = tmp_18 + tmp_19 * m.get_storage_twal4e_k$()[11];
        // Inline function 'org.khronos.webgl.set' call
        var this_3 = this.storage_1;
        var index_2 = i + 3 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_20 = v.storage_1[i + 0 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_21 = tmp_20 * m.get_storage_twal4e_k$()[12];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_22 = v.storage_1[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_23 = tmp_21 + tmp_22 * m.get_storage_twal4e_k$()[13];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_24 = v.storage_1[i + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_25 = tmp_23 + tmp_24 * m.get_storage_twal4e_k$()[14];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_26 = v.storage_1[i + 3 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_3[index_2] = tmp_25 + tmp_26 * m.get_storage_twal4e_k$()[15];
      }
       while (!(i === last));
  };
  protoOf(Vec4Array).transformNormal_23iysw_k$ = function (v, m) {
    var progression = step(until(0, this.storage_1.length), 3);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    var step_0 = progression.get_step_woujh1_k$();
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.storage_1;
        var index = i + 0 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = v.get_storage_twal4e_k$()[i + 0 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp * m.get_storage_twal4e_k$()[0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = v.get_storage_twal4e_k$()[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = tmp_0 + tmp_1 * m.get_storage_twal4e_k$()[1];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = v.get_storage_twal4e_k$()[i + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_0[index] = tmp_2 + tmp_3 * m.get_storage_twal4e_k$()[2];
        // Inline function 'org.khronos.webgl.set' call
        var this_1 = this.storage_1;
        var index_0 = i + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = v.get_storage_twal4e_k$()[i + 0 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_5 = tmp_4 * m.get_storage_twal4e_k$()[4];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_6 = v.get_storage_twal4e_k$()[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_7 = tmp_5 + tmp_6 * m.get_storage_twal4e_k$()[5];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_8 = v.get_storage_twal4e_k$()[i + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_1[index_0] = tmp_7 + tmp_8 * m.get_storage_twal4e_k$()[6];
        // Inline function 'org.khronos.webgl.set' call
        var this_2 = this.storage_1;
        var index_1 = i + 2 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_9 = v.get_storage_twal4e_k$()[i + 0 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_10 = tmp_9 * m.get_storage_twal4e_k$()[8];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_11 = v.get_storage_twal4e_k$()[i + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_12 = tmp_10 + tmp_11 * m.get_storage_twal4e_k$()[9];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_13 = v.get_storage_twal4e_k$()[i + 2 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this_2[index_1] = tmp_12 + tmp_13 * m.get_storage_twal4e_k$()[10];
      }
       while (!(i === last));
  };
  protoOf(Vec4Array).provideDelegate_i9or2y_k$ = function (provider, property) {
    provider.register_elwjfb_k$(property.callableName + '[0]', this);
    return this;
  };
  protoOf(Vec4Array).getValue_npgje7_k$ = function (provider, property) {
    return this;
  };
  protoOf(Vec4Array).setValue_92lono_k$ = function (provider, property, value) {
    this.set_b6plua_k$(value);
  };
  protoOf(Vec4Array).commit_6y6sig_k$ = function (gl, uniformLocation, samplerIndex) {
    gl.uniform4fv(uniformLocation, this.storage_1);
  };
  protoOf(Vec4Array).get_glType_du95mw_k$ = function () {
    return WebGLRenderingContext.FLOAT_VEC4;
  };
  function Gif() {
  }
  function VecArray$plus$1(this$0, $c) {
    this.this$0__1 = this$0;
    this.$c_1 = $c;
  }
  protoOf(VecArray$plus$1).invoke_dlyhwg_k$ = function (i) {
    return this.this$0__1.invoke_dlyhwg_k$(i) + this.$c_1.invoke_dlyhwg_k$(i);
  };
  function VecArray$minus$1(this$0, $c) {
    this.this$0__1 = this$0;
    this.$c_1 = $c;
  }
  protoOf(VecArray$minus$1).invoke_dlyhwg_k$ = function (i) {
    return this.this$0__1.invoke_dlyhwg_k$(i) - this.$c_1.invoke_dlyhwg_k$(i);
  };
  function VecArray$times$1(this$0, $c) {
    this.this$0__1 = this$0;
    this.$c_1 = $c;
  }
  protoOf(VecArray$times$1).invoke_dlyhwg_k$ = function (i) {
    return this.this$0__1.invoke_dlyhwg_k$(i) * this.$c_1.invoke_dlyhwg_k$(i);
  };
  function VecArray$div$1(this$0, $c) {
    this.this$0__1 = this$0;
    this.$c_1 = $c;
  }
  protoOf(VecArray$div$1).invoke_dlyhwg_k$ = function (i) {
    return this.this$0__1.invoke_dlyhwg_k$(i) / this.$c_1.invoke_dlyhwg_k$(i);
  };
  function VecArray$times$2(this$0, $s) {
    this.this$0__1 = this$0;
    this.$s_1 = $s;
  }
  protoOf(VecArray$times$2).invoke_dlyhwg_k$ = function (i) {
    return this.this$0__1.invoke_dlyhwg_k$(i) * this.$s_1;
  };
  function VecArray$div$2(this$0, $s) {
    this.this$0__1 = this$0;
    this.$s_1 = $s;
  }
  protoOf(VecArray$div$2).invoke_dlyhwg_k$ = function (i) {
    return this.this$0__1.invoke_dlyhwg_k$(i) / this.$s_1;
  };
  function VecArray$expand$1(this$0, $factor) {
    this.this$0__1 = this$0;
    this.$factor_1 = $factor;
  }
  protoOf(VecArray$expand$1).invoke_dlyhwg_k$ = function (i) {
    return this.this$0__1.invoke_dlyhwg_k$(i / this.$factor_1 | 0);
  };
  function VecArray() {
  }
  protoOf(VecArray).invoke_dlyhwg_k$ = function (i) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.get_storage_twal4e_k$()[i % this.get_storage_twal4e_k$().length | 0];
  };
  protoOf(VecArray).gets_6318dp_k$ = function (other) {
    var inductionVariable = 0;
    var last = this.get_storage_twal4e_k$().length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.get_storage_twal4e_k$()[i] = other.invoke_dlyhwg_k$(i);
      }
       while (inductionVariable < last);
  };
  protoOf(VecArray).plus_uax9xi_k$ = function (c) {
    return new VecArray$plus$1(this, c);
  };
  protoOf(VecArray).minus_5v1lu8_k$ = function (c) {
    return new VecArray$minus$1(this, c);
  };
  protoOf(VecArray).times_pd69eu_k$ = function (c) {
    return new VecArray$times$1(this, c);
  };
  protoOf(VecArray).div_fagr3l_k$ = function (c) {
    return new VecArray$div$1(this, c);
  };
  protoOf(VecArray).times_422v76_k$ = function (s) {
    return new VecArray$times$2(this, s);
  };
  protoOf(VecArray).div_nq5qk9_k$ = function (s) {
    return new VecArray$div$2(this, s);
  };
  protoOf(VecArray).expand_x6788u_k$ = function (factor) {
    return new VecArray$expand$1(this, factor);
  };
  protoOf(VecArray).plusAssign_jevb_k$ = function (other) {
    var inductionVariable = 0;
    var last = this.get_storage_twal4e_k$().length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.get_storage_twal4e_k$();
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp1_array[i] = tmp1_array[i] + other.invoke_dlyhwg_k$(i);
      }
       while (inductionVariable < last);
  };
  protoOf(VecArray).minusAssign_vxbhv5_k$ = function (other) {
    var inductionVariable = 0;
    var last = this.get_storage_twal4e_k$().length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.get_storage_twal4e_k$();
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp1_array[i] = tmp1_array[i] - other.invoke_dlyhwg_k$(i);
      }
       while (inductionVariable < last);
  };
  protoOf(VecArray).timesAssign_wns4o5_k$ = function (other) {
    var inductionVariable = 0;
    var last = this.get_storage_twal4e_k$().length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.get_storage_twal4e_k$();
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp1_array[i] = tmp1_array[i] * other.invoke_dlyhwg_k$(i);
      }
       while (inductionVariable < last);
  };
  protoOf(VecArray).divAssign_npq1rk_k$ = function (other) {
    var inductionVariable = 0;
    var last = this.get_storage_twal4e_k$().length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.get_storage_twal4e_k$();
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp1_array[i] = tmp1_array[i] / other.invoke_dlyhwg_k$(i);
      }
       while (inductionVariable < last);
  };
  protoOf(VecArray).timesAssign_9pohfx_k$ = function (s) {
    var inductionVariable = 0;
    var last = this.get_storage_twal4e_k$().length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.get_storage_twal4e_k$();
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp1_array[i] = tmp1_array[i] * s;
      }
       while (inductionVariable < last);
  };
  protoOf(VecArray).divAssign_yyq0xk_k$ = function (s) {
    var inductionVariable = 0;
    var last = this.get_storage_twal4e_k$().length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.get_storage_twal4e_k$();
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp1_array[i] = tmp1_array[i] / s;
      }
       while (inductionVariable < last);
  };
  protoOf(VecArray).powAssign_ogdgf_k$ = function (s) {
    var inductionVariable = 0;
    var last = this.get_storage_twal4e_k$().length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.get_storage_twal4e_k$();
        // Inline function 'kotlin.math.pow' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var this_1 = this.get_storage_twal4e_k$()[i];
        // Inline function 'kotlin.js.asDynamic' call
        this_0[i] = Math.pow(this_1, s);
      }
       while (inductionVariable < last);
  };
  protoOf(VecArray).randomize_mk8ijl_k$ = function () {
    var inductionVariable = 0;
    var last = this.get_storage_twal4e_k$().length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.get_storage_twal4e_k$()[i] = Default_getInstance().nextFloat_jqti5l_k$();
      }
       while (inductionVariable < last);
  };
  protoOf(VecArray).clamp_720nvv_k$ = function () {
    var inductionVariable = 0;
    var last = this.get_storage_twal4e_k$().length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        if (this.get_storage_twal4e_k$()[i] < 0.0) {
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'kotlin.js.asDynamic' call
          this.get_storage_twal4e_k$()[i] = 0.0;
        }
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        if (this.get_storage_twal4e_k$()[i] > 1.0) {
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'kotlin.js.asDynamic' call
          this.get_storage_twal4e_k$()[i] = 1.0;
        }
      }
       while (inductionVariable < last);
  };
  //region block: post-declaration
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_0).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf(Mat4).commit$default_i0skkt_k$ = commit$default;
  protoOf(Mat4).getStorageSize_ja4r2y_k$ = getStorageSize;
  protoOf(Mat4).set_aj37lu_k$ = set_0;
  protoOf(Mat4Array).commit$default_i0skkt_k$ = commit$default;
  protoOf(Mat4Array).getStorageSize_ja4r2y_k$ = getStorageSize;
  protoOf(Mat4Array).set_b6plua_k$ = set;
  protoOf(Mat4Array).set_aj37lu_k$ = set_0;
  protoOf(Sampler2D).commit$default_i0skkt_k$ = commit$default;
  protoOf(Sampler2D).getStorageSize_ja4r2y_k$ = getStorageSize_0;
  protoOf(Sampler2D).set_b6plua_k$ = set_1;
  protoOf(Sampler2D).set_aj37lu_k$ = set_2;
  protoOf(Sampler2D).set_k08diu_k$ = set_3;
  protoOf(Sampler3D).commit$default_i0skkt_k$ = commit$default;
  protoOf(Sampler3D).getStorageSize_ja4r2y_k$ = getStorageSize_0;
  protoOf(Sampler3D).set_b6plua_k$ = set_1;
  protoOf(Sampler3D).set_aj37lu_k$ = set_2;
  protoOf(Sampler3D).set_k08diu_k$ = set_3;
  protoOf(SamplerCube).commit$default_i0skkt_k$ = commit$default;
  protoOf(SamplerCube).getStorageSize_ja4r2y_k$ = getStorageSize_0;
  protoOf(SamplerCube).set_b6plua_k$ = set_1;
  protoOf(SamplerCube).set_aj37lu_k$ = set_2;
  protoOf(SamplerCube).set_k08diu_k$ = set_3;
  protoOf(Vec1).commit$default_i0skkt_k$ = commit$default;
  protoOf(Vec1).getStorageSize_ja4r2y_k$ = getStorageSize;
  protoOf(Vec1).set_b6plua_k$ = set;
  protoOf(Vec1).set_aj37lu_k$ = set_0;
  protoOf(VecArray).getStorageSize_ja4r2y_k$ = getStorageSize;
  protoOf(VecArray).set_b6plua_k$ = set;
  protoOf(VecArray).set_aj37lu_k$ = set_0;
  protoOf(VecArray).commit$default_i0skkt_k$ = commit$default;
  protoOf(Vec2).commit$default_i0skkt_k$ = commit$default;
  protoOf(Vec2).getStorageSize_ja4r2y_k$ = getStorageSize;
  protoOf(Vec2).set_b6plua_k$ = set;
  protoOf(Vec2).set_aj37lu_k$ = set_0;
  protoOf(Vec3).commit$default_i0skkt_k$ = commit$default;
  protoOf(Vec3).getStorageSize_ja4r2y_k$ = getStorageSize;
  protoOf(Vec3).set_b6plua_k$ = set;
  protoOf(Vec3).set_aj37lu_k$ = set_0;
  protoOf(Vec4).commit$default_i0skkt_k$ = commit$default;
  protoOf(Vec4).getStorageSize_ja4r2y_k$ = getStorageSize;
  protoOf(Vec4).set_b6plua_k$ = set;
  protoOf(Vec4).set_aj37lu_k$ = set_0;
  //endregion
  main([]);
  return _;
}));

//# sourceMappingURL=kog-server.js.map
