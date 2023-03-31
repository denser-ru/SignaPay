import React from 'react';
import { useTranslation } from 'react-i18next';

function BusinessCorrespondence() {
    const { t } = useTranslation();

    return (
        <div className="business-correspondence">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3>{t('businessCorrespondence.businessCorrespondencePage')}</h3>
                            </div>
                            <div className="card-body">
                                <p>{t('businessCorrespondence.businessCorrespondenceDescription')}</p>
                                <ul>
                                    <li>{t('businessCorrespondence.emails')}</li>
                                    <li>{t('businessCorrespondence.letters')}</li>
                                    <li>{t('businessCorrespondence.invoices')}</li>
                                    <li>{t('businessCorrespondence.contracts')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessCorrespondence;
