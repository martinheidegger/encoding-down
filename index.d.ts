import { AbstractLevelDOWN, AbstractChainedBatch, AbstractIterator } from 'abstract-leveldown';

import { CodecOptions } from 'level-codec';
export { CodecOptions, CodecEncoder } from 'level-codec';

export interface EncodingDOWN<K=any, V=any, O={}, PO={}, GO={}, DO={}, IO={}, BO={}> extends AbstractLevelDOWN<
  K, V, O, PO & CodecOptions, GO & CodecOptions, DO & CodecOptions, IO & CodecOptions, BO & CodecOptions> {
}

export interface EncodingChainedBatch<K=any, V=any, BO=any> extends AbstractChainedBatch<K, V, BO> {
}

export interface EncodingIterator<K=any, V=any> extends AbstractIterator<K, V> {
}

interface EncodingDOWNConstructor {
  <K=any, V=any, O={}, PO={}, GO={}, DO={}, IO={}, BO={}>(
    db: AbstractLevelDOWN<any, any, O, PO, GO, DO, IO, BO>,
    options?: CodecOptions
  ): EncodingDOWN<K, V, O, PO, GO, DO, IO, BO>
  new <K=any, V=any, O={}, PO={}, GO={}, DO={}, IO={}, BO={}>(
    db: AbstractLevelDOWN<any, any, O, PO, GO, DO, IO, BO>,
    options?: CodecOptions
  ): EncodingDOWN<K, V, O, PO, GO, DO, IO, BO>
}

declare const EncodingDOWN: EncodingDOWNConstructor;
export default EncodingDOWN;