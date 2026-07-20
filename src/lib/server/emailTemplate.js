const BRAND = {
  primary: '#064058',
  accent: '#04CFE6',
  cream: '#F6F2ED',
  border: '#E4E9EC',
  text: '#535353',
  muted: '#687693',
};

export const escapeHtml = (value) =>
  String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const getLogoUrl = () => {
  const site = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  return site ? `${site}/images/email-logo.png` : undefined;
};

/**
 * Renders a branded HTML notification email.
 * @param {{ heading: string, intro?: string, rows: { label: string, value: string }[] }} params
 */
export const renderInquiryEmail = ({ heading, intro, rows }) => {
  const logoUrl = getLogoUrl();

  const rowsHtml = rows
    .filter((row) => row.value)
    .map(
      (row) => `
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid ${BRAND.border};width:38%;vertical-align:top;">
            <span style="font-family:'Segoe UI',Arial,sans-serif;font-size:13px;font-weight:600;color:${BRAND.muted};text-transform:uppercase;letter-spacing:.04em;">${escapeHtml(row.label)}</span>
          </td>
          <td style="padding:14px 0;border-bottom:1px solid ${BRAND.border};vertical-align:top;">
            <span style="font-family:'Segoe UI',Arial,sans-serif;font-size:15px;color:${BRAND.primary};white-space:pre-wrap;">${escapeHtml(row.value)}</span>
          </td>
        </tr>`
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(heading)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:${BRAND.cream};font-family:'Segoe UI',Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.cream};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(6,64,88,0.08);">
            <tr>
              <td style="background-color:${BRAND.primary};padding:28px 32px;">
                ${
                  logoUrl
                    ? `<img src="${logoUrl}" alt="Sleet Logistics" height="32" style="display:block;height:32px;" />`
                    : `<span style="font-family:'Segoe UI',Arial,sans-serif;font-size:20px;font-weight:700;color:#ffffff;">Sleet Logistics</span>`
                }
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 4px;font-family:'Segoe UI',Arial,sans-serif;font-size:13px;font-weight:600;color:${BRAND.accent};text-transform:uppercase;letter-spacing:.06em;">New website submission</p>
                <h1 style="margin:0 0 24px;font-family:'Segoe UI',Arial,sans-serif;font-size:22px;color:${BRAND.primary};">${escapeHtml(heading)}</h1>
                ${intro ? `<p style="margin:0 0 24px;font-family:'Segoe UI',Arial,sans-serif;font-size:14px;color:${BRAND.text};line-height:1.6;">${escapeHtml(intro)}</p>` : ''}
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${rowsHtml}
                </table>
              </td>
            </tr>
            <tr>
              <td style="background-color:${BRAND.cream};padding:20px 32px;">
                <p style="margin:0;font-family:'Segoe UI',Arial,sans-serif;font-size:12px;color:${BRAND.muted};">
                  This message was sent automatically from the Sleet Logistics website contact tools.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};
