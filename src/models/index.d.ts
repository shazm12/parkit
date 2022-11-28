import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum ParkingStatus {
  PARKED = "PARKED",
  EXITED = "EXITED"
}



type EagerMall = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mall, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly serialNo?: string | null;
  readonly parkingSpaces?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMall = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mall, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly serialNo?: string | null;
  readonly parkingSpaces?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Mall = LazyLoading extends LazyLoadingDisabled ? EagerMall : LazyMall

export declare const Mall: (new (init: ModelInit<Mall>) => Mall) & {
  copyOf(source: Mall, mutator: (draft: MutableModel<Mall>) => MutableModel<Mall> | void): Mall;
}

type EagerParkingBill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ParkingBill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly amt?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyParkingBill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ParkingBill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly amt?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ParkingBill = LazyLoading extends LazyLoadingDisabled ? EagerParkingBill : LazyParkingBill

export declare const ParkingBill: (new (init: ModelInit<ParkingBill>) => ParkingBill) & {
  copyOf(source: ParkingBill, mutator: (draft: MutableModel<ParkingBill>) => MutableModel<ParkingBill> | void): ParkingBill;
}

type EagerBlocks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blocks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly totalfree?: string | null;
  readonly mallID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlocks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blocks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly totalfree?: string | null;
  readonly mallID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Blocks = LazyLoading extends LazyLoadingDisabled ? EagerBlocks : LazyBlocks

export declare const Blocks: (new (init: ModelInit<Blocks>) => Blocks) & {
  copyOf(source: Blocks, mutator: (draft: MutableModel<Blocks>) => MutableModel<Blocks> | void): Blocks;
}

type EagerParking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Parking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customerName?: string | null;
  readonly toa?: string | null;
  readonly tod?: string | null;
  readonly status?: ParkingStatus | keyof typeof ParkingStatus | null;
  readonly mallName?: string | null;
  readonly parkZone?: string | null;
  readonly parkNo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyParking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Parking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customerName?: string | null;
  readonly toa?: string | null;
  readonly tod?: string | null;
  readonly status?: ParkingStatus | keyof typeof ParkingStatus | null;
  readonly mallName?: string | null;
  readonly parkZone?: string | null;
  readonly parkNo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Parking = LazyLoading extends LazyLoadingDisabled ? EagerParking : LazyParking

export declare const Parking: (new (init: ModelInit<Parking>) => Parking) & {
  copyOf(source: Parking, mutator: (draft: MutableModel<Parking>) => MutableModel<Parking> | void): Parking;
}