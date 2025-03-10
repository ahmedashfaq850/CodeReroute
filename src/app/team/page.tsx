'use client';

import { Suspense } from 'react';
import { TeamMember } from '@/types';
import { TEAM_MEMBERS } from '@/constants';
import { Colors } from '@/constants/Colors';
import TeamMemberCard from '../../components/TeamMemberCard';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import styles from './TeamSection.module.scss';

// Loading component for better UX
function TeamSectionLoading() {
  return (
    <div
      className={styles.section}
      style={{ backgroundColor: Colors.Black }}
    >
      <div className={styles.grid}>
        {/* Add loading skeleton or spinner here */}
        <div className={styles.loading}>Loading team members...</div>
      </div>
    </div>
  );
}

function TeamSectionContent() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 1024;
  const displayedMembers = isMobile ? TEAM_MEMBERS : TEAM_MEMBERS.slice(0, -1);

  return (
    <div className={styles.grid}>
      {displayedMembers.map((member: TeamMember, index: number) => (
        <TeamMemberCard
          key={member.name}
          member={member}
          index={index}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}


export default function TeamSection() {
  return (
    <div
      className={styles.section}
      style={{ backgroundColor: Colors.Black }}
    >
      <Suspense fallback={<TeamSectionLoading />}>
        <TeamSectionContent />
      </Suspense>
    </div>
  );
}
