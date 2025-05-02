// src/pages/WaitingListPage.jsx
function WaitingListPage() {
  return (
    <div>
      <a
        href="https://clinic-management-system-27d11.web.app/dashboard?publicToken=a7a429c9-e69c-46a0-a269-8a1e9634b882&sessionToken=fd92b5f1-a84f-466f-b72f-984819d9e458"
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Ensures security when opening in a new tab
        style={{ textDecoration: "none", color: "blue", fontSize: "16px" }}
      >
        Go to the Waiting List Dashboard
      </a>
    </div>
  );
}

export default WaitingListPage;
