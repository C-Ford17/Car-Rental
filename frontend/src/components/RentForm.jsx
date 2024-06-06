import React from 'react';

const RentForm = ({ form, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={onChange} />
      <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={onChange} />
      <input type="text" name="idNumber" placeholder="ID Number" value={form.idNumber} onChange={onChange} />
      <input type="text" name="address" placeholder="Address" value={form.address} onChange={onChange} />
      <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={onChange} />
      <button type="submit">Confirm</button>
    </form>
  );
};

export default RentForm;