import React from 'react'
import { find, isEmpty } from 'lodash'
import { Redirect } from 'react-router-dom'

interface Props {
  page?: PermissionScopeName
  scope?: UserScopes
  role?: Role
  children: React.ReactElement
  redirect?: boolean
}

const PermissionWrapper = ({
  children,
  page,
  scope = UserScopes.Read,
  role,
  redirect = false,
}: Props): React.ReactElement => {
  const scopePermission = find(
    permission?.scopes,
    scopeItem => scopeItem.name === page
  )

  const reader = (scopePermission?.read || scopePermission?.write) ?? false
  const writer = scopePermission?.write ?? false
  const buyer = (scopePermission?.read && scopePermission?.write) ?? false

  const permissionRole = permission?.role
  const hasRoleAccess =
    permissionRole === role || permissionRole === Role.Admin || isEmpty(role)

  let hasScopeAccess = reader || writer
  const scopeAccess: { [key in UserScopes]: boolean } = {
    [UserScopes.Read]: reader,
    [UserScopes.Write]: writer,
    [UserScopes.Buyer]: buyer,
  }

  if (scope) hasScopeAccess = scopeAccess[scope]
  const hasAccess = true
  // When permission is enabled, need to have access based on permissions
  // (permission.isEnabledPermission && hasScopeAccess) ||
  // // When permission is not enabled and there is a role
  // (!permission.isEnabledPermission && hasRoleAccess) ||
  // // In navbar when no page is specified (Help, settings)
  // isEmpty(page);
  if (hasAccess && !permission.noAccess) return <>{children}</>
  else
    return redirect ? (
      <Redirect
        to={{
          pathname: permission.noAccess ? JBTRoutes.accessDenied : '/',
        }}
      />
    ) : (
      <></>
    )
}

export default PermissionWrapper
