const baseRepo = requireUtil("baseRepo");
const table = "attributes";

const countAll = async (where = {}, whereNot = {}) => {
  return await baseRepo.countAll(table, where, whereNot);
};

const findWithConstraints = async (where = {}, columns) => {
  return await baseRepo.findAll(table, where, columns);
};

const create = async (payload) => {
  return await baseRepo.create(table, payload);
};

const first = async (payload) => {
  return await baseRepo.first(table, payload);
};

const update = async (where, payload) => {
  return await baseRepo.update(table, where, payload);
};

const createAttributeForUUID = async (uuid, payload, verify = false) => {
  return await baseRepo.create(table, {
    user_uuid: uuid,
    verified_at: verify ? new Date().toISOString() : NULL, //Todo
    type: payload.type,
    value: payload.value,
    purpose: payload.purpose,
  });
};

const getAttributesForUUID = async (uuid) => {
  return await baseRepo.findAll(table, { user_uuid: uuid });
};

const deleteAccount = async (where = {}) => {
  try {
    return await baseRepo.remove(table, where);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
  first,
  update,
  countAll,
  createAttributeForUUID,
  findWithConstraints,
  getAttributesForUUID,
  deleteAccount,
};
