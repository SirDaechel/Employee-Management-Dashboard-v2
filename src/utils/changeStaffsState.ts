export const changeStaffsState = (
  dispatch: any,
  currentStaffs: any[],
  state1: any[],
  state2: any[],
  setState1: any,
  setState2: any,
  setShowActions: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const selectedStaffs = currentStaffs.filter((staff) => staff.checked);
  const setSelectedStaffsCheckedToFalse = selectedStaffs.map((staff) => ({
    ...staff,
    checked: false,
  }));
  dispatch(setState1([...setSelectedStaffsCheckedToFalse, ...state1]));
  const filterStaffsFromMainStaffs = state2.filter(
    (staff) => !selectedStaffs.includes(staff)
  );

  dispatch(setState2(filterStaffsFromMainStaffs));

  const setCheckedToFalse = filterStaffsFromMainStaffs.map((staff: any) => ({
    ...staff,
    checked: false,
  }));

  dispatch(setState2(setCheckedToFalse));

  setShowActions(false);
};

export const changeSingleStaffsState = (
  id: number,
  dispatch: any,
  state1: any[],
  state2: any[],
  setState1: any,
  setState2: any,
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>
) => {
  // get the staff
  const staffToBeArchived = state1.filter((staff) => staff.id === id);
  // send it to the archivedStaff array
  dispatch(setState1([staffToBeArchived[0], ...state2]));
  // remove this staff from the source array
  const filterStaffsFromMainStaffs = state1.filter(
    (staff) => !staffToBeArchived.includes(staff)
  );
  dispatch(setState2(filterStaffsFromMainStaffs));
  // close staffs options dialog box
  setShowOptions(false);
};
