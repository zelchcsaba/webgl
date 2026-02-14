(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.f4;
  var interfaceMeta = kotlin_kotlin.$_$.r3;
  var setMetadataFor = kotlin_kotlin.$_$.g4;
  var VOID = kotlin_kotlin.$_$.c;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var classMeta = kotlin_kotlin.$_$.k3;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.p;
  var objectCreate = kotlin_kotlin.$_$.d4;
  var captureStack = kotlin_kotlin.$_$.g3;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.q;
  var IllegalArgumentException = kotlin_kotlin.$_$.b5;
  var THROW_CCE = kotlin_kotlin.$_$.e5;
  var isInterface = kotlin_kotlin.$_$.y3;
  var emptyList = kotlin_kotlin.$_$.q2;
  var isBlank = kotlin_kotlin.$_$.p4;
  var toString = kotlin_kotlin.$_$.i4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.r;
  var equals = kotlin_kotlin.$_$.l3;
  var toList = kotlin_kotlin.$_$.a3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.k;
  var Unit_instance = kotlin_kotlin.$_$.i2;
  var toHashSet = kotlin_kotlin.$_$.z2;
  var copyToArray = kotlin_kotlin.$_$.p2;
  var toBooleanArray = kotlin_kotlin.$_$.y2;
  var withIndex = kotlin_kotlin.$_$.c3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.m2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var to = kotlin_kotlin.$_$.t5;
  var toMap = kotlin_kotlin.$_$.b3;
  var lazy = kotlin_kotlin.$_$.s5;
  var contentEquals = kotlin_kotlin.$_$.n2;
  var until = kotlin_kotlin.$_$.l4;
  var joinToString = kotlin_kotlin.$_$.t2;
  var KProperty1 = kotlin_kotlin.$_$.n4;
  var getPropertyCallableRef = kotlin_kotlin.$_$.o3;
  var objectMeta = kotlin_kotlin.$_$.e4;
  var ensureNotNull = kotlin_kotlin.$_$.o5;
  var getStringHashCode = kotlin_kotlin.$_$.p3;
  var Char = kotlin_kotlin.$_$.y4;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.u;
  var Duration = kotlin_kotlin.$_$.x4;
  var hashCode = kotlin_kotlin.$_$.q3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s;
  var Map = kotlin_kotlin.$_$.l2;
  var Collection = kotlin_kotlin.$_$.j2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy_0 = kotlin_kotlin.$_$.r5;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.h;
  var fillArrayVal = kotlin_kotlin.$_$.m3;
  var booleanArray = kotlin_kotlin.$_$.f3;
  var emptyMap = kotlin_kotlin.$_$.r2;
  var contentHashCode = kotlin_kotlin.$_$.o2;
  var Companion_getInstance = kotlin_kotlin.$_$.c2;
  var isCharArray = kotlin_kotlin.$_$.u3;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.u1;
  var isDoubleArray = kotlin_kotlin.$_$.v3;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.v1;
  var isFloatArray = kotlin_kotlin.$_$.w3;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.d2;
  var isLongArray = kotlin_kotlin.$_$.z3;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.g2;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.m1;
  var ULongArray = kotlin_kotlin.$_$.j5;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.l1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.w1;
  var isIntArray = kotlin_kotlin.$_$.x3;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.f2;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.h1;
  var UIntArray = kotlin_kotlin.$_$.h5;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.g1;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.e1;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.x1;
  var isShortArray = kotlin_kotlin.$_$.a4;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.h2;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.r1;
  var UShortArray = kotlin_kotlin.$_$.l5;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.q1;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.o1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.t1;
  var isByteArray = kotlin_kotlin.$_$.t3;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.e2;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.c1;
  var UByteArray = kotlin_kotlin.$_$.f5;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.b1;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.z;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.s1;
  var isBooleanArray = kotlin_kotlin.$_$.s3;
  var Long = kotlin_kotlin.$_$.c5;
  var Unit = kotlin_kotlin.$_$.n5;
  var trimIndent = kotlin_kotlin.$_$.w4;
  var equals_0 = kotlin_kotlin.$_$.o4;
  var charSequenceLength = kotlin_kotlin.$_$.i3;
  var charSequenceGet = kotlin_kotlin.$_$.h3;
  var toString_0 = kotlin_kotlin.$_$.x;
  var titlecase = kotlin_kotlin.$_$.r4;
  var isLowerCase = kotlin_kotlin.$_$.q4;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.a2;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.y1;
  var getKClass = kotlin_kotlin.$_$.b;
  var ULong = kotlin_kotlin.$_$.k5;
  var UInt = kotlin_kotlin.$_$.i5;
  var UShort = kotlin_kotlin.$_$.m5;
  var UByte = kotlin_kotlin.$_$.g5;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.b2;
  var mapOf = kotlin_kotlin.$_$.v2;
  var KClass = kotlin_kotlin.$_$.m4;
  var get_indices = kotlin_kotlin.$_$.s2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.t;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationStrategy, 'SerializationStrategy', interfaceMeta);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, VOID, [SerializationStrategy]);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException, VOID, SerializationException_init_$Create$);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta);
  setMetadataFor(ContextDescriptor, 'ContextDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(elementDescriptors$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(SerialKind, 'SerialKind', classMeta);
  setMetadataFor(ENUM, 'ENUM', objectMeta, SerialKind);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind);
  setMetadataFor(BOOLEAN, 'BOOLEAN', objectMeta, PrimitiveKind);
  setMetadataFor(BYTE, 'BYTE', objectMeta, PrimitiveKind);
  setMetadataFor(CHAR, 'CHAR', objectMeta, PrimitiveKind);
  setMetadataFor(SHORT, 'SHORT', objectMeta, PrimitiveKind);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind);
  setMetadataFor(LONG, 'LONG', objectMeta, PrimitiveKind);
  setMetadataFor(FLOAT, 'FLOAT', objectMeta, PrimitiveKind);
  setMetadataFor(DOUBLE, 'DOUBLE', objectMeta, PrimitiveKind);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind);
  setMetadataFor(MAP, 'MAP', objectMeta, StructureKind);
  setMetadataFor(OBJECT, 'OBJECT', objectMeta, StructureKind);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind);
  setMetadataFor(SEALED, 'SEALED', objectMeta, PolymorphicKind);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.ue(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.ed(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.dd().hd();
    if (isNullabilitySupported) {
      return this.uf(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.ye();
    } else {
      this.yf();
      this.uf(serializer, value);
    }
  }
  setMetadataFor(Encoder, 'Encoder', interfaceMeta);
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  setMetadataFor(CompositeEncoder, 'CompositeEncoder', interfaceMeta);
  setMetadataFor(AbstractEncoder, 'AbstractEncoder', classMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(NothingSerializer_0, 'NothingSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DurationSerializer, 'DurationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(ArrayListClassDesc, 'ArrayListClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(MapLikeDescriptor, 'MapLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(HashMapClassDesc, 'HashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', classMeta, ListLikeDescriptor);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(CollectionLikeSerializer, 'CollectionLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(CollectionSerializer, 'CollectionSerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(ArrayListSerializer, 'ArrayListSerializer', classMeta, CollectionSerializer);
  setMetadataFor(MapLikeSerializer, 'MapLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(HashMapSerializer, 'HashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(LinkedHashMapSerializer, 'LinkedHashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(PrimitiveArraySerializer, 'PrimitiveArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(InlineClassDescriptor, 'InlineClassDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, VOID, [KSerializer]);
  setMetadataFor(InlinePrimitiveDescriptor$1, VOID, classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NoOpEncoder, 'NoOpEncoder', objectMeta, AbstractEncoder);
  setMetadataFor(NothingSerialDescriptor, 'NothingSerialDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(ObjectSerializer, 'ObjectSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(CharArraySerializer_0, 'CharArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(DoubleArraySerializer_0, 'DoubleArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(FloatArraySerializer_0, 'FloatArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(LongArraySerializer_0, 'LongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ULongArraySerializer_0, 'ULongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(IntArraySerializer_0, 'IntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UIntArraySerializer_0, 'UIntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ShortArraySerializer_0, 'ShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UShortArraySerializer_0, 'UShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ByteArraySerializer_0, 'ByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UByteArraySerializer_0, 'UByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(BooleanArraySerializer_0, 'BooleanArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(CharSerializer, 'CharSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DoubleSerializer, 'DoubleSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(FloatSerializer, 'FloatSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LongSerializer, 'LongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ShortSerializer, 'ShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ByteSerializer, 'ByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(BooleanSerializer, 'BooleanSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UnitSerializer, 'UnitSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(ULongSerializer, 'ULongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UIntSerializer, 'UIntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UShortSerializer, 'UShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UByteSerializer, 'UByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(SerializersModule, 'SerializersModule', classMeta);
  setMetadataFor(SerialModuleImpl, 'SerialModuleImpl', classMeta, SerializersModule);
  setMetadataFor(ContextualProvider, 'ContextualProvider', classMeta);
  setMetadataFor(Argless, 'Argless', classMeta, ContextualProvider);
  setMetadataFor(WithTypeArguments, 'WithTypeArguments', classMeta, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.mm(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  setMetadataFor(SerializersModuleCollector, 'SerializersModuleCollector', interfaceMeta);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, VOID, VOID, VOID, 0);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.fd(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.gd());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SealedClassSerializer() {
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.dd().hd()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_0(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ContextDescriptor() {
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.id(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.dd();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.md_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.jd_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv(_this__u8e3s4);
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.vd_1 = $this_elementDescriptors;
    this.ud_1 = $this_elementDescriptors.qd();
  }
  protoOf(elementDescriptors$1$1).v = function () {
    return this.ud_1 > 0;
  };
  protoOf(elementDescriptors$1$1).w = function () {
    var tmp = this.vd_1.qd();
    var tmp1 = this.ud_1;
    this.ud_1 = tmp1 - 1 | 0;
    return this.vd_1.td(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.wd_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv).o = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1$1(this.wd_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(kind, CLASS_getInstance())) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.ae_1.n(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.xd_1 = serialName;
    this.yd_1 = false;
    this.zd_1 = emptyList();
    this.ae_1 = ArrayList_init_$Create$();
    this.be_1 = HashSet_init_$Create$();
    this.ce_1 = ArrayList_init_$Create$();
    this.de_1 = ArrayList_init_$Create$();
    this.ee_1 = ArrayList_init_$Create$();
  }
  protoOf(ClassSerialDescriptorBuilder).fe = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.be_1.l(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.xd_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.ae_1.l(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.ce_1.l(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.de_1.l(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.ee_1.l(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).ge = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.fe(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.fe.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.se_1;
    _hashCode$factory();
    return this_0.c3();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.re_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.sd(it) + ': ' + this$0.td(it).nd();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.he_1 = serialName;
    this.ie_1 = kind;
    this.je_1 = elementsCount;
    this.ke_1 = builder.zd_1;
    this.le_1 = toHashSet(builder.ae_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.ae_1;
    tmp.me_1 = copyToArray(this_0);
    this.ne_1 = compactArray(builder.ce_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.de_1;
    tmp_0.oe_1 = copyToArray(this_1);
    this.pe_1 = toBooleanArray(builder.ee_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.me_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.o();
    while (tmp0_iterator.v()) {
      var item = tmp0_iterator.w();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.c9_1, item.b9_1);
      destination.l(tmp$ret$2);
    }
    tmp_1.qe_1 = toMap(destination);
    this.re_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.se_1 = lazy(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).nd = function () {
    return this.he_1;
  };
  protoOf(SerialDescriptorImpl).od = function () {
    return this.ie_1;
  };
  protoOf(SerialDescriptorImpl).qd = function () {
    return this.je_1;
  };
  protoOf(SerialDescriptorImpl).rd = function () {
    return this.ke_1;
  };
  protoOf(SerialDescriptorImpl).te = function () {
    return this.le_1;
  };
  protoOf(SerialDescriptorImpl).sd = function (index) {
    return getChecked(this.me_1, index);
  };
  protoOf(SerialDescriptorImpl).td = function (index) {
    return getChecked(this.ne_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.nd() === other.nd())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.re_1, other.re_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.qd() === other.qd())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.qd();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.td(index).nd() === other.td(index).nd())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.td(index).od(), other.td(index).od())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.je_1);
    var tmp_0 = this.he_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).d5());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).ue = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).ve = function (descriptor) {
  };
  protoOf(AbstractEncoder).we = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).xe = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  protoOf(AbstractEncoder).ye = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).ze = function (value) {
    return this.xe(value);
  };
  protoOf(AbstractEncoder).af = function (value) {
    return this.xe(value);
  };
  protoOf(AbstractEncoder).bf = function (value) {
    return this.xe(value);
  };
  protoOf(AbstractEncoder).cf = function (value) {
    return this.xe(value);
  };
  protoOf(AbstractEncoder).df = function (value) {
    return this.xe(value);
  };
  protoOf(AbstractEncoder).ef = function (value) {
    return this.xe(value);
  };
  protoOf(AbstractEncoder).ff = function (value) {
    return this.xe(value);
  };
  protoOf(AbstractEncoder).gf = function (value) {
    return this.xe(new Char(value));
  };
  protoOf(AbstractEncoder).hf = function (value) {
    return this.xe(value);
  };
  protoOf(AbstractEncoder).if = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).jf = function (descriptor, index, value) {
    if (this.we(descriptor, index)) {
      this.ze(value);
    }
  };
  protoOf(AbstractEncoder).kf = function (descriptor, index, value) {
    if (this.we(descriptor, index)) {
      this.af(value);
    }
  };
  protoOf(AbstractEncoder).lf = function (descriptor, index, value) {
    if (this.we(descriptor, index)) {
      this.bf(value);
    }
  };
  protoOf(AbstractEncoder).mf = function (descriptor, index, value) {
    if (this.we(descriptor, index)) {
      this.cf(value);
    }
  };
  protoOf(AbstractEncoder).nf = function (descriptor, index, value) {
    if (this.we(descriptor, index)) {
      this.df(value);
    }
  };
  protoOf(AbstractEncoder).of = function (descriptor, index, value) {
    if (this.we(descriptor, index)) {
      this.ef(value);
    }
  };
  protoOf(AbstractEncoder).pf = function (descriptor, index, value) {
    if (this.we(descriptor, index)) {
      this.ff(value);
    }
  };
  protoOf(AbstractEncoder).qf = function (descriptor, index, value) {
    if (this.we(descriptor, index)) {
      this.gf(value);
    }
  };
  protoOf(AbstractEncoder).rf = function (descriptor, index, value) {
    if (this.we(descriptor, index)) {
      this.hf(value);
    }
  };
  protoOf(AbstractEncoder).sf = function (descriptor, index) {
    return this.we(descriptor, index) ? this.if(descriptor.td(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).tf = function (descriptor, index, serializer, value) {
    if (this.we(descriptor, index)) {
      this.uf(serializer, value);
    }
  };
  protoOf(AbstractEncoder).vf = function (descriptor, index, serializer, value) {
    if (this.we(descriptor, index)) {
      this.wf(serializer, value);
    }
  };
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).fd = function (encoder, value) {
    return encoder.xf().bg(this.gd(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.d5();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.d5() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.d5() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.cg_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).dd = function () {
    return this.cg_1;
  };
  protoOf(NothingSerializer_0).dg = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).ed = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.dg(encoder, tmp);
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.eg_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).dd = function () {
    return this.eg_1;
  };
  protoOf(DurationSerializer).fg = function (encoder, value) {
    encoder.hf(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).ed = function (encoder, value) {
    return this.fg(encoder, value instanceof Duration ? value.gb_1 : THROW_CCE());
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).nd = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.ig_1 = elementDescriptor;
    this.jg_1 = 1;
  }
  protoOf(ListLikeDescriptor).od = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).qd = function () {
    return this.jg_1;
  };
  protoOf(ListLikeDescriptor).sd = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).td = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.nd() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.ig_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.ig_1, other.ig_1) ? this.nd() === other.nd() : false)
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.ig_1), 31) + getStringHashCode(this.nd()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.nd() + '(' + this.ig_1 + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.kg_1 = serialName;
    this.lg_1 = keyDescriptor;
    this.mg_1 = valueDescriptor;
    this.ng_1 = 2;
  }
  protoOf(MapLikeDescriptor).nd = function () {
    return this.kg_1;
  };
  protoOf(MapLikeDescriptor).od = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).qd = function () {
    return this.ng_1;
  };
  protoOf(MapLikeDescriptor).sd = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).td = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.nd() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.lg_1;
        break;
      case 1:
        tmp = this.mg_1;
        break;
      default:
        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.nd() === other.nd()))
      return false;
    if (!equals(this.lg_1, other.lg_1))
      return false;
    if (!equals(this.mg_1, other.mg_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.nd());
    result = imul(31, result) + hashCode(this.lg_1) | 0;
    result = imul(31, result) + hashCode(this.mg_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.nd() + '(' + this.lg_1 + ', ' + this.mg_1 + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.qg_1 = primitive.nd() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).nd = function () {
    return this.qg_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.sg_1 = new ArrayListClassDesc(element.dd());
  }
  protoOf(ArrayListSerializer).dd = function () {
    return this.sg_1;
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.ah_1 = new HashMapClassDesc(kSerializer.dd(), vSerializer.dd());
  }
  protoOf(HashMapSerializer).dd = function () {
    return this.ah_1;
  };
  protoOf(HashMapSerializer).bh = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(HashMapSerializer).ch = function (_this__u8e3s4) {
    return this.bh((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).dh = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.t1().o();
  };
  protoOf(HashMapSerializer).eh = function (_this__u8e3s4) {
    return this.dh((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.jh_1 = new LinkedHashMapClassDesc(kSerializer.dd(), vSerializer.dd());
  }
  protoOf(LinkedHashMapSerializer).dd = function () {
    return this.jh_1;
  };
  protoOf(LinkedHashMapSerializer).bh = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(LinkedHashMapSerializer).ch = function (_this__u8e3s4) {
    return this.bh((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).dh = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.t1().o();
  };
  protoOf(LinkedHashMapSerializer).eh = function (_this__u8e3s4) {
    return this.dh((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).ug = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(CollectionSerializer).ch = function (_this__u8e3s4) {
    return this.ug((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).vg = function (_this__u8e3s4) {
    return _this__u8e3s4.o();
  };
  protoOf(CollectionSerializer).eh = function (_this__u8e3s4) {
    return this.vg((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.fh_1 = keySerializer;
    this.gh_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).xg = function (encoder, value) {
    var size = this.ch(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.dd();
    var composite = encoder.zf(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.eh(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = iterator;
    while (tmp0_iterator.v()) {
      var element = tmp0_iterator.w();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.y2();
      // Inline function 'kotlin.collections.component2' call
      var v = element.c3();
      var tmp = this.dd();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.tf(tmp, tmp0, this.fh_1, k);
      var tmp_0 = this.dd();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.tf(tmp_0, tmp1, this.gh_1, v);
    }
    composite.ve(descriptor);
  };
  protoOf(MapLikeSerializer).ed = function (encoder, value) {
    return this.xg(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.wg_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).xg = function (encoder, value) {
    var size = this.ch(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.dd();
    var composite = encoder.zf(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.eh(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.tf(this.dd(), index, this.wg_1, iterator.w());
      }
       while (inductionVariable < size);
    composite.ve(descriptor);
  };
  protoOf(CollectionLikeSerializer).ed = function (encoder, value) {
    return this.xg(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function AbstractCollectionSerializer() {
  }
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.lh_1 = new PrimitiveArrayDescriptor(primitiveSerializer.dd());
  }
  protoOf(PrimitiveArraySerializer).dd = function () {
    return this.lh_1;
  };
  protoOf(PrimitiveArraySerializer).mh = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).eh = function (_this__u8e3s4) {
    return this.mh((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).oh = function (encoder, value) {
    var size = this.ch(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.lh_1;
    var composite = encoder.zf(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.nh(composite, value, size);
    composite.ve(descriptor);
  };
  protoOf(PrimitiveArraySerializer).ed = function (encoder, value) {
    return this.oh(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).xg = function (encoder, value) {
    return this.oh(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.bi_1 = true;
  }
  protoOf(InlineClassDescriptor).pd = function () {
    return this.bi_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.nd() === other.nd())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.bi_1 ? contentEquals(this.oi(), other.oi()) : false)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.qd() === other.qd())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.qd();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.td(index).nd() === other.td(index).nd())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.td(index).od(), other.td(index).od())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.qi_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).ri = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.qi_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).dd = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).ed = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.ti_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).xf = function () {
    return this.ti_1;
  };
  protoOf(NoOpEncoder).xe = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ye = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ze = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).af = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).bf = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).cf = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).df = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ef = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ff = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).gf = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).hf = function (value) {
    return Unit_instance;
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.ui_1 = OBJECT_getInstance();
    this.vi_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).od = function () {
    return this.ui_1;
  };
  protoOf(NothingSerialDescriptor).nd = function () {
    return this.vi_1;
  };
  protoOf(NothingSerialDescriptor).qd = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).sd = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).td = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.vi_1) + imul(31, this.ui_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.wi_1 = serializer;
    this.xi_1 = new SerialDescriptorForNullable(this.wi_1.dd());
  }
  protoOf(NullableSerializer).dd = function () {
    return this.xi_1;
  };
  protoOf(NullableSerializer).yi = function (encoder, value) {
    if (!(value == null)) {
      encoder.yf();
      encoder.uf(this.wi_1, value);
    } else {
      encoder.ye();
    }
  };
  protoOf(NullableSerializer).ed = function (encoder, value) {
    return this.yi(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.wi_1, other.wi_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.wi_1);
  };
  function SerialDescriptorForNullable(original) {
    this.jd_1 = original;
    this.kd_1 = this.jd_1.nd() + '?';
    this.ld_1 = cachedSerialNames(this.jd_1);
  }
  protoOf(SerialDescriptorForNullable).rd = function () {
    return this.jd_1.rd();
  };
  protoOf(SerialDescriptorForNullable).qd = function () {
    return this.jd_1.qd();
  };
  protoOf(SerialDescriptorForNullable).pd = function () {
    return this.jd_1.pd();
  };
  protoOf(SerialDescriptorForNullable).od = function () {
    return this.jd_1.od();
  };
  protoOf(SerialDescriptorForNullable).td = function (index) {
    return this.jd_1.td(index);
  };
  protoOf(SerialDescriptorForNullable).sd = function (index) {
    return this.jd_1.sd(index);
  };
  protoOf(SerialDescriptorForNullable).nd = function () {
    return this.kd_1;
  };
  protoOf(SerialDescriptorForNullable).te = function () {
    return this.ld_1;
  };
  protoOf(SerialDescriptorForNullable).hd = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.jd_1, other.jd_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return '' + this.jd_1 + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.jd_1), 31);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.zd_1 = this$0.aj_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.zi_1 = objectInstance;
    this.aj_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.bj_1 = lazy_0(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).dd = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.bj_1;
    descriptor$factory();
    return this_0.c3();
  };
  protoOf(ObjectSerializer).cj = function (encoder, value) {
    encoder.ue(this.dd()).ve(this.dd());
  };
  protoOf(ObjectSerializer).ed = function (encoder, value) {
    return this.cj(encoder, !(value == null) ? value : THROW_CCE());
  };
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.dd();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.te();
    var result = HashSet_init_$Create$_0(_this__u8e3s4.qd());
    var inductionVariable = 0;
    var last = _this__u8e3s4.qd();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.sd(i);
        result.l(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4 == null ? true : _this__u8e3s4.r())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.li_1;
    childSerializers$factory();
    return this_0.c3();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.ni_1;
    _hashCode$factory_0();
    return this_0.c3();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.gi_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.gi_1[i];
        indices.m1(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.di_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ri();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.di_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.si();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          var tmp$ret$0 = item.dd();
          destination.l(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.oi());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.sd(i) + ': ' + this$0.td(i).nd();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.ci_1 = serialName;
    this.di_1 = generatedSerializer;
    this.ei_1 = elementsCount;
    this.fi_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.ei_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.gi_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.ei_1;
    tmp_3.hi_1 = fillArrayVal(Array(size), null);
    this.ii_1 = null;
    this.ji_1 = booleanArray(this.ei_1);
    this.ki_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.li_1 = lazy_0(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.mi_1 = lazy_0(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.ni_1 = lazy_0(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).nd = function () {
    return this.ci_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).qd = function () {
    return this.ei_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).od = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).rd = function () {
    var tmp0_elvis_lhs = this.ii_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).te = function () {
    return this.ki_1.k1();
  };
  protoOf(PluginGeneratedSerialDescriptor).oi = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mi_1;
    typeParameterDescriptors$factory();
    return this_0.c3();
  };
  protoOf(PluginGeneratedSerialDescriptor).pi = function (name, isOptional) {
    this.fi_1 = this.fi_1 + 1 | 0;
    this.gi_1[this.fi_1] = name;
    this.ji_1[this.fi_1] = isOptional;
    this.hi_1[this.fi_1] = null;
    if (this.fi_1 === (this.ei_1 - 1 | 0)) {
      this.ki_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).td = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).dd();
  };
  protoOf(PluginGeneratedSerialDescriptor).sd = function (index) {
    return getChecked(this.gi_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.nd() === other.nd())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.oi(), other.oi())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.qd() === other.qd())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.qd();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.td(index).nd() === other.td(index).nd())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.td(index).od(), other.td(index).od())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.ei_1);
    var tmp_0 = this.nd() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.nd());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.o();
    while (tmp0_iterator.v()) {
      var element = tmp0_iterator.w();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.nd();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.o();
    while (tmp0_iterator_0.v()) {
      var element_0 = tmp0_iterator_0.w();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.od();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.oi();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_0(Companion_getInstance()));
  }
  protoOf(CharArraySerializer_0).fj = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).ch = function (_this__u8e3s4) {
    return this.fj((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).gj = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.qf(this.lh_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).nh = function (encoder, content, size) {
    return this.gj(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).jj = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).ch = function (_this__u8e3s4) {
    return this.jj((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).kj = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.pf(this.lh_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).nh = function (encoder, content, size) {
    return this.kj(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).nj = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).ch = function (_this__u8e3s4) {
    return this.nj((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).oj = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.of(this.lh_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).nh = function (encoder, content, size) {
    return this.oj(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_0()));
  }
  protoOf(LongArraySerializer_0).rj = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).ch = function (_this__u8e3s4) {
    return this.rj((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).sj = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.nf(this.lh_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).nh = function (encoder, content, size) {
    return this.sj(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_1()));
  }
  protoOf(ULongArraySerializer_0).vj = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).ch = function (_this__u8e3s4) {
    return this.vj(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.qc_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).wj = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.sf(this.lh_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.df(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).nh = function (encoder, content, size) {
    return this.wj(encoder, content instanceof ULongArray ? content.qc_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).zj = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).ch = function (_this__u8e3s4) {
    return this.zj((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).ak = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.mf(this.lh_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).nh = function (encoder, content, size) {
    return this.ak(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_2()));
  }
  protoOf(UIntArraySerializer_0).dk = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).ch = function (_this__u8e3s4) {
    return this.dk(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.fc_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).ek = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.sf(this.lh_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.cf(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).nh = function (encoder, content, size) {
    return this.ek(encoder, content instanceof UIntArray ? content.fc_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).hk = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).ch = function (_this__u8e3s4) {
    return this.hk((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).ik = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.lf(this.lh_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).nh = function (encoder, content, size) {
    return this.ik(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(Companion_getInstance_3()));
  }
  protoOf(UShortArraySerializer_0).lk = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).ch = function (_this__u8e3s4) {
    return this.lk(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.bd_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).mk = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.sf(this.lh_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.bf(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).nh = function (encoder, content, size) {
    return this.mk(encoder, content instanceof UShortArray ? content.bd_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).pk = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).ch = function (_this__u8e3s4) {
    return this.pk((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).qk = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.kf(this.lh_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).nh = function (encoder, content, size) {
    return this.qk(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(Companion_getInstance_4()));
  }
  protoOf(UByteArraySerializer_0).tk = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).ch = function (_this__u8e3s4) {
    return this.tk(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.ub_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).uk = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.sf(this.lh_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.af(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).nh = function (encoder, content, size) {
    return this.uk(encoder, content instanceof UByteArray ? content.ub_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).xk = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).ch = function (_this__u8e3s4) {
    return this.xk((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).yk = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.jf(this.lh_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).nh = function (encoder, content, size) {
    return this.yk(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.zk_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).dd = function () {
    return this.zk_1;
  };
  protoOf(StringSerializer).al = function (encoder, value) {
    return encoder.hf(value);
  };
  protoOf(StringSerializer).ed = function (encoder, value) {
    return this.al(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.bl_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).dd = function () {
    return this.bl_1;
  };
  protoOf(CharSerializer).cl = function (encoder, value) {
    return encoder.gf(value);
  };
  protoOf(CharSerializer).ed = function (encoder, value) {
    return this.cl(encoder, value instanceof Char ? value.d7_1 : THROW_CCE());
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.dl_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).dd = function () {
    return this.dl_1;
  };
  protoOf(DoubleSerializer).el = function (encoder, value) {
    return encoder.ff(value);
  };
  protoOf(DoubleSerializer).ed = function (encoder, value) {
    return this.el(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.fl_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).dd = function () {
    return this.fl_1;
  };
  protoOf(FloatSerializer).gl = function (encoder, value) {
    return encoder.ef(value);
  };
  protoOf(FloatSerializer).ed = function (encoder, value) {
    return this.gl(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.hl_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).dd = function () {
    return this.hl_1;
  };
  protoOf(LongSerializer).il = function (encoder, value) {
    return encoder.df(value);
  };
  protoOf(LongSerializer).ed = function (encoder, value) {
    return this.il(encoder, value instanceof Long ? value : THROW_CCE());
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.jl_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).dd = function () {
    return this.jl_1;
  };
  protoOf(IntSerializer).kl = function (encoder, value) {
    return encoder.cf(value);
  };
  protoOf(IntSerializer).ed = function (encoder, value) {
    return this.kl(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.ll_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).dd = function () {
    return this.ll_1;
  };
  protoOf(ShortSerializer).ml = function (encoder, value) {
    return encoder.bf(value);
  };
  protoOf(ShortSerializer).ed = function (encoder, value) {
    return this.ml(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.nl_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).dd = function () {
    return this.nl_1;
  };
  protoOf(ByteSerializer).ol = function (encoder, value) {
    return encoder.af(value);
  };
  protoOf(ByteSerializer).ed = function (encoder, value) {
    return this.ol(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.pl_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).dd = function () {
    return this.pl_1;
  };
  protoOf(BooleanSerializer).ql = function (encoder, value) {
    return encoder.ze(value);
  };
  protoOf(BooleanSerializer).ed = function (encoder, value) {
    return this.ql(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.rl_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).dd = function () {
    return this.rl_1.dd();
  };
  protoOf(UnitSerializer).sl = function (encoder, value) {
    this.rl_1.cj(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).ed = function (encoder, value) {
    return this.sl(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.tl_1 = serialName;
    this.ul_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).nd = function () {
    return this.tl_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).od = function () {
    return this.ul_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).qd = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).sd = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).td = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.tl_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.tl_1 === other.tl_1 ? equals(this.ul_1, other.ul_1) : false)
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.tl_1) + imul(31, this.ul_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var keys = get_BUILTIN_SERIALIZERS().k1();
    var tmp0_iterator = keys.o();
    while (tmp0_iterator.v()) {
      var primitive = tmp0_iterator.w();
      var simpleName = capitalize(ensureNotNull(primitive.d5()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(_this__u8e3s4) > 0) {
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var it = charSequenceGet(_this__u8e3s4, 0);
      var tmp$ret$1 = isLowerCase(it) ? titlecase(it) : toString_0(it);
      var tmp_0 = toString(tmp$ret$1);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + _this__u8e3s4.substring(1);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().y5(), serializer(StringCompanionObject_instance)), to(getKClass(Char), serializer_0(Companion_getInstance())), to(PrimitiveClasses_getInstance().b6(), CharArraySerializer()), to(PrimitiveClasses_getInstance().w5(), serializer_1(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().h6(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().v5(), serializer_2(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().g6(), FloatArraySerializer()), to(getKClass(Long), serializer_3(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().f6(), LongArraySerializer()), to(getKClass(ULong), serializer_4(Companion_getInstance_1())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().u5(), serializer_5(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().e6(), IntArraySerializer()), to(getKClass(UInt), serializer_6(Companion_getInstance_2())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().t5(), serializer_7(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().d6(), ShortArraySerializer()), to(getKClass(UShort), serializer_8(Companion_getInstance_3())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().s5(), serializer_9(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().c6(), ByteArraySerializer()), to(getKClass(UByte), serializer_10(Companion_getInstance_4())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().r5(), serializer_11(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().a6(), BooleanArraySerializer()), to(getKClass(Unit), serializer_12(Unit_instance)), to(PrimitiveClasses_getInstance().q5(), NothingSerializer()), to(getKClass(Duration), serializer_13(Companion_getInstance_5()))]);
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.vl_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_3(Companion_getInstance_0()));
  }
  protoOf(ULongSerializer).dd = function () {
    return this.vl_1;
  };
  protoOf(ULongSerializer).wl = function (encoder, value) {
    var tmp = encoder.if(this.vl_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.df(tmp$ret$0);
  };
  protoOf(ULongSerializer).ed = function (encoder, value) {
    return this.wl(encoder, value instanceof ULong ? value.lc_1 : THROW_CCE());
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.xl_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_5(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).dd = function () {
    return this.xl_1;
  };
  protoOf(UIntSerializer).yl = function (encoder, value) {
    var tmp = encoder.if(this.xl_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.cf(tmp$ret$0);
  };
  protoOf(UIntSerializer).ed = function (encoder, value) {
    return this.yl(encoder, value instanceof UInt ? value.ac_1 : THROW_CCE());
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.zl_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_7(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).dd = function () {
    return this.zl_1;
  };
  protoOf(UShortSerializer).am = function (encoder, value) {
    var tmp = encoder.if(this.zl_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.bf(tmp$ret$0);
  };
  protoOf(UShortSerializer).ed = function (encoder, value) {
    return this.am(encoder, value instanceof UShort ? value.wc_1 : THROW_CCE());
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.bm_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_9(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).dd = function () {
    return this.bm_1;
  };
  protoOf(UByteSerializer).cm = function (encoder, value) {
    var tmp = encoder.if(this.bm_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.af(tmp$ret$0);
  };
  protoOf(UByteSerializer).ed = function (encoder, value) {
    return this.cm(encoder, value instanceof UByte ? value.pb_1 : THROW_CCE());
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).id = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.dm(kClass, typeArgumentsSerializers) : $super.dm.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.fm_1 = class2ContextualFactory;
    this.gm_1 = polyBase2Serializers;
    this.hm_1 = polyBase2DefaultSerializerProvider;
    this.im_1 = polyBase2NamedSerializers;
    this.jm_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).bg = function (baseClass, value) {
    if (!baseClass.e5(value))
      return null;
    var tmp0_safe_receiver = this.gm_1.s1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.hm_1.s1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).dm = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.fm_1.s1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.km(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).em = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.fm_1.t1().o();
    while (tmp0_iterator.v()) {
      var element = tmp0_iterator.w();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.y2();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.c3();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.nm_1;
        collector.om(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.mm(kclass, serial.lm_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.gm_1.t1().o();
    while (tmp0_iterator_0.v()) {
      var element_0 = tmp0_iterator_0.w();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.y2();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.c3();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_1 = classMap.t1().o();
      while (tmp0_iterator_1.v()) {
        var element_1 = tmp0_iterator_1.w();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.y2();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.c3();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.pm(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_2 = this.hm_1.t1().o();
    while (tmp0_iterator_2.v()) {
      var element_2 = tmp0_iterator_2.w();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.y2();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.c3();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.qm(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_3 = this.jm_1.t1().o();
    while (tmp0_iterator_3.v()) {
      var element_3 = tmp0_iterator_3.w();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.y2();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.c3();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.rm(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith() {
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).hd = get_isNullable;
  protoOf(SerialDescriptorImpl).pd = get_isInline;
  protoOf(AbstractEncoder).yf = encodeNotNullMark;
  protoOf(AbstractEncoder).zf = beginCollection;
  protoOf(AbstractEncoder).uf = encodeSerializableValue;
  protoOf(AbstractEncoder).wf = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).ag = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).hd = get_isNullable;
  protoOf(ListLikeDescriptor).pd = get_isInline;
  protoOf(ListLikeDescriptor).rd = get_annotations;
  protoOf(MapLikeDescriptor).hd = get_isNullable;
  protoOf(MapLikeDescriptor).pd = get_isInline;
  protoOf(MapLikeDescriptor).rd = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).hd = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).pd = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).si = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).hd = get_isNullable;
  protoOf(NothingSerialDescriptor).pd = get_isInline;
  protoOf(NothingSerialDescriptor).rd = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).hd = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).pd = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).rd = get_annotations;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SerializationException_init_$Init$_0;
  _.$_$.b = SerializationException_init_$Create$_0;
  _.$_$.c = SEALED_getInstance;
  _.$_$.d = STRING_getInstance;
  _.$_$.e = CONTEXTUAL_getInstance;
  _.$_$.f = ENUM_getInstance;
  _.$_$.g = CLASS_getInstance;
  _.$_$.h = LIST_getInstance;
  _.$_$.i = MAP_getInstance;
  _.$_$.j = BooleanSerializer_getInstance;
  _.$_$.k = FloatSerializer_getInstance;
  _.$_$.l = IntSerializer_getInstance;
  _.$_$.m = StringSerializer_getInstance;
  _.$_$.n = ListSerializer;
  _.$_$.o = MapSerializer;
  _.$_$.p = get_nullable;
  _.$_$.q = serializer;
  _.$_$.r = serializer_8;
  _.$_$.s = serializer_6;
  _.$_$.t = serializer_10;
  _.$_$.u = serializer_4;
  _.$_$.v = PolymorphicKind;
  _.$_$.w = PrimitiveKind;
  _.$_$.x = PrimitiveSerialDescriptor;
  _.$_$.y = get_annotations;
  _.$_$.z = get_isInline;
  _.$_$.a1 = get_isNullable;
  _.$_$.b1 = SerialDescriptor;
  _.$_$.c1 = ENUM;
  _.$_$.d1 = buildSerialDescriptor;
  _.$_$.e1 = getContextualDescriptor;
  _.$_$.f1 = AbstractEncoder;
  _.$_$.g1 = CompositeEncoder;
  _.$_$.h1 = Encoder;
  _.$_$.i1 = AbstractPolymorphicSerializer;
  _.$_$.j1 = typeParametersSerializers;
  _.$_$.k1 = GeneratedSerializer;
  _.$_$.l1 = HashMapSerializer;
  _.$_$.m1 = InlinePrimitiveDescriptor;
  _.$_$.n1 = PluginGeneratedSerialDescriptor;
  _.$_$.o1 = jsonCachedSerialNames;
  _.$_$.p1 = EmptySerializersModule_0;
  _.$_$.q1 = contextual;
  _.$_$.r1 = SerializersModuleCollector;
  _.$_$.s1 = KSerializer;
  _.$_$.t1 = SealedClassSerializer;
  _.$_$.u1 = SerializationException;
  _.$_$.v1 = findPolymorphicSerializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
