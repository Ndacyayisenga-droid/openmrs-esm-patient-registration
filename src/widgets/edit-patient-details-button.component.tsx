import React from 'react';
import { ConfigurableLink } from '@openmrs/esm-framework';
import { useTranslation } from 'react-i18next';

export default function EditPatientDetailsButton({ patientUuid }) {
  const { t } = useTranslation();
  return (
    <li className="bx--overflow-menu-options__option">
      <ConfigurableLink
        to={`\${openmrsSpaBase}/patient/${patientUuid}/edit`}
        className="bx--overflow-menu-options__btn"
        title={t('Edit Patient Details', 'Edit Patient Details')}>
        <span className="bx--overflow-menu-options__option-content">
          {t('Edit Patient Details', 'Edit Patient Details')}
        </span>
      </ConfigurableLink>
    </li>
  );
}
