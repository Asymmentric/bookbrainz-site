/*
 * Copyright (C) 2017  Ben Ockmore
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

// @flow

import {Iterable} from 'immutable';
import _ from 'lodash';
import {dateValidator} from './date';
import validator from 'validator';


export function get(
	object: any,
	path: string,
	defaultValue: ?mixed = null
): mixed {
	if (Iterable.isIterable(object)) {
		return object.get(path, defaultValue);
	}
	return _.get(object, path, defaultValue);
}

export function getIn(
	object: any,
	path: string,
	defaultValue: ?mixed = null
): mixed {
	if (Iterable.isIterable(object)) {
		return object.getIn(path, defaultValue);
	}
	return _.get(object, path, defaultValue);
}

export function isPositiveInt(value: ?string): boolean {
	return validator.isInt(value, {gt: 0});
}

export function absentAndRequired(value: any, required: ?boolean): boolean {
	return Boolean(required && _.isNil(value));
}

export function nilOrString(value: any): boolean {
	return _.isNil(value) || _.isString(value);
}

export function nilOrInteger(value: any): boolean {
	return _.isNil(value) || _.isInteger(value);
}

export function validateOptionalString(value: any): boolean {
	return nilOrString(value);
}

export function validateRequiredString(value: any): boolean {
	if (!_.isString(value)) {
		return false;
	}

	return Boolean(value);
}

export function validatePositiveInteger(
	value: any, required: boolean = false
): boolean {
	if (absentAndRequired(value, required)) {
		return false;
	}

	if (!nilOrInteger(value)) {
		return false;
	}

	return _.isNil(value) || (_.isInteger(value) && value > 0);
}

export function validateBoolean(
	value: mixed
): boolean {
	return _.isBoolean(value);
}

export function validateDate(value: mixed) {
	const year = _.get(value, 'year');
	const month = _.get(value, 'month');
	const day = _.get(value, 'day');
	const {isValid, errorMessage} = dateValidator(day, month, year);
	return {errorMessage, isValid};
}

export function isNullValue(date) {
	return !_.get(date, 'day') && !_.get(date, 'month') && !_.get(date, 'year');
}

export function dateIsBefore(beginValue: mixed, endValue: mixed): boolean {
	if (isNullValue(beginValue) || isNullValue(endValue) || !validateDate(beginValue).isValid ||
		!validateDate(endValue).isValid) {
		return true;
	}

	const beginYear = _.toInteger(beginValue.year);
	const beginMonth = _.toInteger(beginValue.month);
	const beginDay = _.toInteger(beginValue.day);

	const endYear = _.toInteger(endValue.year);
	const endMonth = _.toInteger(endValue.month);
	const endDay = _.toInteger(endValue.day);

	if (beginYear < endYear) {
		return true;
	}
	else if (beginYear > endYear) {
		return false;
	}
	else if (beginYear === endYear && beginMonth > endMonth) {
		return false;
	}
	else if (beginMonth === endMonth && beginDay > endDay) {
		return false;
	}
	else if (beginDay === endDay) {
		return false;
	}

	return true;
}

export function validateUUID(
	value: mixed, required: boolean = false
): boolean {
	if (absentAndRequired(value, required)) {
		return false;
	}

	if (!nilOrString(value)) {
		return false;
	}

	return !value || validator.isUUID(value);
}
