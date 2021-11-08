export const HasRequiredPermission = (permissions, listOfPermission) => {
  let notFound = true;
  listOfPermission && listOfPermission.forEach(
    permission => {
      if ( permissions && !permissions.includes(permission) ) {
        notFound = false;
      }
    }
  );
  return notFound;
};
