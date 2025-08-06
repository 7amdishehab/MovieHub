import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { TVShowsContext } from "../context/TVShowContext";
import Spinner from "../components/common/Loading/Spinner";
import TVShowHeroSection from "../components/details/TVShowHeroSection";
import TVShowInfoSection from "../components/details/TVShowInfoSection";
import PosterWithInfo from "../components/details/PosterWithInfo";
import SectionTitle from "../components/common/SectionTitle";
import RecommendationsGrid from "../components/details/RecommendationsGrid";

function TVShowDetailsPage() {
  const { id } = useParams();
  const {
    tvshowDetail: tvshow,
    loadingDetail: loading,
    recommendations,
    loadingRecommendations,
    getTVShowDetail,
    getTVShowRecommendations,
  } = useContext(TVShowsContext);

  useEffect(() => {
    getTVShowDetail(id);
    getTVShowRecommendations(id);
  }, [id, getTVShowDetail, getTVShowRecommendations]);

  if (loading) return <Spinner />;
  if (!tvshow)
    return (
      <div className="text-center text-white py-10">No TV show found.</div>
    );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <TVShowHeroSection tvshow={tvshow} />
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <TVShowInfoSection tvshow={tvshow} />
              </div>
              <div className="md:col-span-1">
                <PosterWithInfo
                  poster_path={tvshow.poster_path}
                  name={tvshow.name}
                  status={tvshow.status}
                  original_language={tvshow.original_language}
                  number_of_seasons={tvshow.number_of_seasons}
                  number_of_episodes={tvshow.number_of_episodes}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <SectionTitle>You Might Also Like</SectionTitle>
          <RecommendationsGrid
            items={recommendations}
            type="tv"
            loading={loadingRecommendations}
          />
        </div>
      </div>
    </div>
  );
}

export default TVShowDetailsPage;
