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
