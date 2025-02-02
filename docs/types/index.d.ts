/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { NumericArray } from '@stdlib/types/array';

/**
* Interface describing `gcusumkbn2`.
*/
interface Routine {
	/**
	* Computes the cumulative sum of strided array elements using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* gcusumkbn2( x.length, 0.0, x, 1, y, 1 );
	* // y => [ 1.0, -1.0, 1.0 ]
	*/
	( N: number, sum: number, x: NumericArray, strideX: number, y: NumericArray, strideY: number ): NumericArray;

	/**
	* Computes the cumulative sum of strided array elements using a second-order iterative Kahan–Babuška algorithm and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @param offsetY - starting index for `y`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* gcusumkbn2.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => [ 1.0, -1.0, 1.0 ]
	*/
	ndarray( N: number, sum: number, x: NumericArray, strideX: number, offsetX: number, y: NumericArray, strideY: number, offsetY: number ): NumericArray;
}

/**
* Computes the cumulative sum of strided array elements using a second-order iterative Kahan–Babuška algorithm.
*
* @param N - number of indexed elements
* @param sum - initial sum
* @param x - input array
* @param strideX - stride length for `x`
* @param y - output array
* @param strideY - stride length for `y`
* @returns output array
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
* var y = [ 0.0, 0.0, 0.0 ];
*
* gcusumkbn2( x.length, 0.0, x, 1, y, 1 );
* // y => [ 1.0, -1.0, 1.0 ]
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
* var y = [ 0.0, 0.0, 0.0 ];
*
* gcusumkbn2.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
* // y => [ 1.0, -1.0, 1.0 ]
*/
declare var gcusumkbn2: Routine;


// EXPORTS //

export = gcusumkbn2;
