function LicenseOutput({ license }) {
  return (
    <div>
      <pre>{JSON.stringify(license, null, 2)}</pre>
    </div>
  );
}

export default LicenseOutput;