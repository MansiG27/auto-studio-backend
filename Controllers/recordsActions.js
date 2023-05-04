import { createRecordDoc, getRecordDoc } from "../BusinessLayer/recordActions";

export const getRecords = (params) => {
  let retObj = null;
  let filterObj = {};
  let projObj = {};

  if (params) {
    filterObj.id = params?.id;
  }

  projObj = {};

  retObj = getRecordDoc(filterObj, projObj);
  return retObj;
};

export const createRecord = (payload, params) => {
  let retObj = null;
  let filterObj = {};
  let projObj = {};

  if (params) {
    filterObj.id = params?.id;
  }

  projObj = {};

  retObj = createRecordDoc(payload, filterObj, projObj);
  return retObj;
};
