(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json'], this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var protoOf = kotlin_kotlin.$_$.f4;
  var objectMeta = kotlin_kotlin.$_$.e4;
  var setMetadataFor = kotlin_kotlin.$_$.g4;
  var Unit_instance = kotlin_kotlin.$_$.i2;
  var classMeta = kotlin_kotlin.$_$.k3;
  var VOID = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.i4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.r;
  var charSequenceLength = kotlin_kotlin.$_$.i3;
  var charSequenceGet = kotlin_kotlin.$_$.h3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v;
  var equals = kotlin_kotlin.$_$.l3;
  var hashCode = kotlin_kotlin.$_$.q3;
  var joinToString = kotlin_kotlin.$_$.t2;
  var List = kotlin_kotlin.$_$.k2;
  var Map = kotlin_kotlin.$_$.l2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.r5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.e5;
  var getBooleanHashCode = kotlin_kotlin.$_$.n3;
  var getStringHashCode = kotlin_kotlin.$_$.p3;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.y1;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var toLongOrNull = kotlin_kotlin.$_$.u4;
  var toULongOrNull = kotlin_kotlin.$_$.v4;
  var ULong = kotlin_kotlin.$_$.k5;
  var Companion_getInstance = kotlin_kotlin.$_$.g2;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j1;
  var toDoubleOrNull = kotlin_kotlin.$_$.t4;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.s4;
  var isInterface = kotlin_kotlin.$_$.y3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s;
  var lazy_0 = kotlin_kotlin.$_$.s5;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var KProperty1 = kotlin_kotlin.$_$.n4;
  var getPropertyCallableRef = kotlin_kotlin.$_$.o3;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var interfaceMeta = kotlin_kotlin.$_$.r3;
  var toLong = kotlin_kotlin.$_$.h4;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.d1;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.f1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i1;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.k1;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.y;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.a1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.n1;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.p1;
  var captureStack = kotlin_kotlin.$_$.g3;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.j3;
  var coerceAtLeast = kotlin_kotlin.$_$.j4;
  var coerceAtMost = kotlin_kotlin.$_$.k4;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var fillArrayVal = kotlin_kotlin.$_$.m3;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var objectCreate = kotlin_kotlin.$_$.d4;
  var ensureNotNull = kotlin_kotlin.$_$.o5;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var isFinite = kotlin_kotlin.$_$.q5;
  var isFinite_0 = kotlin_kotlin.$_$.p5;
  var toString_0 = kotlin_kotlin.$_$.x;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.f2;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.e2;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.h2;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var setOf = kotlin_kotlin.$_$.w2;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.w;
  var numberToChar = kotlin_kotlin.$_$.b4;
  var enumEntries = kotlin_kotlin.$_$.d3;
  var Enum = kotlin_kotlin.$_$.a5;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.g;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Json, 'Json', classMeta);
  setMetadataFor(Default, 'Default', objectMeta, Json);
  setMetadataFor(JsonBuilder, 'JsonBuilder', classMeta);
  setMetadataFor(JsonImpl, 'JsonImpl', classMeta, Json);
  setMetadataFor(JsonClassDiscriminator, 'JsonClassDiscriminator', classMeta);
  setMetadataFor(JsonConfiguration, 'JsonConfiguration', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JsonElement, 'JsonElement', classMeta, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  setMetadataFor(JsonArray, 'JsonArray', classMeta, JsonElement, [JsonElement, List], VOID, VOID, {0: JsonArraySerializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(JsonPrimitive, 'JsonPrimitive', classMeta, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  setMetadataFor(JsonObject, 'JsonObject', classMeta, JsonElement, [JsonElement, Map], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  setMetadataFor(JsonNull, 'JsonNull', objectMeta, JsonPrimitive, VOID, VOID, VOID, {0: JsonNull_getInstance});
  setMetadataFor(JsonLiteral, 'JsonLiteral', classMeta, JsonPrimitive);
  setMetadataFor(JsonArrayBuilder, 'JsonArrayBuilder', classMeta);
  setMetadataFor(JsonElementSerializer, 'JsonElementSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonArrayDescriptor, 'JsonArrayDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonArraySerializer, 'JsonArraySerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonObjectDescriptor, 'JsonObjectDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonObjectSerializer, 'JsonObjectSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonNullSerializer, 'JsonNullSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonLiteralSerializer, 'JsonLiteralSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(defer$1, VOID, classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonEncoder, 'JsonEncoder', interfaceMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(Composer, 'Composer', classMeta);
  setMetadataFor(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', classMeta, Composer);
  setMetadataFor(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', classMeta, Composer);
  setMetadataFor(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', classMeta, Composer);
  setMetadataFor(JsonException, 'JsonException', classMeta, SerializationException);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, JsonException);
  setMetadataFor(PolymorphismValidator, 'PolymorphismValidator', classMeta, VOID, [SerializersModuleCollector]);
  setMetadataFor(Key, 'Key', classMeta, VOID, VOID, Key);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta, VOID, VOID, DescriptorSchemaCache);
  setMetadataFor(StreamingJsonEncoder, 'StreamingJsonEncoder', classMeta, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
  setMetadataFor(WriteMode, 'WriteMode', classMeta, Enum);
  setMetadataFor(JsonToStringWriter, 'JsonToStringWriter', classMeta, VOID, VOID, JsonToStringWriter);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.sm_1 = configuration;
    this.tm_1 = serializersModule;
    this.um_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).xf = function () {
    return this.tm_1;
  };
  protoOf(Json).vm = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.xm();
    }
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.on();
    return new JsonImpl(conf, builder.nn_1);
  }
  function JsonBuilder(json) {
    this.ym_1 = json.sm_1.pn_1;
    this.zm_1 = json.sm_1.un_1;
    this.an_1 = json.sm_1.qn_1;
    this.bn_1 = json.sm_1.rn_1;
    this.cn_1 = json.sm_1.sn_1;
    this.dn_1 = json.sm_1.tn_1;
    this.en_1 = json.sm_1.vn_1;
    this.fn_1 = json.sm_1.wn_1;
    this.gn_1 = json.sm_1.xn_1;
    this.hn_1 = json.sm_1.yn_1;
    this.in_1 = json.sm_1.zn_1;
    this.jn_1 = json.sm_1.ao_1;
    this.kn_1 = json.sm_1.bo_1;
    this.ln_1 = json.sm_1.co_1;
    this.mn_1 = json.sm_1.do_1;
    this.nn_1 = json.xf();
  }
  protoOf(JsonBuilder).on = function () {
    if (this.gn_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.hn_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.dn_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.en_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    } else if (!(this.en_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = this.en_1;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(indexedObject)) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          if (!(((element === _Char___init__impl__6a9atx(32) ? true : element === _Char___init__impl__6a9atx(9)) ? true : element === _Char___init__impl__6a9atx(13)) ? true : element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      var allWhitespaces = tmp$ret$3;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.en_1;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return new JsonConfiguration(this.ym_1, this.an_1, this.bn_1, this.cn_1, this.dn_1, this.zm_1, this.en_1, this.fn_1, this.gn_1, this.hn_1, this.in_1, this.jn_1, this.kn_1, this.ln_1, this.mn_1);
  };
  function validateConfiguration($this) {
    if (equals($this.xf(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.sm_1.xn_1, $this.sm_1.yn_1);
    $this.xf().em(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    this.pn_1 = encodeDefaults;
    this.qn_1 = ignoreUnknownKeys;
    this.rn_1 = isLenient;
    this.sn_1 = allowStructuredMapKeys;
    this.tn_1 = prettyPrint;
    this.un_1 = explicitNulls;
    this.vn_1 = prettyPrintIndent;
    this.wn_1 = coerceInputValues;
    this.xn_1 = useArrayPolymorphism;
    this.yn_1 = classDiscriminator;
    this.zn_1 = allowSpecialFloatingPointValues;
    this.ao_1 = useAlternativeNames;
    this.bo_1 = namingStrategy;
    this.co_1 = decodeEnumsCaseInsensitive;
    this.do_1 = allowTrailingComma;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.pn_1 + ', ignoreUnknownKeys=' + this.qn_1 + ', isLenient=' + this.rn_1 + ', ' + ('allowStructuredMapKeys=' + this.sn_1 + ', prettyPrint=' + this.tn_1 + ', explicitNulls=' + this.un_1 + ', ') + ("prettyPrintIndent='" + this.vn_1 + "', coerceInputValues=" + this.wn_1 + ', useArrayPolymorphism=' + this.xn_1 + ', ') + ("classDiscriminator='" + this.yn_1 + "', allowSpecialFloatingPointValues=" + this.zn_1 + ', useAlternativeNames=' + this.ao_1 + ', ') + ('namingStrategy=' + this.bo_1 + ', decodeEnumsCaseInsensitive=' + this.co_1 + ', allowTrailingComma=' + this.do_1 + ')');
  };
  function get_jsonUnquotedLiteralDescriptor() {
    _init_properties_JsonElement_kt__7cbdc2();
    return jsonUnquotedLiteralDescriptor;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_3() {
    return Companion_instance;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.eo_1 = content;
  }
  protoOf(JsonArray).n = function () {
    return this.eo_1.n();
  };
  protoOf(JsonArray).fo = function (elements) {
    return this.eo_1.q(elements);
  };
  protoOf(JsonArray).q = function (elements) {
    return this.fo(elements);
  };
  protoOf(JsonArray).x = function (index) {
    return this.eo_1.x(index);
  };
  protoOf(JsonArray).r = function () {
    return this.eo_1.r();
  };
  protoOf(JsonArray).o = function () {
    return this.eo_1.o();
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.eo_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.eo_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.eo_1, ',', '[', ']');
  };
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonElement() {
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.go();
  };
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonObject() {
  }
  function JsonNull$_anonymous__enib48() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.ho_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.io_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
  }
  protoOf(JsonNull).go = function () {
    return this.ho_1;
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.jo_1 = isString;
    this.ko_1 = coerceToInlineType;
    this.lo_1 = toString(body);
    if (!(this.ko_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.ko_1.pd()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).go = function () {
    return this.lo_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.jo_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.lo_1);
      tmp = this_0.toString();
    } else {
      tmp = this.lo_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.jo_1 === other.jo_1))
      return false;
    if (!(this.lo_1 === other.lo_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.jo_1);
    result = imul(31, result) + getStringHashCode(this.lo_1) | 0;
    return result;
  };
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonArrayBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.mo_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonArrayBuilder).no = function (element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.mo_1.l(element);
    return true;
  };
  protoOf(JsonArrayBuilder).on = function () {
    return new JsonArray(this.mo_1);
  };
  function add(_this__u8e3s4, value) {
    return _this__u8e3s4.no(JsonPrimitive_0(value));
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.ge('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.ge('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.ge('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.ge('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.ge('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().oo_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().po_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().qo_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().ro_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().so_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.to_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).dd = function () {
    return this.to_1;
  };
  protoOf(JsonElementSerializer).uo = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.uf(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.uf(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.uf(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  protoOf(JsonElementSerializer).ed = function (encoder, value) {
    return this.uo(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.vo_1 = ListSerializer(JsonElementSerializer_getInstance()).dd();
    this.wo_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).rd = function () {
    return this.vo_1.rd();
  };
  protoOf(JsonArrayDescriptor).qd = function () {
    return this.vo_1.qd();
  };
  protoOf(JsonArrayDescriptor).pd = function () {
    return this.vo_1.pd();
  };
  protoOf(JsonArrayDescriptor).hd = function () {
    return this.vo_1.hd();
  };
  protoOf(JsonArrayDescriptor).od = function () {
    return this.vo_1.od();
  };
  protoOf(JsonArrayDescriptor).td = function (index) {
    return this.vo_1.td(index);
  };
  protoOf(JsonArrayDescriptor).sd = function (index) {
    return this.vo_1.sd(index);
  };
  protoOf(JsonArrayDescriptor).nd = function () {
    return this.wo_1;
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.so_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).dd = function () {
    return this.so_1;
  };
  protoOf(JsonArraySerializer).xo = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).ed(encoder, value);
  };
  protoOf(JsonArraySerializer).ed = function (encoder, value) {
    return this.xo(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.oo_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).dd = function () {
    return this.oo_1;
  };
  protoOf(JsonPrimitiveSerializer).yo = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.uf(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.uf(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).ed = function (encoder, value) {
    return this.yo(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.zo_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).dd();
    this.ap_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).rd = function () {
    return this.zo_1.rd();
  };
  protoOf(JsonObjectDescriptor).qd = function () {
    return this.zo_1.qd();
  };
  protoOf(JsonObjectDescriptor).pd = function () {
    return this.zo_1.pd();
  };
  protoOf(JsonObjectDescriptor).hd = function () {
    return this.zo_1.hd();
  };
  protoOf(JsonObjectDescriptor).od = function () {
    return this.zo_1.od();
  };
  protoOf(JsonObjectDescriptor).td = function (index) {
    return this.zo_1.td(index);
  };
  protoOf(JsonObjectDescriptor).sd = function (index) {
    return this.zo_1.sd(index);
  };
  protoOf(JsonObjectDescriptor).nd = function () {
    return this.ap_1;
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.ro_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).dd = function () {
    return this.ro_1;
  };
  protoOf(JsonObjectSerializer).bp = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).ed(encoder, value);
  };
  protoOf(JsonObjectSerializer).ed = function (encoder, value) {
    return this.bp(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.po_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).dd = function () {
    return this.po_1;
  };
  protoOf(JsonNullSerializer).cp = function (encoder, value) {
    verify(encoder);
    encoder.ye();
  };
  protoOf(JsonNullSerializer).ed = function (encoder, value) {
    return this.cp(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.qo_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).dd = function () {
    return this.qo_1;
  };
  protoOf(JsonLiteralSerializer).dp = function (encoder, value) {
    verify(encoder);
    if (value.jo_1) {
      return encoder.hf(value.lo_1);
    }
    if (!(value.ko_1 == null)) {
      return encoder.if(value.ko_1).hf(value.lo_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.lo_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.df(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.lo_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).lc_1;
      var tmp_1 = encoder.if(serializer_0(Companion_getInstance()).dd());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.df(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.lo_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.ff(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.lo_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.ze(tmp3_safe_receiver);
    }
    encoder.hf(value.lo_1);
  };
  protoOf(JsonLiteralSerializer).ed = function (encoder, value) {
    return this.dp(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.ep_1;
    original$factory();
    return this_0.c3();
  }
  function defer$1($deferred) {
    this.ep_1 = lazy_0($deferred);
  }
  protoOf(defer$1).nd = function () {
    return _get_original__l7ku1m(this).nd();
  };
  protoOf(defer$1).od = function () {
    return _get_original__l7ku1m(this).od();
  };
  protoOf(defer$1).qd = function () {
    return _get_original__l7ku1m(this).qd();
  };
  protoOf(defer$1).sd = function (index) {
    return _get_original__l7ku1m(this).sd(index);
  };
  protoOf(defer$1).td = function (index) {
    return _get_original__l7ku1m(this).td(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.hp_1 = writer;
    this.ip_1 = true;
  }
  protoOf(Composer).jp = function () {
    this.ip_1 = true;
  };
  protoOf(Composer).kp = function () {
    return Unit_instance;
  };
  protoOf(Composer).lp = function () {
    this.ip_1 = false;
  };
  protoOf(Composer).mp = function () {
    return Unit_instance;
  };
  protoOf(Composer).np = function (v) {
    return this.hp_1.op(v);
  };
  protoOf(Composer).pp = function (v) {
    return this.hp_1.qp(v);
  };
  protoOf(Composer).rp = function (v) {
    return this.hp_1.qp(v.toString());
  };
  protoOf(Composer).sp = function (v) {
    return this.hp_1.qp(v.toString());
  };
  protoOf(Composer).tp = function (v) {
    return this.hp_1.up(toLong(v));
  };
  protoOf(Composer).vp = function (v) {
    return this.hp_1.up(toLong(v));
  };
  protoOf(Composer).wp = function (v) {
    return this.hp_1.up(toLong(v));
  };
  protoOf(Composer).xp = function (v) {
    return this.hp_1.up(v);
  };
  protoOf(Composer).yp = function (v) {
    return this.hp_1.qp(v.toString());
  };
  protoOf(Composer).zp = function (value) {
    return this.hp_1.aq(value);
  };
  function Composer_0(sb, json) {
    return json.sm_1.tn_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.dq_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).wp = function (v) {
    if (this.dq_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.zp(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.pp(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).xp = function (v) {
    if (this.dq_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.zp(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.pp(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).tp = function (v) {
    if (this.dq_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.zp(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.pp(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).vp = function (v) {
    if (this.dq_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.zp(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.pp(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.gq_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).zp = function (value) {
    if (this.gq_1) {
      protoOf(Composer).zp.call(this, value);
    } else {
      protoOf(Composer).pp.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.jq_1 = json;
    this.kq_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).jp = function () {
    this.ip_1 = true;
    this.kq_1 = this.kq_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).kp = function () {
    this.kq_1 = this.kq_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).lp = function () {
    this.ip_1 = false;
    this.pp('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.kq_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.pp(this.jq_1.sm_1.vn_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).mp = function () {
    this.np(_Char___init__impl__6a9atx(32));
  };
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.nd() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.od() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    // Inline function 'kotlin.text.substring' call
    var startIndex = coerceAtLeast(start_0, 0);
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, startIndex, endIndex_0)) + suffix;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.sd(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.od(), CLASS_getInstance()) ? json.sm_1.bo_1 : null;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.mq(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.qd();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.sd(tmp_2);
        tmp_1[tmp_2] = $strategy.nq($this_serializationNamesIndices, tmp_2, baseName);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().n();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.uf(serializer, value);
  }
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.rd().o();
    while (tmp0_iterator.v()) {
      var annotation = tmp0_iterator.w();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.wq_1;
    }
    return json.sm_1.yn_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.dd()).p(classDiscriminator)) {
      var baseName = serializer.dd().nd();
      var actualName = actualSerializer.dd().nd();
      // Inline function 'kotlin.error' call
      var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.od();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.d5() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.xq_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.d5() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.qd();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.sd(i);
        if (name === $this.yq_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.xq_1 = useArrayPolymorphism;
    this.yq_1 = discriminator;
  }
  protoOf(PolymorphismValidator).mm = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).pm = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.dd();
    checkKind_0(this, descriptor, actualClass);
    if (!this.xq_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).qm = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).rm = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.lq_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).zq = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.lq_1;
    var value_0 = this_0.s1(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.m1(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var this_1 = tmp;
    var key_0 = key instanceof Key ? key : THROW_CCE();
    var value_1 = !(value == null) ? value : THROW_CCE();
    this_1.m1(key_0, value_1);
  };
  protoOf(DescriptorSchemaCache).mq = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.ar(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.zq(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).ar = function (descriptor, key) {
    var tmp0_safe_receiver = this.lq_1.s1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.s1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.oq_1.lp();
    $this.hf(ensureNotNull($this.vq_1));
    $this.oq_1.np(get_COLON());
    $this.oq_1.mp();
    $this.hf(descriptor.nd());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.oq_1 = composer;
    this.pq_1 = json;
    this.qq_1 = mode;
    this.rq_1 = modeReuseCache;
    this.sq_1 = this.pq_1.xf();
    this.tq_1 = this.pq_1.sm_1;
    this.uq_1 = false;
    this.vq_1 = null;
    var i = this.qq_1.u6_1;
    if (!(this.rq_1 == null)) {
      if (!(this.rq_1[i] === null) ? true : !(this.rq_1[i] === this)) {
        this.rq_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).fp = function () {
    return this.pq_1;
  };
  protoOf(StreamingJsonEncoder).xf = function () {
    return this.sq_1;
  };
  protoOf(StreamingJsonEncoder).gp = function (element) {
    this.uf(JsonElementSerializer_getInstance(), element);
  };
  protoOf(StreamingJsonEncoder).ag = function (descriptor, index) {
    return this.tq_1.pn_1;
  };
  protoOf(StreamingJsonEncoder).uf = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.fp().sm_1.xn_1;
      }
      if (tmp) {
        serializer.ed(this, value);
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.dd(), this.fp());
      var actualSerializer = findPolymorphicSerializer(casted, this, !(value == null) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.dd().od());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.vq_1 = baseClassDiscriminator;
      actualSerializer.ed(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).ue = function (descriptor) {
    var newMode = switchMode(this.pq_1, descriptor);
    if (!(newMode.dr_1 === get_INVALID())) {
      this.oq_1.np(newMode.dr_1);
      this.oq_1.jp();
    }
    if (!(this.vq_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.vq_1 = null;
    }
    if (this.qq_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.rq_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.u6_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.oq_1, this.pq_1, newMode, this.rq_1) : tmp1_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).ve = function (descriptor) {
    if (!(this.qq_1.er_1 === get_INVALID())) {
      this.oq_1.kp();
      this.oq_1.lp();
      this.oq_1.np(this.qq_1.er_1);
    }
  };
  protoOf(StreamingJsonEncoder).we = function (descriptor, index) {
    switch (this.qq_1.u6_1) {
      case 1:
        if (!this.oq_1.ip_1) {
          this.oq_1.np(get_COMMA());
        }

        this.oq_1.lp();
        break;
      case 2:
        if (!this.oq_1.ip_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.oq_1.np(get_COMMA());
            this.oq_1.lp();
            tmp_0 = true;
          } else {
            this.oq_1.np(get_COLON());
            this.oq_1.mp();
            tmp_0 = false;
          }
          tmp.uq_1 = tmp_0;
        } else {
          this.uq_1 = true;
          this.oq_1.lp();
        }

        break;
      case 3:
        if (index === 0)
          this.uq_1 = true;
        if (index === 1) {
          this.oq_1.np(get_COMMA());
          this.oq_1.mp();
          this.uq_1 = false;
        }

        break;
      default:
        if (!this.oq_1.ip_1) {
          this.oq_1.np(get_COMMA());
        }

        this.oq_1.lp();
        this.hf(getJsonElementName(descriptor, this.pq_1, index));
        this.oq_1.np(get_COLON());
        this.oq_1.mp();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).vf = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.tq_1.un_1) {
      protoOf(AbstractEncoder).vf.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).if = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.oq_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.oq_1;
      } else {
        tmp_0 = new ComposerForUnsignedNumbers(this.oq_1.hp_1, this.uq_1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.pq_1, this.qq_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.oq_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.oq_1;
      } else {
        tmp_2 = new ComposerForUnquotedLiterals(this.oq_1.hp_1, this.uq_1);
      }
      var tmp$ret$3 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$3, this.pq_1, this.qq_1, null);
    } else {
      tmp = protoOf(AbstractEncoder).if.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).ye = function () {
    this.oq_1.pp(get_NULL());
  };
  protoOf(StreamingJsonEncoder).ze = function (value) {
    if (this.uq_1) {
      this.hf(value.toString());
    } else {
      this.oq_1.yp(value);
    }
  };
  protoOf(StreamingJsonEncoder).af = function (value) {
    if (this.uq_1) {
      this.hf(value.toString());
    } else {
      this.oq_1.tp(value);
    }
  };
  protoOf(StreamingJsonEncoder).bf = function (value) {
    if (this.uq_1) {
      this.hf(value.toString());
    } else {
      this.oq_1.vp(value);
    }
  };
  protoOf(StreamingJsonEncoder).cf = function (value) {
    if (this.uq_1) {
      this.hf(value.toString());
    } else {
      this.oq_1.wp(value);
    }
  };
  protoOf(StreamingJsonEncoder).df = function (value) {
    if (this.uq_1) {
      this.hf(value.toString());
    } else {
      this.oq_1.xp(value);
    }
  };
  protoOf(StreamingJsonEncoder).ef = function (value) {
    if (this.uq_1) {
      this.hf(value.toString());
    } else {
      this.oq_1.rp(value);
    }
    if (!this.tq_1.zn_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.oq_1.hp_1));
    }
  };
  protoOf(StreamingJsonEncoder).ff = function (value) {
    if (this.uq_1) {
      this.hf(value.toString());
    } else {
      this.oq_1.sp(value);
    }
    if (!this.tq_1.zn_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.oq_1.hp_1));
    }
  };
  protoOf(StreamingJsonEncoder).gf = function (value) {
    this.hf(toString_0(value));
  };
  protoOf(StreamingJsonEncoder).hf = function (value) {
    return this.oq_1.zp(value);
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.pd() ? get_unsignedNumberDescriptors().p(_this__u8e3s4) : false;
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.pd() ? equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor()) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).dd(), serializer_0(Companion_getInstance()).dd(), serializer_2(Companion_getInstance_1()).dd(), serializer_3(Companion_getInstance_2()).dd()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.s4(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.j6(value, lastPos, i);
          _this__u8e3s4.r4(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.j6(value, lastPos, value.length);
    } else {
      _this__u8e3s4.r4(value);
    }
    _this__u8e3s4.s4(get_STRING());
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.arrayOfNulls' call
      var this_0 = fillArrayVal(Array(93), null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_0(c1) + toString_0(c2) + toString_0(c3) + toString_0(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      this_7[Char__toInt_impl_vasixd(this_8)] = 34;
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(92);
      this_7[Char__toInt_impl_vasixd(this_9)] = 92;
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(9);
      this_7[Char__toInt_impl_vasixd(this_10)] = 116;
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(8);
      this_7[Char__toInt_impl_vasixd(this_11)] = 98;
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(10);
      this_7[Char__toInt_impl_vasixd(this_12)] = 110;
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(13);
      this_7[Char__toInt_impl_vasixd(this_13)] = 114;
      this_7[12] = 102;
      ESCAPE_MARKERS = this_7;
    }
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  var $ENTRIES;
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.dr_1 = begin;
    this.er_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.od();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.td(0), _this__u8e3s4.xf());
          var keyKind = keyDescriptor.od();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.sm_1.sn_1) {
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.od(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.pd()) {
      tmp = carrierDescriptor(_this__u8e3s4.td(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.um_1;
  }
  function JsonToStringWriter() {
    this.wm_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).up = function (value) {
    this.wm_1.m6(value);
  };
  protoOf(JsonToStringWriter).op = function (char) {
    this.wm_1.s4(char);
  };
  protoOf(JsonToStringWriter).qp = function (text) {
    this.wm_1.r4(text);
  };
  protoOf(JsonToStringWriter).aq = function (text) {
    printQuoted(this.wm_1, text);
  };
  protoOf(JsonToStringWriter).xm = function () {
    this.wm_1.o6();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.wm_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).hd = get_isNullable;
  protoOf(defer$1).pd = get_isInline;
  protoOf(defer$1).rd = get_annotations;
  protoOf(PolymorphismValidator).om = contextual;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  STRING = _Char___init__impl__6a9atx(34);
  COLON = _Char___init__impl__6a9atx(58);
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = JsonArrayBuilder;
  _.$_$.b = JsonEncoder;
  _.$_$.c = Json_0;
  _.$_$.d = add;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
